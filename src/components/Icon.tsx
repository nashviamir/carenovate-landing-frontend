import {
  Activity,
  Award,
  Calendar,
  CheckCircle2,
  FileCheck,
  FileText,
  Flag,
  GraduationCap,
  Headphones,
  HeartPulse,
  Lock,
  Monitor,
  MonitorSmartphone,
  Pill,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  UserCircle,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

import type { IconName } from '@/lib/icons';

const ICONS: Record<IconName, LucideIcon> = {
  Activity,
  Award,
  Calendar,
  CheckCircle2,
  FileCheck,
  FileText,
  Flag,
  GraduationCap,
  Headphones,
  HeartPulse,
  Lock,
  Monitor,
  MonitorSmartphone,
  Pill,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  UserCircle,
  Users,
  Zap,
};

/** Looks up an icon picked in the CMS by name. */
export function getIcon(name: string | null | undefined): LucideIcon | undefined {
  return name ? ICONS[name as IconName] : undefined;
}
