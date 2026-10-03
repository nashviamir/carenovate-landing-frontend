import type { GlobalConfig } from 'payload';

import { globalVersions, linkList, markupText, markupTextarea } from '../fields';

export const Footer: GlobalConfig = {
  slug: 'footer',
  typescript: { interface: 'Footer' },
  admin: {
    group: 'Site',
    description: 'Phone, email, address and LinkedIn come from Site Settings → Contact.',
  },
  versions: globalVersions,
  fields: [
    {
      type: 'row',
      fields: [
        markupText('brandName', 'Brand name'),
        { name: 'brandSuffix', type: 'text', required: true },
      ],
    },
    { name: 'description', type: 'textarea', required: true },
    { name: 'linkedinLabel', label: 'LinkedIn link label', type: 'text', required: true },
    {
      name: 'solutions',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        linkList('links', 'Links'),
      ],
    },
    {
      name: 'compliance',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'company',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        linkList('links', 'Links'),
      ],
    },
    linkList('legalLinks', 'Legal links'),
    markupTextarea('disclaimer'),
    {
      name: 'copyright',
      type: 'text',
      required: true,
      admin: { description: 'Shown after “© <current year>”.' },
    },
  ],
};
