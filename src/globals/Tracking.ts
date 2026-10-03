import type { GlobalConfig } from 'payload';

import { globalVersions } from '../fields';

export const Tracking: GlobalConfig = {
  slug: 'tracking',
  label: 'Analytics & Scripts',
  typescript: { interface: 'Tracking' },
  admin: {
    group: 'Marketing',
    description:
      'Scripts never run in live preview, or in environments with DISABLE_ANALYTICS=true (e.g. local development).',
  },
  versions: globalVersions,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'gtmId',
          label: 'Google Tag Manager container ID',
          type: 'text',
          admin: { description: 'e.g. GTM-ABC1234. Manage most other tags inside GTM.' },
          validate: (value: unknown) =>
            !value || /^GTM-[A-Z0-9]+$/.test(String(value)) || 'Should look like GTM-ABC1234',
        },
        {
          name: 'ga4Id',
          label: 'Google Analytics 4 measurement ID',
          type: 'text',
          admin: { description: 'e.g. G-ABC123XYZ. Not needed if GA4 is set up inside GTM.' },
          validate: (value: unknown) =>
            !value || /^G-[A-Z0-9]+$/.test(String(value)) || 'Should look like G-ABC123XYZ',
        },
      ],
    },
    {
      name: 'scripts',
      label: 'Custom scripts',
      type: 'array',
      labels: { singular: 'Script', plural: 'Scripts' },
      admin: {
        description:
          'Other tools (Meta Pixel, LinkedIn Insight, Microsoft Clarity, Hotjar, chat widgets…). Use either a script URL or inline code.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'enabled', type: 'checkbox', defaultValue: true },
            {
              name: 'strategy',
              label: 'When to load',
              type: 'select',
              required: true,
              defaultValue: 'afterInteractive',
              options: [
                { label: 'After page becomes interactive (default)', value: 'afterInteractive' },
                { label: 'When the browser is idle (lowest impact)', value: 'lazyOnload' },
                { label: 'Before the page is interactive (only if required)', value: 'beforeInteractive' },
              ],
            },
          ],
        },
        { name: 'src', label: 'Script URL', type: 'text' },
        {
          name: 'code',
          label: 'Inline code',
          type: 'code',
          admin: {
            language: 'javascript',
            description: 'JavaScript only, without <script> tags.',
          },
          validate: (value: unknown, { siblingData }: { siblingData: { src?: string } }) =>
            Boolean(value || siblingData?.src) || 'Add a script URL or inline code.',
        },
      ],
    },
  ],
};
