import { postgresAdapter } from '@payloadcms/db-postgres';
import { seoPlugin } from '@payloadcms/plugin-seo';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Redirects } from './collections/Redirects';
import { Users } from './collections/Users';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';
import { SeoSettings } from './globals/SeoSettings';
import { SiteSettings } from './globals/SiteSettings';
import { Tracking } from './globals/Tracking';
import { pageSeoFields } from './fields/seo';
import { pagePath } from './lib/pages';
import { siteUrl } from './lib/siteUrl';
import { migrations } from './migrations';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

type Section = Record<string, unknown> & {
  heading?: string;
  intro?: unknown;
  image?: unknown;
};

/**
 * What the SEO tab's "auto-generate" buttons use: the page's first section
 * with a heading (the hero's own fields, or a section's intro), and the first
 * section image. Highlight/bold markers are removed.
 */
function seoSource(doc: unknown) {
  const sections = ((doc as { layout?: Section[] })?.layout ?? []).map((section) => {
    const intro = section.intro as Section | string | undefined;
    return typeof intro === 'object'
      ? { heading: intro?.heading, description: intro?.description, image: section.image }
      : { heading: section.heading, description: intro, image: section.image };
  });
  const text = (value: unknown) => (typeof value === 'string' ? value.replace(/==|\*\*/g, '') : '');
  const first = sections.find((section) => section.heading);
  return {
    title: text(first?.heading),
    description: text(first?.description),
    image: sections.find((section) => section.image)?.image as number | string,
  };
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' – CareHub CMS',
    },
    livePreview: {
      collections: ['pages'],
      // Header, footer and contact details appear on every page; preview them on home.
      globals: ['header', 'footer', 'site-settings'],
      // Relative, so it works on any domain. The route turns on draft mode
      // (logged-in users only) and redirects to the page.
      url: ({ data, collectionConfig }) =>
        `/next/preview?path=${encodeURIComponent(collectionConfig ? pagePath(data?.slug) : '/')}`,
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [Pages, Media, Redirects, Users],
  globals: [Header, Footer, SiteSettings, SeoSettings, Tracking],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    // In production (NODE_ENV=production) pending migrations run when Payload
    // boots, so the schema is always in sync with the code. In development the
    // schema is pushed automatically instead.
    prodMigrations: migrations,
  }),
  plugins: [
    // Adds the SEO tab (title, description, image, search preview) to pages.
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      tabbedUI: true,
      interfaceName: 'PageSeo',
      fields: ({ defaultFields }) => [...defaultFields, ...pageSeoFields],
      generateTitle: ({ doc }) => seoSource(doc).title || (doc as { title?: string })?.title || '',
      generateDescription: ({ doc }) => seoSource(doc).description,
      generateImage: ({ doc }) => seoSource(doc).image,
      generateURL: ({ doc }) => {
        const pathname = pagePath((doc as { slug?: string })?.slug);
        return `${siteUrl()}${pathname === '/' ? '' : pathname}`;
      },
    }),
  ],
  // `sharp` is intentionally not passed: the site needs no resizing/cropping,
  // and without it uploads are stored byte-for-byte, which keeps media
  // identical across environments. (Next.js still uses sharp for <Image>.)
});
