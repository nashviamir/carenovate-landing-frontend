import type { Metadata } from 'next';

import type { Media, PageSeo, SeoSettings, SiteSettings } from '@/payload-types';
import { asMedia } from './media';
import { siteUrl } from './siteUrl';

type Json = Record<string, unknown>;

/** Environment switch (e.g. staging): hide the whole site from search engines. */
export const indexingDisabled = () => process.env.NOINDEX === 'true';

/** Absolute URL for a site path ('/' → the bare site URL). */
export const absoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${siteUrl()}${pathOrUrl === '/' ? '' : pathOrUrl}`;

const orUndefined = <T,>(value: T | null | undefined | '') => (value === '' || value == null ? undefined : value);

const metaTags = (tags: { name: string; content: string }[] | null | undefined) =>
  Object.fromEntries((tags ?? []).map((tag) => [tag.name, tag.content]));

function socialImages(image: Media | null) {
  return image?.url
    ? [{ url: image.url, width: orUndefined(image.width), height: orUndefined(image.height), alt: image.alt }]
    : [];
}

function robots(seo: SeoSettings, noindex = false, nofollow = false): Metadata['robots'] {
  const index = !noindex && !indexingDisabled();
  const follow = !nofollow && !indexingDisabled();
  const { maxImagePreview, maxSnippet, maxVideoPreview } = seo.search.robots;
  return {
    index,
    follow,
    googleBot: {
      index,
      follow,
      'max-video-preview': maxVideoPreview,
      'max-image-preview': maxImagePreview,
      'max-snippet': maxSnippet,
    },
  };
}

/** Site-wide metadata for the root layout. Pages override what they set. */
export function siteMetadata(seo: SeoSettings): Metadata {
  const { defaults, search, organization } = seo;
  const image = asMedia(defaults.image);
  const favicon = asMedia(defaults.favicon);
  const appleIcon = asMedia(defaults.appleTouchIcon);
  const { google, bing, yandex, pinterest } = search.verification ?? {};

  return {
    metadataBase: new URL(siteUrl()),
    applicationName: defaults.siteName,
    title: { default: defaults.title, template: defaults.titleTemplate },
    description: defaults.description,
    keywords: defaults.keywords ?? [],
    authors: [{ name: organization.name }],
    creator: organization.name,
    publisher: organization.name,
    icons: {
      icon: favicon?.url ?? undefined,
      apple: appleIcon?.url ?? undefined,
    },
    verification: {
      google: orUndefined(google),
      yandex: orUndefined(yandex),
      other: {
        ...(bing ? { 'msvalidate.01': bing } : {}),
        ...(pinterest ? { 'p:domain_verify': pinterest } : {}),
      },
    },
    openGraph: {
      type: 'website',
      locale: defaults.locale,
      siteName: defaults.siteName,
      title: defaults.title,
      description: defaults.description,
      images: socialImages(image),
    },
    twitter: {
      card: defaults.twitterCard,
      site: orUndefined(defaults.twitterHandle),
      title: defaults.title,
      description: defaults.description,
      images: image?.url ? [image.url] : [],
    },
    robots: robots(seo),
    other: metaTags(search.customMetaTags),
  };
}

/**
 * A page's title: its SEO title, else its page title (except on the home
 * page, which falls back to the site's default title). `absolute` titles skip
 * the title template.
 */
function resolveTitle(seo: SeoSettings, meta: PageSeo | null | undefined, path: string, name?: string) {
  if (meta?.title) return { text: meta.title, absolute: Boolean(meta.ignoreTitleTemplate) };
  if (name && path !== '/') return { text: name, absolute: false };
  return { text: seo.defaults.title, absolute: true };
}

/** Full title as it appears in the browser tab and search results. */
export function pageTitle(seo: SeoSettings, meta: PageSeo | null | undefined, path: string, name?: string) {
  const { text, absolute } = resolveTitle(seo, meta, path, name);
  return absolute ? text : seo.defaults.titleTemplate.replace('%s', text);
}

/** Metadata for a page, from its SEO tab with site defaults as fallback. */
export function pageMetadata(
  seo: SeoSettings,
  meta: PageSeo | null | undefined,
  path: string,
  name?: string,
): Metadata {
  const { defaults, search } = seo;
  const title = resolveTitle(seo, meta, path, name);
  const canonical = meta?.canonical || absoluteUrl(path);
  const description = meta?.description || defaults.description;
  const shareTitle = meta?.ogTitle || pageTitle(seo, meta, path, name);
  const shareDescription = meta?.ogDescription || description;
  const image = asMedia(meta?.image) ?? asMedia(defaults.image);

  return {
    title: title.absolute ? { absolute: title.text } : title.text,
    description,
    keywords: meta?.keywords?.length ? meta.keywords : (defaults.keywords ?? []),
    alternates: { canonical },
    robots: robots(seo, Boolean(meta?.noindex), Boolean(meta?.nofollow)),
    openGraph: {
      type: 'website',
      locale: defaults.locale,
      url: canonical,
      siteName: defaults.siteName,
      title: shareTitle,
      description: shareDescription,
      images: socialImages(image),
    },
    twitter: {
      card: defaults.twitterCard,
      site: orUndefined(defaults.twitterHandle),
      title: shareTitle,
      description: shareDescription,
      images: image?.url ? [image.url] : [],
    },
    other: { ...metaTags(search.customMetaTags), ...metaTags(meta?.customMetaTags) },
  };
}

// ─── Structured data (JSON-LD) ───────────────────────────────────────────────

/** Accepts an object, an array, or a { "@graph": [...] } document. */
function jsonLdNodes(value: unknown): Json[] {
  if (!value || typeof value !== 'object') return [];
  const nodes = Array.isArray(value) ? value : ((value as Json)['@graph'] as unknown[]) ?? [value];
  return nodes
    .filter((node): node is Json => Boolean(node) && typeof node === 'object')
    .map(({ '@context': _context, ...node }) => node);
}

const ids = () => ({
  organization: `${siteUrl()}/#organization`,
  website: `${siteUrl()}/#website`,
});

