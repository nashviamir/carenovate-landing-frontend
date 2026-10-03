import config from '@payload-config';
import type { Metadata } from 'next';
import { notFound, permanentRedirect, redirect } from 'next/navigation';
import { getPayload } from 'payload';
import JsonLd from '@/components/JsonLd';
import RenderBlocks from '@/components/RenderBlocks';
import { HOME_SLUG, pagePath } from '@/lib/pages';
import { getGlobal, getPage } from '@/lib/payload';
import { pageJsonLd, pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug?: string[] }> };

/** "/" → "home", "/solutions/rcfe" → "solutions/rcfe". */
async function slugFrom(params: Props['params']) {
  const { slug } = await params;
  return slug?.length ? slug.map(decodeURIComponent).join('/').toLowerCase() : HOME_SLUG;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [page, seo] = await Promise.all([getPage(await slugFrom(params)), getGlobal('seo-settings')]);
  return page ? pageMetadata(seo, page.meta, pagePath(page.slug), page.title) : {};
}

/**
 * Every page built in Admin → Pages. Paths without a page follow a redirect
 * from Marketing → Redirects if there is one, otherwise show the 404 page.
 */
export default async function PageRoute({ params }: Props) {
  const { slug: segments } = await params;
  const slug = await slugFrom(params);

  // The home page lives at "/", not "/home".
  if (segments?.join('/') === HOME_SLUG) permanentRedirect('/');

  const page = await getPage(slug);
  if (!page) return followRedirect(`/${slug}`);

  const [settings, seo] = await Promise.all([getGlobal('site-settings'), getGlobal('seo-settings')]);
  const faq = page.layout.flatMap((block) =>
    block.blockType === 'faq' && block.faqSchema ? (block.items ?? []) : [],
  );

  return (
    <>
      <JsonLd
        data={pageJsonLd({
          seo,
          meta: page.meta,
          path: pagePath(page.slug),
          label: page.title,
          updatedAt: page.updatedAt,
          faq,
        })}
      />
      <RenderBlocks blocks={page.layout} contact={settings.contact} />
    </>
  );
}

async function followRedirect(from: string): Promise<never> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'redirects',
    where: { from: { equals: from } },
    limit: 1,
    depth: 0,
  });
  const match = docs[0];

  if (!match || match.to === from) notFound();
  if (match.type === 'permanent') permanentRedirect(match.to);
  redirect(match.to);
}
