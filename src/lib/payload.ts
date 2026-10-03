import config from '@payload-config';
import { draftMode } from 'next/headers';
import { getPayload, type GlobalSlug } from 'payload';
import { cache } from 'react';

/**
 * Reads a global straight from the database via the Local API. Wrapped in
 * React `cache` so a global used by both a layout and `generateMetadata`
 * is fetched once per request. In draft mode (live preview) it returns the
 * latest draft; otherwise the published version.
 */
export const getGlobal = cache(async <T extends GlobalSlug>(slug: T) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug, depth: 1, draft });
});

/**
 * A page by its slug: the published version for visitors, the latest draft
 * (even if never published) in live preview.
 */
export const getPage = cache(async (slug: string) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'pages',
    depth: 1,
    limit: 1,
    pagination: false,
    draft,
    where: draft
      ? { slug: { equals: slug } }
      : { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
  });
  return docs[0] ?? null;
});

/** All published pages, for the sitemap and llms.txt. */
export const getPublishedPages = cache(async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'pages',
    depth: 0,
    pagination: false,
    sort: 'slug',
    where: { _status: { equals: 'published' } },
  });
  return docs;
});
