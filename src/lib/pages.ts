// URL rules for pages built in the admin (Pages collection). Kept React-free
// so the Payload config can use them.

/** The page with this slug is served at "/". */
export const HOME_SLUG = 'home';

/** Paths the app already uses; a page can't take them. */
export const RESERVED_SLUGS = ['admin', 'api', 'next', '_next', 'robots.txt', 'sitemap.xml', 'llms.txt'];

export function pagePath(slug: string | null | undefined): string {
  return !slug || slug === HOME_SLUG ? '/' : `/${slug}`;
}

/** "Pricing & Plans" → "pricing-plans"; keeps "/" so pages can nest (solutions/rcfe). */
export function slugify(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/\/+/g, '/')
    .replace(/-*\/-*/g, '/')
    .replace(/^[-/]+|[-/]+$/g, '');
  return slug || undefined;
}
