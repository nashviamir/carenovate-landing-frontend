import type { GlobalConfig } from 'payload';

import { globalVersions } from '../fields';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  typescript: { interface: 'SiteSettings' },
  admin: {
    group: 'Site',
    description: 'SEO, organization and analytics settings are under Marketing.',
  },
  versions: globalVersions,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'contact',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'phoneLabel',
                  label: 'Phone (as displayed)',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'phoneHref',
                  label: 'Phone link',
                  type: 'text',
                  required: true,
                  admin: { description: 'What the phone link dials, starting with tel:' },
                },
              ],
            },
            { name: 'email', type: 'email', required: true },
            { name: 'address', type: 'text', required: true },
            { name: 'linkedinUrl', label: 'LinkedIn URL', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
};
