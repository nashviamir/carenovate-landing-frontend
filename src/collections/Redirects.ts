import type { CollectionConfig } from 'payload';

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    group: 'Marketing',
    useAsTitle: 'from',
    defaultColumns: ['from', 'to', 'type', 'updatedAt'],
    description:
      'Send old or broken URLs somewhere useful. Applies to paths that don’t exist as pages.',
  },
  fields: [
    {
      name: 'from',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Path on this site, e.g. /contact' },
      validate: (value: unknown) =>
        (typeof value === 'string' && /^\/[^\s?#]*$/.test(value)) ||
        'Start with / and leave out the domain, query string and #anchor.',
      hooks: {
        // Match regardless of case or a trailing slash.
        beforeValidate: [
          ({ value }) =>
            typeof value === 'string' ? value.trim().toLowerCase().replace(/(.)\/+$/, '$1') : value,
        ],
      },
    },
    {
      name: 'to',
      type: 'text',
      required: true,
      admin: { description: 'A path like /features or /#book-demo-section, or a full URL.' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'permanent',
      options: [
        { label: 'Permanent (301) – the page has moved for good', value: 'permanent' },
        { label: 'Temporary (302) – e.g. a campaign', value: 'temporary' },
      ],
    },
  ],
};