/** Organization + WebSite + extra site-wide nodes, for every page. */
export function siteJsonLd(seo: SeoSettings, contact: SiteSettings['contact']): Json {
  const { defaults, organization: org } = seo;
  const logo = asMedia(org.logo) ?? asMedia(defaults.image);
  const address = org.address ?? {};
  const hasAddress = Object.values(address).some(Boolean);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': org.type,
        '@id': ids().organization,
        name: org.name,
        legalName: orUndefined(org.legalName),
        url: siteUrl(),
        logo: logo?.url ? absoluteUrl(logo.url) : undefined,
        description: orUndefined(org.description),
        foundingDate: orUndefined(org.foundingDate),
        sameAs: org.sameAs?.length ? org.sameAs.map((profile) => profile.url) : undefined,
        address: hasAddress
          ? {
              '@type': 'PostalAddress',
              streetAddress: orUndefined(address.street),
              addressLocality: orUndefined(address.locality),
              addressRegion: orUndefined(address.region),
              postalCode: orUndefined(address.postalCode),
              addressCountry: orUndefined(address.country),
            }
          : undefined,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: contact.phoneHref.replace(/^tel:/, ''),
          email: contact.email,
          contactType: orUndefined(org.contactType),
        },
      },
      {
        '@type': 'WebSite',
        '@id': ids().website,
        url: siteUrl(),
        name: defaults.siteName,
        inLanguage: defaults.locale.replace('_', '-'),
        publisher: { '@id': ids().organization },
      },
      ...jsonLdNodes(org.additionalJsonLd),
    ],
  };
}

interface PageJsonLdArgs {
  seo: SeoSettings;
  meta: PageSeo | null | undefined;
  path: string;
  label: string;
  updatedAt?: string | null;
  faq?: { question: string; answer: string }[];
}

/** WebPage (or FAQPage) + breadcrumbs + the page's own extra nodes. */
export function pageJsonLd({ seo, meta, path, label, updatedAt, faq }: PageJsonLdArgs): Json {
  const url = meta?.canonical || absoluteUrl(path);
  const page: Json = {
    '@type': faq?.length ? ['WebPage', 'FAQPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: pageTitle(seo, meta, path, label),
    description: meta?.description || seo.defaults.description,
    inLanguage: seo.defaults.locale.replace('_', '-'),
    isPartOf: { '@id': ids().website },
    about: { '@id': ids().organization },
    dateModified: orUndefined(updatedAt),
  };
  if (faq?.length) {
    page.mainEntity = faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    }));
  }

  const breadcrumbs =
    path === '/'
      ? []
      : [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
              { '@type': 'ListItem', position: 2, name: label, item: url },
            ],
          },
        ];

  return {
    '@context': 'https://schema.org',
    '@graph': [page, ...breadcrumbs, ...jsonLdNodes(meta?.jsonLd)],
  };
}
