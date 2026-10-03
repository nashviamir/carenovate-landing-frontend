import { AI_ANSWER_CRAWLERS, AI_TRAINING_CRAWLERS } from '@/lib/aiCrawlers';
import { getGlobal } from '@/lib/payload';
import { absoluteUrl, indexingDisabled } from '@/lib/seo';

// Built from SEO Settings → robots.txt & AI crawlers on every request.
export const dynamic = 'force-dynamic';

const block = (agents: string[]) => agents.map((agent) => `User-agent: ${agent}\nDisallow: /`);

export async function GET() {
  const { crawlers } = await getGlobal('seo-settings');
  const groups: string[] = [];

  if (indexingDisabled()) {
    groups.push('User-agent: *\nDisallow: /');
  } else {
    for (const rule of crawlers.rules ?? []) {
      groups.push(
        [
          `User-agent: ${rule.userAgent}`,
          ...(rule.allow ?? []).map((path) => `Allow: ${path}`),
          ...(rule.disallow ?? []).map((path) => `Disallow: ${path}`),
        ].join('\n'),
      );
    }
    if (crawlers.aiPolicy === 'block-training' || crawlers.aiPolicy === 'block-all') {
      groups.push(...block(AI_TRAINING_CRAWLERS));
    }
    if (crawlers.aiPolicy === 'block-all') {
      groups.push(...block(AI_ANSWER_CRAWLERS));
    }
    if (crawlers.extra?.trim()) groups.push(crawlers.extra.trim());
  }

  groups.push(`Sitemap: ${absoluteUrl('/sitemap.xml')}`);

  return new Response(`${groups.join('\n\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
