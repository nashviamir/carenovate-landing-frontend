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
