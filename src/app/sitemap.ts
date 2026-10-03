import type { MetadataRoute } from 'next';
import { pagePath } from '@/lib/pages';
import { getPublishedPages } from '@/lib/payload';
import { absoluteUrl, indexingDisabled } from '@/lib/seo';

// Built from the published pages and their SEO tabs on every request.
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (indexingDisabled()) return [];

  const pages = await getPublishedPages();

  return pages
    .filter((page) => !page.meta?.noindex && !page.meta?.excludeFromSitemap)
    .map((page) => ({
      url: page.meta?.canonical || absoluteUrl(pagePath(page.slug)),
      lastModified: new Date(page.updatedAt),
      changeFrequency: page.meta?.sitemapChangeFrequency ?? undefined,
      priority: page.meta?.sitemapPriority ?? undefined,
    }))
    .sort((a, b) => (b.priority ?? 0.5) - (a.priority ?? 0.5));
}
