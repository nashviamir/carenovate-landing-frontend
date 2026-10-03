/**
 * Content pipeline: moves CMS content between environments as a "content
 * bundle" — plain JSON plus media files that can be committed, reviewed and
 * deployed like code.
 *
 *   npm run content:export                   DB → ./content
 *   npm run content:import -- --dry-run      show what an import would change
 *   npm run content:import                   ./content → DB
 *   npm run content:import -- --only home-page,faq-page
 *   npm run content:import -- --except tracking,seo-settings
 *   npm run content:seed                     import only what doesn't exist yet
 *
 * Bundle layout:
 *   content/globals/<slug>.json   one file per global
 *   content/collections/<slug>.json  pages and redirects
 *   content/media.json            media library metadata
 *   content/media/<filename>      media files
 *
 * Uploads are stored as { "$media": "<filename>" } and re-linked by filename,
 * so a bundle works against any database regardless of its IDs.
 *
 * Export reads published content: unpublished drafts and never-published
 * pages are not exported.
 *
 * Import rules:
 *   - Globals in the bundle replace and publish over the target's version. The
 *     previous one is kept in the version history and can be restored.
 *   - Media are matched by filename: missing files are added, changed files are
 *     replaced, and media that exist only in the target are left untouched.
 *   - Bundled collection entries (e.g. redirects) are matched by a unique key
 *     field: missing ones are added, changed ones updated, others left alone.
 *   - All global and collection updates run in one transaction: either all
 *     apply or none.
 *   - Users are never exported or imported.
 */
import config from '@payload-config';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import {
  commitTransaction,
  createLocalReq,
  getPayload,
  initTransaction,
  killTransaction,
  type Field,
  type GlobalSlug,
  type Payload,
} from 'payload';
import { fieldAffectsData, tabHasName } from 'payload/shared';
import { parseArgs } from 'util';

type Data = Record<string, unknown>;

/** Collections carried in the bundle, with the unique field that identifies an entry. */
const BUNDLE_COLLECTIONS = { pages: 'slug', redirects: 'from' } as const;
type BundleCollection = keyof typeof BUNDLE_COLLECTIONS;

const hasDrafts = (payload: Payload, slug: BundleCollection) =>
  Boolean(payload.collections[slug].config.versions?.drafts);

/** Published entries only, for collections with drafts. */
const publishedOnly = (payload: Payload, slug: BundleCollection) =>
  hasDrafts(payload, slug) ? { _status: { equals: 'published' } } : undefined;
type MediaRef = { $media: string };
type MediaEntry = Data & { filename: string };

const SYSTEM_FIELDS = new Set(['id', 'createdAt', 'updatedAt', 'globalType', '_status']);
// Fields Payload adds to upload collections; they describe the file itself.
const UPLOAD_FIELDS = new Set([
  'filename',
  'mimeType',
  'filesize',
  'width',
  'height',
  'focalX',
  'focalY',
  'url',
  'thumbnailURL',
  'sizes',
]);

// ─── Field walking ───────────────────────────────────────────────────────────

/**
 * Copies `data` following its field config, keeping only content fields and
 * passing every upload value through `mapUpload`. Array row IDs are dropped so
 * the output is stable between databases.
 */
