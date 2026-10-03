import type { Block, Field } from 'payload';

import { icon, image, link, markupText, markupTextarea, sectionIntro } from '../fields';

// The sections a page can be built from. Each one is rendered by the
// component of the same name in `src/components/RenderBlocks.tsx`.

const titledItems = (name: string): Field => ({
  name,
  type: 'group',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
});

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'badge', type: 'text', required: true },
    markupText('heading'),
    markupTextarea('intro'),
    {
      name: 'bullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    link('primaryCta', 'Primary button'),
    link('secondaryCta', 'Secondary button'),
    image('image', 'Image'),
  ],
};

export const BeforeAfterBlock: Block = {
  slug: 'beforeAfter',
  interfaceName: 'BeforeAfterBlock',
  labels: { singular: 'Before / After', plural: 'Before / After sections' },
  fields: [
    sectionIntro,
    {
      type: 'row',
      fields: [image('beforeImage', 'Before image'), image('afterImage', 'After image')],
    },
    {
      type: 'row',
      fields: [
        { name: 'beforeTab', label: 'Before tab label', type: 'text', required: true },
        { name: 'afterTab', label: 'After tab label', type: 'text', required: true },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'beforeBadge', label: 'Before image badge', type: 'text', required: true },
        { name: 'afterBadge', label: 'After image badge', type: 'text', required: true },
      ],
    },
    titledItems('challenges'),
    titledItems('solutions'),
  ],
};

export const PortalBlock: Block = {
  slug: 'portal',
  interfaceName: 'PortalBlock',
  labels: { singular: 'Portal screenshots', plural: 'Portal screenshots' },
  fields: [
    sectionIntro,
    {
      type: 'row',
      fields: [
        { name: 'urlPrefix', label: 'Browser bar URL prefix', type: 'text', required: true },
        { name: 'liveLabel', label: 'Live badge', type: 'text', required: true },
      ],
    },
    {
      name: 'screens',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'tab', label: 'Tab label', type: 'text', required: true },
            icon(),
            {
              name: 'path',
              label: 'URL path',
              type: 'text',
              required: true,
              admin: { description: 'Shown after the browser bar URL prefix.' },
            },
          ],
        },
        { name: 'label', label: 'Title', type: 'text', required: true },
        { name: 'caption', type: 'text', required: true },
        image('image', 'Screenshot'),
      ],
    },
    link('cta', 'Button'),
    { name: 'note', label: 'Note next to button', type: 'text', required: true },
  ],
};

export const BenefitsBlock: Block = {
  slug: 'benefits',
  interfaceName: 'BenefitsBlock',
  labels: { singular: 'Benefits', plural: 'Benefits sections' },
  fields: [
    sectionIntro,
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [{ name: 'title', type: 'text', required: true }, icon()],
        },
        { name: 'description', type: 'textarea', required: true },
        { name: 'highlight', type: 'text', required: true },
      ],
    },
    {
      name: 'banner',
      type: 'group',
      fields: [
        { name: 'eyebrow', type: 'text', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
        link('cta', 'Button'),
        image('image', 'Image'),
      ],
    },
  ],
};

export const BookDemoBlock: Block = {
  slug: 'bookDemo',
  interfaceName: 'BookDemoBlock',
  labels: { singular: 'Book a demo', plural: 'Book a demo sections' },
  fields: [
    sectionIntro,
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'number', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            icon(),
          ],
        },
      ],
    },
    { name: 'highlightsLabel', type: 'text', required: true },
    {
      name: 'highlights',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      type: 'row',
      fields: [
        { name: 'formTitle', type: 'text', required: true },
        { name: 'formSubtitle', type: 'text', required: true },
      ],
    },
  ],
};

export const HardwareBlock: Block = {
  slug: 'hardware',
  interfaceName: 'HardwareBlock',
  labels: { singular: 'Hardware capabilities', plural: 'Hardware capabilities' },
  fields: [
    sectionIntro,
    {
      type: 'row',
      fields: [
        { name: 'deviceName', type: 'text', required: true },
        { name: 'modelBadge', type: 'text', required: true },
      ],
    },
    image('image', 'Device image'),
    {
      name: 'stats',
      label: 'Stats under the image',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            {
              name: 'highlighted',
              label: 'Brand blue',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'specs',
      label: 'Capabilities',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [{ name: 'title', type: 'text', required: true }, icon()],
        },
        { name: 'description', type: 'textarea', required: true },
        { name: 'detail', type: 'text', required: true },
      ],
    },
    { name: 'ctaLabel', label: 'Button label', type: 'text', required: true },
  ],
};

export const ComparisonTableBlock: Block = {
  slug: 'comparisonTable',
  interfaceName: 'ComparisonTableBlock',
  labels: { singular: 'Comparison table', plural: 'Comparison tables' },
  fields: [
    sectionIntro,
    {
      name: 'columns',
      label: 'Column headings',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'area', type: 'text', required: true },
            { name: 'traditional', type: 'text', required: true },
            { name: 'carehub', label: 'CareHub', type: 'text', required: true },
            { name: 'impact', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      fields: [
        { name: 'area', type: 'text', required: true },
        { name: 'traditional', type: 'textarea', required: true },
        { name: 'carehub', label: 'CareHub', type: 'textarea', required: true },
        { name: 'impact', type: 'text', required: true },
      ],
    },
  ],
};

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    sectionIntro,
    {
      name: 'items',
      label: 'Questions',
      type: 'array',
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
    {
      name: 'faqSchema',
      label: 'Publish questions as FAQ structured data',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description:
          'Marks up the questions above as schema.org FAQPage, so search and AI answer engines can quote them directly.',
      },
    },
    {
      name: 'cta',
      label: 'Closing box',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        link('button', 'Button'),
      ],
    },
  ],
};

export const BLOCKS: Block[] = [
  HeroBlock,
  BeforeAfterBlock,
  PortalBlock,
  BenefitsBlock,
  BookDemoBlock,
  HardwareBlock,
  ComparisonTableBlock,
  FaqBlock,
];
