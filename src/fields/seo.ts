import type { Field } from 'payload';

export const customMetaTags = (description: string): Field => ({
  name: 'customMetaTags',
  label: 'Custom meta tags',
  type: 'array',
  labels: { singular: 'Meta tag', plural: 'Meta tags' },
  admin: { description },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: { description: 'The tag’s name attribute, e.g. "author" or "format-detection".' },
        },
        { name: 'content', type: 'text', required: true },
      ],
    },
  ],
});

export const jsonLd = (name: string, label: string, description: string): Field => ({
  name,
  label,
  type: 'json',
  admin: { description },
  validate: (value: unknown) =>
    value == null || typeof value === 'object' || 'Enter a JSON object or an array of objects.',
});

/**
 * Added to the SEO plugin's tab on every page, after its title, description,
 * image and search preview fields.
 */
export const pageSeoFields: Field[] = [
  {
    name: 'ignoreTitleTemplate',
    label: 'Use this title exactly as written',
    type: 'checkbox',
    defaultValue: false,
    admin: {
      description:
        'By default the title template from SEO Settings is applied (e.g. “Features | CareHub”).',
    },
  },
  {
    name: 'keywords',
    type: 'text',
    hasMany: true,
    admin: { description: 'Optional. Falls back to the site-wide keywords.' },
  },
  {
    type: 'collapsible',
    label: 'Social sharing (Facebook, LinkedIn, X…)',
    admin: { initCollapsed: true },
    fields: [
      {
        name: 'ogTitle',
        label: 'Social title',
        type: 'text',
        admin: { description: 'Shown when the page is shared. Defaults to the meta title.' },
      },
      {
        name: 'ogDescription',
        label: 'Social description',
        type: 'textarea',
        admin: { description: 'Defaults to the meta description.' },
      },
    ],
  },
  {
    type: 'collapsible',
    label: 'Indexing & sitemap',
    admin: { initCollapsed: true },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'noindex',
            label: 'Hide from search engines (noindex)',
            type: 'checkbox',
            defaultValue: false,
          },
          {
            name: 'nofollow',
            label: 'Don’t follow links (nofollow)',
            type: 'checkbox',
            defaultValue: false,
          },
        ],
      },
      {
        name: 'canonical',
        label: 'Canonical URL',
        type: 'text',
        admin: {
          description: 'Only if this content officially lives at another URL. Defaults to this page.',
        },
      },
      {
        type: 'row',
        fields: [
          {
            name: 'excludeFromSitemap',
            label: 'Leave out of sitemap.xml',
            type: 'checkbox',
            defaultValue: false,
          },
          {
            name: 'sitemapPriority',
            label: 'Sitemap priority',
            type: 'number',
            min: 0,
            max: 1,
            admin: { step: 0.1, description: '0.0 – 1.0' },
          },
          {
            name: 'sitemapChangeFrequency',
            label: 'Change frequency',
            type: 'select',
            options: ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'],
          },
        ],
      },
    ],
  },
  {
    type: 'collapsible',
    label: 'Advanced: custom meta tags & structured data',
    admin: { initCollapsed: true },
    fields: [
      customMetaTags('Added to this page’s <head>, after the site-wide tags.'),
      jsonLd(
        'jsonLd',
        'Extra structured data (JSON-LD)',
        'Schema.org objects added to this page, e.g. a Product, Event or HowTo. WebPage, breadcrumb and FAQ data are generated automatically.',
      ),
    ],
  },
];
