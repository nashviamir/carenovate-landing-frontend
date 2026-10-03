import { pagePath } from '@/lib/pages';
import { getGlobal, getPublishedPages } from '@/lib/payload';
import { absoluteUrl } from '@/lib/seo';

// https://llmstxt.org – a plain summary of the site for AI assistants.
// Uses the custom text from SEO Settings, or builds one from the content.
export const dynamic = 'force-dynamic';

const text = (body: string, status = 200) =>
  new Response(body, { status, headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });

export async function GET() {
  const [seo, settings, allPages] = await Promise.all([
    getGlobal('seo-settings'),
    getGlobal('site-settings'),
    getPublishedPages(),
  ]);

  if (seo.llms?.enabled === false) return text('Not found\n', 404);
  const custom = seo.llms?.content?.trim();
  if (custom) return text(`${custom}\n`);

  const { defaults, organization } = seo;
  const { contact } = settings;
  const pages = allPages
    .filter((page) => !page.meta?.noindex)
    .sort((a, b) => (b.meta?.sitemapPriority ?? 0.5) - (a.meta?.sitemapPriority ?? 0.5));
  const lines = [`# ${defaults.siteName}`, '', `> ${defaults.description}`];

  if (organization.description) lines.push('', organization.description);

  lines.push('', '## Pages', '');
  for (const page of pages) {
    const description = page.meta?.description || defaults.description;
    lines.push(`- [${page.meta?.title || page.title}](${absoluteUrl(pagePath(page.slug))}): ${description}`);
  }

  const faq = pages.flatMap((page) =>
    page.layout.flatMap((block) => (block.blockType === 'faq' ? (block.items ?? []) : [])),
  );
  if (faq.length) {
    lines.push('', '## Frequently asked questions');
    for (const item of faq) lines.push('', `### ${item.question}`, '', item.answer);
  }

  lines.push(
    '',
    '## Contact',
    '',
    `- Company: ${organization.legalName || organization.name}`,
    `- Phone: ${contact.phoneLabel}`,
    `- Email: ${contact.email}`,
    `- Location: ${contact.address}`,
  );

  return text(`${lines.join('\n')}\n`);
}