function mapFields(
  fields: Field[],
  data: Data | null | undefined,
  mapUpload: (value: unknown) => unknown,
  skip: Set<string> = SYSTEM_FIELDS,
): Data {
  const out: Data = {};

  for (const field of fields) {
    if (field.type === 'tabs') {
      for (const tab of field.tabs) {
        if (tabHasName(tab)) {
          out[tab.name] = mapFields(tab.fields, data?.[tab.name] as Data, mapUpload, skip);
        } else {
          Object.assign(out, mapFields(tab.fields, data, mapUpload, skip));
        }
      }
      continue;
    }

    if (!fieldAffectsData(field)) {
      // Layout-only fields (row, collapsible, unnamed group) hold data inline.
      if ('fields' in field) Object.assign(out, mapFields(field.fields, data, mapUpload, skip));
      continue;
    }

    if (skip.has(field.name) || field.virtual) continue;
    const value = data?.[field.name];

    switch (field.type) {
      case 'group':
        out[field.name] = mapFields(field.fields, value as Data, mapUpload, skip);
        break;
      case 'array':
        out[field.name] = ((value as Data[] | null) ?? []).map((row) =>
          mapFields(field.fields, row, mapUpload, skip),
        );
        break;
      case 'blocks':
        out[field.name] = ((value as Data[] | null) ?? []).map((row) => {
          const block = field.blocks.find((b) => b.slug === row.blockType);
          if (!block) throw new Error(`Unknown block "${String(row.blockType)}" in ${field.name}`);
          return { blockType: row.blockType, ...mapFields(block.fields, row, mapUpload, skip) };
        });
        break;
      case 'upload':
        if (field.relationTo !== 'media') {
          throw new Error(`Upload field "${field.name}" must relate to media to be bundled`);
        }
        out[field.name] = Array.isArray(value)
          ? value.map(mapUpload)
          : value == null
            ? null
            : mapUpload(value);
        break;
      case 'relationship':
      case 'join':
      case 'richText':
        // IDs inside these can't be re-linked safely; fail loudly instead.
        throw new Error(
          `Field "${field.name}" (${field.type}) is not supported by the content bundle yet`,
        );
      default:
        out[field.name] = value ?? null;
    }
  }

  return out;
}

/** JSON with sorted keys, so comparisons don't depend on key order. */
function stableStringify(value: unknown): string {
  return JSON.stringify(value, (_key, v) =>
    v && typeof v === 'object' && !Array.isArray(v)
      ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)))
      : v,
  );
}

async function sha256(file: string): Promise<string | null> {
  try {
    return createHash('sha256').update(await fs.readFile(file)).digest('hex');
  } catch {
    return null;
  }
}

async function readJson<T>(file: string): Promise<T> {
  return JSON.parse(await fs.readFile(file, 'utf8')) as T;
}

