import type { GlobalConfig } from 'payload';

import { globalVersions, image, linkList } from '../fields';

export const Header: GlobalConfig = {
  slug: 'header',
  typescript: { interface: 'Header' },
  admin: { group: 'Site' },
  versions: globalVersions,
  fields: [
    image('logo', 'Logo'),
    linkList('navLinks', 'Navigation'),
    {
      name: 'cta',
      label: 'Call to action',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'mobileLabel', label: 'Label (mobile menu)', type: 'text', required: true },
            { name: 'href', label: 'URL', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
};
