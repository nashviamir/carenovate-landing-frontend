import type { GlobalConfig } from 'payload';

import { globalVersions } from '../fields';
import { customMetaTags, jsonLd } from '../fields/seo';
import { AI_ANSWER_CRAWLERS, AI_TRAINING_CRAWLERS } from '../lib/aiCrawlers';

export const SeoSettings: GlobalConfig = {
  slug: 'seo-settings',
  label: 'SEO Settings',
  typescript: { interface: 'SeoSettings' },
  admin: {
    group: 'Marketing',
    description: 'Site-wide search, social, AI-search and structured data settings. Per-page SEO is on each page’s SEO tab.',
  },
  versions: globalVersions,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'defaults',
          label: 'Defaults',
          description: 'Used by every page unless the page’s SEO tab overrides it.',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'siteName', type: 'text', required: true },
                {
                  name: 'titleTemplate',
                  type: 'text',
                  required: true,
                  admin: { description: '%s is replaced with the page title, e.g. “%s | CareHub”.' },
                },
              ],
            },
            {
              name: 'title',
              label: 'Default title',
              type: 'text',
              required: true,
              admin: { description: 'Used when a page has no title of its own.' },
            },
            {
              name: 'description',
              label: 'Default description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'keywords',
              type: 'text',
              hasMany: true,
              admin: { description: 'Rarely used by Google today, but some engines still read them.' },
            },
            {
              name: 'image',
              label: 'Default social share image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: { description: 'Shown when a page is shared. 1200 × 630 px works best.' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'locale',
                  type: 'text',
                  required: true,
                  defaultValue: 'en_US',
                  admin: { description: 'Open Graph locale, e.g. en_US.' },
                },
                {
                  name: 'twitterCard',
                  label: 'X (Twitter) card',
                  type: 'select',
                  required: true,
                  defaultValue: 'summary_large_image',
                  options: [
                    { label: 'Large image', value: 'summary_large_image' },
                    { label: 'Small image', value: 'summary' },
                  ],
                },
                {
                  name: 'twitterHandle',
                  label: 'X (Twitter) handle',
                  type: 'text',
                  admin: { description: 'e.g. @carenovate' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'favicon',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Browser tab icon. Square PNG, SVG or ICO.' },
                },
                {
                  name: 'appleTouchIcon',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Home-screen icon on iPhone/iPad. 180 × 180 PNG.' },
                },
                {
                  name: 'themeColor',
                  type: 'text',
                  admin: { description: 'Browser UI colour on mobile, e.g. #0F3CD7.' },
                },
              ],
            },
          ],
        },
        {
          name: 'search',
          label: 'Search engines',
          fields: [
            {
              name: 'verification',
              label: 'Ownership verification',
              type: 'group',
              admin: {
                description:
                  'Paste only the code (the content="…" value) each tool gives you for the HTML-tag method.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'google', label: 'Google Search Console', type: 'text' },
                    { name: 'bing', label: 'Bing Webmaster Tools', type: 'text' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'yandex', label: 'Yandex', type: 'text' },
                    { name: 'pinterest', label: 'Pinterest', type: 'text' },
                  ],
                },
              ],
            },
            {
              name: 'robots',
              label: 'Search result previews',
              type: 'group',
              admin: { description: 'How much of the site search engines may show in results.' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'maxImagePreview',
                      label: 'Image preview size',
                      type: 'select',
                      required: true,
                      defaultValue: 'large',
                      options: ['large', 'standard', 'none'],
                    },
                    {
                      name: 'maxSnippet',
                      label: 'Max text snippet length',
                      type: 'number',
                      required: true,
                      defaultValue: -1,
                      admin: { description: '-1 = no limit, 0 = no snippet' },
                    },
                    {
                      name: 'maxVideoPreview',
                      label: 'Max video preview (seconds)',
                      type: 'number',
                      required: true,
                      defaultValue: -1,
                      admin: { description: '-1 = no limit' },
                    },
                  ],
                },
              ],
            },
            customMetaTags('Added to every page’s <head>, e.g. other verification tags.'),
          ],
        },
        {
          name: 'crawlers',
          label: 'robots.txt & AI crawlers',
          description:
            'Controls /robots.txt. To hide a single page, use “noindex” on that page’s SEO tab instead.',
          fields: [
            {
              name: 'aiPolicy',
              label: 'AI crawlers',
              type: 'select',
              required: true,
              defaultValue: 'allow',
              options: [
                { label: 'Allow all (best visibility in ChatGPT, Claude, Perplexity, Google AI…)', value: 'allow' },
                { label: 'Block AI training, allow AI search & answers', value: 'block-training' },
                { label: 'Block all AI crawlers', value: 'block-all' },
              ],
              admin: {
                description: `Training crawlers: ${AI_TRAINING_CRAWLERS.join(', ')}. Answer/search crawlers: ${AI_ANSWER_CRAWLERS.join(', ')}.`,
              },
            },
            {
              name: 'rules',
              type: 'array',
              labels: { singular: 'Rule', plural: 'Rules' },
              fields: [
                {
                  name: 'userAgent',
                  label: 'User agent',
                  type: 'text',
                  required: true,
                  defaultValue: '*',
                  admin: { description: '* for all crawlers, or a name like Googlebot.' },
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'allow', type: 'text', hasMany: true, admin: { description: 'Paths, e.g. /' } },
                    {
                      name: 'disallow',
                      type: 'text',
                      hasMany: true,
                      admin: { description: 'Paths, e.g. /admin' },
                    },
                  ],
                },
              ],
            },
            {
              name: 'extra',
              label: 'Extra lines',
              type: 'code',
              admin: {
                language: 'plaintext',
                description: 'Added to the end of robots.txt as-is. The sitemap line is added automatically.',
              },
            },
          ],
        },
        {
          name: 'llms',
          label: 'AI answers (llms.txt)',
          description:
            '/llms.txt gives AI assistants a clean summary of the site (an emerging standard for generative-engine optimisation).',
          fields: [
            {
              name: 'enabled',
              label: 'Publish /llms.txt',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'content',
              label: 'Custom llms.txt',
              type: 'code',
              admin: {
                language: 'markdown',
                description:
                  'Leave empty to generate it automatically from your pages, FAQ, organization and contact details.',
                condition: (_, siblingData) => Boolean(siblingData?.enabled),
              },
            },
          ],
        },
        {
          name: 'organization',
          label: 'Organization & schema',
          description:
            'Who you are, as structured data (schema.org). Helps Google’s knowledge panel and AI engines describe the company accurately.',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  defaultValue: 'Organization',
                  options: ['Organization', 'Corporation', 'MedicalOrganization', 'LocalBusiness'],
                },
                { name: 'name', type: 'text', required: true },
                { name: 'legalName', type: 'text' },
              ],
            },
            { name: 'description', type: 'textarea' },
            {
              type: 'row',
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Defaults to the social share image.' },
                },
                {
                  name: 'foundingDate',
                  type: 'text',
                  admin: { description: 'e.g. 2021 or 2021-06-01' },
                },
                {
                  name: 'contactType',
                  type: 'text',
                  defaultValue: 'sales',
                  admin: { description: 'Uses the phone/email from Site Settings → Contact.' },
                },
              ],
            },
            {
              name: 'sameAs',
              label: 'Profiles elsewhere',
              type: 'array',
              labels: { singular: 'Profile', plural: 'Profiles' },
              admin: { description: 'LinkedIn, Crunchbase, Wikipedia, X, YouTube… (full URLs).' },
              fields: [{ name: 'url', type: 'text', required: true }],
            },
            {
              name: 'address',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'street', type: 'text' },
                    { name: 'locality', label: 'City', type: 'text' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'region', label: 'State / region', type: 'text' },
                    { name: 'postalCode', type: 'text' },
                    { name: 'country', type: 'text', admin: { description: 'e.g. US' } },
                  ],
                },
              ],
            },
            jsonLd(
              'additionalJsonLd',
              'Additional structured data (JSON-LD)',
              'Extra schema.org objects for every page, e.g. your products and software. Organization and WebSite data are generated from the fields above.',
            ),
          ],
        },
      ],
    },
  ],
};