async function writeJson(file: string, data: unknown) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(data, null, 2)}\n`);
}

// ─── Target state ────────────────────────────────────────────────────────────

function mediaConfig(payload: Payload) {
  const media = payload.collections.media.config;
  const fields = media.fields;
  const staticDir = media.upload.staticDir;
  if (!staticDir) throw new Error('The media collection has no upload.staticDir');
  return { fields, staticDir };
}

async function loadMedia(payload: Payload) {
  const { docs } = await payload.find({
    collection: 'media',
    depth: 0,
    pagination: false,
    sort: 'filename',
  });
  return docs.filter((doc) => doc.filename);
}

function toMediaEntry(fields: Field[], doc: Data & { filename?: string | null }): MediaEntry {
  const skip = new Set([...SYSTEM_FIELDS, ...UPLOAD_FIELDS]);
  return { filename: doc.filename as string, ...mapFields(fields, doc, (v) => v, skip) };
}

/** Exports a global as bundle data, turning media IDs into filename refs. */
function toBundleGlobal(
  fields: Field[],
  doc: Data,
  filenameById: Map<number | string, string>,
): Data {
  return mapFields(fields, doc, (id): MediaRef => {
    const filename = filenameById.get(id as number);
    if (!filename) throw new Error(`Media ${String(id)} is referenced but does not exist`);
    return { $media: filename };
  });
}

function globalConfigs(payload: Payload) {
  return payload.config.globals.map((g) => ({ slug: g.slug as GlobalSlug, fields: g.fields }));
}

/** Compares by content when the stored file is readable, else by size. */
async function fileChanged(bundleFile: string, storedFile: string, storedSize?: number | null) {
  const stored = await sha256(storedFile);
  if (stored) return stored !== (await sha256(bundleFile));
  return (await fs.stat(bundleFile)).size !== storedSize;
}

// ─── Export ──────────────────────────────────────────────────────────────────

async function exportBundle(payload: Payload, dir: string) {
  const { fields, staticDir } = mediaConfig(payload);
  const media = await loadMedia(payload);
  const filenameById = new Map(media.map((doc) => [doc.id, doc.filename as string]));

  // Rebuild the bundle from scratch so deleted media/globals don't linger.
  await fs.rm(path.join(dir, 'globals'), { recursive: true, force: true });
  await fs.rm(path.join(dir, 'collections'), { recursive: true, force: true });
  await fs.rm(path.join(dir, 'media'), { recursive: true, force: true });
  await fs.mkdir(path.join(dir, 'media'), { recursive: true });

  for (const doc of media) {
    await fs.copyFile(
      path.join(staticDir, doc.filename as string),
      path.join(dir, 'media', doc.filename as string),
    );
  }
  await writeJson(
    path.join(dir, 'media.json'),
    media.map((doc) => toMediaEntry(fields, doc as unknown as Data)),
  );
  console.log(`  media    ${media.length} file(s)`);

  for (const global of globalConfigs(payload)) {
    const doc = await payload.findGlobal({ slug: global.slug, depth: 0 });
    await writeJson(
      path.join(dir, 'globals', `${global.slug}.json`),
      toBundleGlobal(global.fields, doc as unknown as Data, filenameById),
    );
    console.log(`  global   ${global.slug}`);
  }

  for (const [slug, key] of Object.entries(BUNDLE_COLLECTIONS) as [BundleCollection, string][]) {
    const fields = payload.collections[slug].config.fields;
    const { docs } = await payload.find({
      collection: slug,
      depth: 0,
      pagination: false,
      sort: key,
      where: publishedOnly(payload, slug),
    });
    await writeJson(
      path.join(dir, 'collections', `${slug}.json`),
      docs.map((doc) => toBundleGlobal(fields, doc as unknown as Data, filenameById)),
    );
    console.log(`  ${slug.padEnd(8)} ${docs.length} entr${docs.length === 1 ? 'y' : 'ies'}`);
  }
}

// ─── Import ──────────────────────────────────────────────────────────────────

interface ImportOptions {
  dryRun: boolean;
  onlyMissing: boolean;
  only: string[] | null;
  except: string[];
}

async function importBundle(payload: Payload, dir: string, opts: ImportOptions) {
  const { fields: mediaFields, staticDir } = mediaConfig(payload);
  const configs = globalConfigs(payload);
  const selected = (slug: string) =>
    (!opts.only || opts.only.includes(slug)) && !opts.except.includes(slug);

  // ── Read and validate the bundle before touching anything ──
  const bundleMedia = await readJson<MediaEntry[]>(path.join(dir, 'media.json'));
  const bundleFilenames = new Set(bundleMedia.map((m) => m.filename));
  const bundleGlobals: Array<{ slug: GlobalSlug; fields: Field[]; data: Data }> = [];
  const referenced = new Set<string>();
  // Missing media refs throw here, before anything is written.
  const checkMediaRefs = (fields: Field[], data: Data, where: string) =>
    mapFields(fields, data, (ref) => {
      const filename = (ref as MediaRef)?.$media;
      if (!bundleFilenames.has(filename)) {
        throw new Error(`${where}: media "${String(filename)}" is not in the bundle`);
      }
      referenced.add(filename);
      return ref;
    });

  for (const slug of [...(opts.only ?? []), ...opts.except]) {
    if (!configs.some((g) => g.slug === slug) && !(slug in BUNDLE_COLLECTIONS)) {
      throw new Error(`"${slug}" is not a global or bundled collection`);
    }
  }

  for (const file of (await fs.readdir(path.join(dir, 'globals'))).sort()) {
    if (!file.endsWith('.json')) continue;
    const slug = file.replace(/\.json$/, '');
    if (!selected(slug)) continue;
    const global = configs.find((g) => g.slug === slug);
    if (!global) throw new Error(`Bundle has unknown global "${slug}"`);
    const data = await readJson<Data>(path.join(dir, 'globals', file));
    checkMediaRefs(global.fields, data, slug);
    bundleGlobals.push({ slug: global.slug, fields: global.fields, data });
  }

  const bundleCollections: Array<{
    slug: BundleCollection;
    key: string;
    fields: Field[];
    entries: Data[];
  }> = [];
  for (const [slug, key] of Object.entries(BUNDLE_COLLECTIONS) as [BundleCollection, string][]) {
    if (!selected(slug)) continue;
    // Optional, so bundles exported before a collection was added still import.
    const entries = await readJson<Data[]>(path.join(dir, 'collections', `${slug}.json`)).catch(
      () => null,
    );
    if (!entries) continue;
    const fields = payload.collections[slug].config.fields;
    const keys = new Set<unknown>();
    for (const entry of entries) {
      if (keys.has(entry[key])) throw new Error(`${slug}: duplicate ${key} "${String(entry[key])}"`);
      keys.add(entry[key]);
      checkMediaRefs(fields, entry, slug);
    }
    bundleCollections.push({ slug, key, fields, entries });
  }

  // ── Plan ──
  const targetMedia = await loadMedia(payload);
  const targetByFilename = new Map(targetMedia.map((doc) => [doc.filename as string, doc]));
  const filenameById = new Map(targetMedia.map((doc) => [doc.id, doc.filename as string]));

  type MediaAction = 'create' | 'replace' | 'update' | 'unchanged' | 'exists';
  const mediaPlan: Array<{ entry: MediaEntry; file: string; action: MediaAction }> = [];
  // With --only, bring along just the media the selected content uses.
  for (const entry of bundleMedia.filter((m) => !opts.only || referenced.has(m.filename))) {
    const file = path.join(dir, 'media', entry.filename);
    const existing = targetByFilename.get(entry.filename);
    let action: MediaAction;
    if (!existing) action = 'create';
    else if (opts.onlyMissing) action = 'exists';
    else if (await fileChanged(file, path.join(staticDir, entry.filename), existing.filesize)) {
      action = 'replace';
    }
    else if (
      stableStringify(toMediaEntry(mediaFields, existing as unknown as Data)) !==
      stableStringify(entry)
    )
      action = 'update';
    else action = 'unchanged';
    mediaPlan.push({ entry, file, action });
  }

  type GlobalAction = 'update' | 'unchanged' | 'exists';
  const globalPlan: Array<(typeof bundleGlobals)[number] & { action: GlobalAction }> = [];
  for (const global of bundleGlobals) {
    const current = (await payload.findGlobal({ slug: global.slug, depth: 0 })) as unknown as Data;
    let action: GlobalAction;
    // A global that was never saved has no `updatedAt`.
    if (opts.onlyMissing && current.updatedAt) action = 'exists';
    else {
      const currentData = toBundleGlobal(global.fields, current, filenameById);
      action = stableStringify(currentData) === stableStringify(global.data) ? 'unchanged' : 'update';
    }
    globalPlan.push({ ...global, action });
  }

  type EntryAction = 'create' | 'update' | 'unchanged' | 'exists';
  const entryPlan: Array<{
    slug: BundleCollection;
    key: string;
    fields: Field[];
    data: Data;
    id?: number | string;
    action: EntryAction;
  }> = [];
  for (const { slug, key, fields, entries } of bundleCollections) {
    // Compared against what's published; an unpublished draft counts as missing.
    const { docs } = await payload.find({
      collection: slug,
      depth: 0,
      pagination: false,
      where: publishedOnly(payload, slug),
    });
    const byKey = new Map(docs.map((doc) => [(doc as unknown as Data)[key], doc]));
    for (const data of entries) {
      const existing = byKey.get(data[key]);
      let action: EntryAction;
      if (!existing) action = 'create';
      else if (opts.onlyMissing) action = 'exists';
      else {
        const current = toBundleGlobal(fields, existing as unknown as Data, filenameById);
        action = stableStringify(current) === stableStringify(data) ? 'unchanged' : 'update';
      }
      entryPlan.push({ slug, key, fields, data, id: existing?.id, action });
    }
  }

  for (const { entry, action } of mediaPlan) console.log(`  media    ${action.padEnd(9)} ${entry.filename}`);
  for (const { slug, action } of globalPlan) console.log(`  global   ${action.padEnd(9)} ${slug}`);
  for (const { slug, key, data, action } of entryPlan) {
    console.log(`  ${slug.padEnd(8)} ${action.padEnd(9)} ${String(data[key])}`);
  }

  const pending =
    mediaPlan.filter((m) => ['create', 'replace', 'update'].includes(m.action)).length +
    globalPlan.filter((g) => g.action === 'update').length +
    entryPlan.filter((e) => e.action === 'create' || e.action === 'update').length;
  if (opts.dryRun) {
    console.log(`\nDry run: ${pending} change(s) would be applied.`);
    return;
  }
  if (pending === 0) {
    console.log('\nNothing to import.');
    return;
  }

  // ── Apply media (files can't be part of a DB transaction) ──
  const idByFilename = new Map(targetMedia.map((doc) => [doc.filename as string, doc.id]));
  for (const { entry, file, action } of mediaPlan) {
    const { filename: _filename, ...data } = entry;
    const existing = targetByFilename.get(entry.filename);
    if (action === 'create') {
      const doc = await payload.create({
        collection: 'media',
        data: data as never,
        filePath: file,
        // Keep the bundle's filename even if a stray file of that name exists.
        overwriteExistingFiles: true,
      });
      idByFilename.set(entry.filename, doc.id);
    } else if (existing && (action === 'replace' || action === 'update')) {
      await payload.update({
        collection: 'media',
        id: existing.id,
        data: data as never,
        // Replace the file in place, keeping its filename (and URL).
        ...(action === 'replace' ? { filePath: file, overwriteExistingFiles: true } : {}),
      });
    }
  }

  // ── Apply globals and collection entries atomically ──
  const req = await createLocalReq({}, payload);
  await initTransaction(req);
  try {
    for (const global of globalPlan) {
      if (global.action !== 'update') continue;
      const data = mapFields(global.fields, global.data, (ref) =>
        idByFilename.get((ref as MediaRef).$media),
      );
      await payload.updateGlobal({
        slug: global.slug,
        data: { ...data, _status: 'published' } as never,
        depth: 0,
        req,
      });
    }
    for (const entry of entryPlan) {
      const data = mapFields(entry.fields, entry.data, (ref) =>
        idByFilename.get((ref as MediaRef).$media),
      );
      if (hasDrafts(payload, entry.slug)) data._status = 'published';
      if (entry.action === 'create') {
        await payload.create({ collection: entry.slug, data: data as never, depth: 0, req });
      } else if (entry.action === 'update' && entry.id != null) {
        await payload.update({
          collection: entry.slug,
          id: entry.id,
          data: data as never,
          depth: 0,
          req,
        });
      }
    }
    await commitTransaction(req);
  } catch (error) {
    await killTransaction(req);
    throw error;
  }

  console.log(`\nImported ${pending} change(s).`);
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    dir: { type: 'string', default: 'content' },
    'dry-run': { type: 'boolean', default: false },
    'only-missing': { type: 'boolean', default: false },
    only: { type: 'string' },
    except: { type: 'string' },
  },
});

const command = positionals[0];
const dir = path.resolve(process.cwd(), values.dir);

if (command !== 'export' && command !== 'import') {
  console.error(
    'Usage: content <export|import> [--dir content] [--dry-run] [--only-missing] [--only a,b] [--except a,b]',
  );
  process.exit(1);
}

const payload = await getPayload({ config });
try {
  if (command === 'export') {
    console.log(`Exporting content to ${dir}`);
    await exportBundle(payload, dir);
  } else {
    console.log(`Importing content from ${dir}${values['dry-run'] ? ' (dry run)' : ''}`);
    await importBundle(payload, dir, {
      dryRun: values['dry-run'],
      onlyMissing: values['only-missing'],
      only: values.only ? values.only.split(',').map((s) => s.trim()) : null,
      except: values.except ? values.except.split(',').map((s) => s.trim()) : [],
    });
  }
} catch (error) {
  console.error(`\n${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
} finally {
  await payload.destroy();
}
process.exit();
