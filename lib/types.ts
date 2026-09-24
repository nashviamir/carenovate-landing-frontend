export interface DemoRequest {
  fullName: string;
  email: string;
  phone: string;
  facilityName: string;
  facilityType: 'rcfe' | 'assisted_living' | 'memory_care' | 'board_and_care' | 'multi_facility';
  bedCount: string;
  currentSystem: string;
  preferredDate: string;
  preferredTime: string;
  format: 'virtual' | 'onsite';
  notes?: string;
}

export interface ComparisonItem {
  feature: string;
  traditionalFacility: string;
  careHubSolution: string;
  impact: string;
}

export interface DeviceSpec {
  title: string;
  description: string;
  icon: string;
  detail: string;
}

export interface RoiMetrics {
  licensedBeds: number;
  facilityType: string;
  hoursSavedWeekly: number;
  monthlyAdminSavings: number;
  auditRiskReductionPct: number;
  errorProtectionScore: number;
}

export interface FeatureCard {
  title: string;
  description: string;
  badge: string;
  icon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  label: string;
  description: string;
  highlight: string;
  icon: string;
}