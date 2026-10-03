// Icons editors can pick in the CMS. Kept free of React imports so the
// Payload config (also loaded by the CLI) can use it cheaply.
// The matching components live in `src/components/Icon.tsx`.
export const ICON_NAMES = [
  'Activity',
  'Award',
  'Calendar',
  'CheckCircle2',
  'FileCheck',
  'FileText',
  'Flag',
  'GraduationCap',
  'Headphones',
  'HeartPulse',
  'Lock',
  'Monitor',
  'MonitorSmartphone',
  'Pill',
  'RefreshCw',
  'ScanLine',
  'ShieldCheck',
  'UserCircle',
  'Users',
  'Zap',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
