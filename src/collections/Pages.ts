import { slugField, type CollectionConfig, type TextField } from 'payload';

import { BLOCKS } from '../blocks';
import { HOME_SLUG, RESERVED_SLUGS, pagePath, slugify } from '../lib/pages';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    description: `Every page on the site. The page with the URL “${HOME_SLUG}” is the home page.`,
    preview: (doc) => `/next/preview?path=${encodeURIComponent(pagePath(doc.slug as string))}`,
  },
  versions: {
    maxPerDoc: 50,
    drafts: {
      autosave: { interval: 375 },
    },
  },
  fields: [
    // The SEO plugin adds an "SEO" tab next to this one.
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: { description: 'Used in the admin, breadcrumbs and as the default SEO title.' },
            },
            {
              name: 'layout',
              label: 'Sections',
              type: 'blocks',
              blocks: BLOCKS,
              required: true,
              minRows: 1,
              admin: { initCollapsed: true },
            },
          ],
        },
      ],
    },
    slugField({
      position: 'sidebar',
      slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
      overrides: (row) => {
        const slug = row.fields.find((field) => 'name' in field && field.name === 'slug') as TextField;
        slug.label = 'URL';
        slug.admin = {
          ...slug.admin,
          description: `The address after the domain, e.g. “pricing” → /pricing. “${HOME_SLUG}” is the home page.`,
        };
        slug.validate = (value: unknown) => {
          if (typeof value !== 'string' || !value) return 'Required';
          if (slugify(value) !== value) return 'Use lowercase letters, numbers, - and /.';
          if (RESERVED_SLUGS.includes(value.split('/')[0])) return `“${value}” is reserved.`;
          return true;
        };
        return row;
      },
    }),
  ],
};
