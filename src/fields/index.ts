import type { Field, GlobalConfig } from 'payload';

import { ICON_NAMES } from '../lib/icons';

/**
 * Every global keeps a version history and saves edits as drafts. Autosave
 * drives the live preview; visitors only see content once it's published.
 */
export const globalVersions: GlobalConfig['versions'] = {
  max: 50,
  drafts: {
    autosave: { interval: 375 },
  },
};

export const MARKUP_HINT =
  'Wrap words in ==double equals== to highlight them in brand blue, or **double asterisks** to make them bold.';

/** Single-line text that supports the ==highlight== / **bold** markup. */
export const markupText = (name: string, label?: string): Field => ({
  name,
  label,
  type: 'text',
  required: true,
  admin: { description: MARKUP_HINT },
});

/** Paragraph text that supports the ==highlight== / **bold** markup. */
export const markupTextarea = (name: string, label?: string): Field => ({
  name,
  label,
  type: 'textarea',
  required: true,
  admin: { description: MARKUP_HINT },
});

export const link = (name: string, label: string): Field => ({
  name,
  label,
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'href',
          label: 'URL',
          type: 'text',
          required: true,
          admin: { description: 'e.g. /features, /#book-demo-section, https://…' },
        },
      ],
    },
  ],
});

export const linkList = (name: string, label: string): Field => ({
  name,
  label,
  type: 'array',
  labels: { singular: 'Link', plural: 'Links' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', label: 'URL', type: 'text', required: true },
      ],
    },
  ],
});

export const image = (name: string, label: string): Field => ({
  name,
  label,
  type: 'upload',
  relationTo: 'media',
  required: true,
});

export const icon = (name = 'icon'): Field => ({
  name,
  type: 'select',
  required: true,
  options: ICON_NAMES.map((value) => ({ label: value, value })),
});

/** The chip + heading + description block that opens most sections. */
export const sectionIntro: Field = {
  name: 'intro',
  label: 'Section intro',
  type: 'group',
  fields: [
    { name: 'chip', label: 'Chip label', type: 'text', required: true },
    markupText('heading'),
    { name: 'description', type: 'textarea', required: true },
  ],
};
