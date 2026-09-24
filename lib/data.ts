import { BenefitItem, ComparisonItem, DeviceSpec, FaqItem, FeatureCard } from './types';

export const BENEFITS: BenefitItem[] = [
  {
    label: 'US-Designed & Manufactured',
    description:
      'All software, firmware, and medical hardware enclosures are conceptualized, assembled, and quality-tested right here in the United States. Fast domestic supply chains ensure zero equipment backlogs.',
    highlight: '100% Domestic Assembly',
    icon: 'Flag',
  },
  {
    label: 'FDA Exempt Class I MDDS',
    description:
      'Categorized under FDA Medical Device Data Systems (MDDS) Class I Exempt guidelines. Meets all state Department of Social Services (CDSS Title 22) and elder care medication safety directives.',
    highlight: 'HIPAA Compliant • Audit Timestamping',
    icon: 'ShieldCheck',
  },
  {
    label: 'Patented Dispensing Technology',
    description:
      'Protected by multiple United States patents covering multi-shape pill singulation, dual-beam optical counting, and anti-jam sensor matrices that accommodate diverse medication geometries.',
    highlight: 'Proprietary Hardware & Sensor IP',
    icon: 'Award',
  },
  {
    label: 'UCI Clinical Refactor Partner',
    description:
      'Partnered with researchers and biomedical engineers at the University of California, Irvine (UCI) to refactor dispensing precision algorithms and streamline elderly care workflows.',
    highlight: 'Academic Engineering Collaboration',
    icon: 'GraduationCap',
  },
  {
    label: 'Easy Migration & Legacy Integration',
    description:
      'Effortlessly syncs with or replaces legacy systems like PointClickCare, MatrixCare, and paper binders. Our white-glove migration team digitizes your resident records with zero downtime.',
    highlight: 'Full EHR / Pharmacy Compatibility',
    icon: 'RefreshCw',
  },
  {
    label: '24/7 Dedicated Support & Training',
    description:
      'Every facility receives dedicated on-site or interactive staff certification. Your caregivers have direct 24/7/365 access to our US-based clinical technical support desk.',
    highlight: 'Under 2-Minute Average Answer Time',
    icon: 'Headphones',
  },
];
export const COMPARISON_DATA: ComparisonItem[] = [
  {
    feature: "Medication Dosing & Verification",
    traditionalFacility: "Manual pill counts by tired caregivers. Prone to double dosing, wrong timing, or omitted doses.",
    careHubSolution: "Smart dispenser counts and dispenses exact prescribed pill/capsule counts via optical & weight sensors.",
    impact: "99.99% Dispensing Accuracy"
  },
  {
    feature: "Dosing Alerts & Prevention",
    traditionalFacility: "Caregivers rely on memory or sticky notes. Missed doses discovered only after shift handoff.",
    careHubSolution: "Proactive audio-visual and mobile alerts trigger before dosing windows close to prevent incidents.",
    impact: "Zero Missed Doses"
  },
  {
    feature: "eMAR & Shift Documentation",
    traditionalFacility: "Handwritten paper logs or manual eMAR typing at shift end; records often incomplete or hurried.",
    careHubSolution: "Instant 1-tap automated eMAR logging synchronized directly with each dispenser action.",
    impact: "1.5+ Hours Saved Per Shift"
  },
  {
    feature: "Refusals & Self-Administration",
    traditionalFacility: "Refusal reasons undocumented or forgotten. Self-administration lacks witness confirmation.",
    careHubSolution: "Mandatory caregiver reason capture with physician notification flags and resident signature capture.",
    impact: "100% Audit-Ready Records"
  },
  {
    feature: "Medication Storage & Security",
    traditionalFacility: "Cluttered carts and open countertops vulnerable to mix-ups, theft, or unauthorized access.",
    careHubSolution: "Tamper-proof, locked smart vaults with biometric/PIN credentialed caregiver access control.",
    impact: "Zero Unauthorized Access"
  },
  {
    feature: "State Inspection Preparedness",
    traditionalFacility: "High-stress scrambles digging through paper binders and missing log sheets during state inspections.",
    careHubSolution: "Instant 1-click inspection export generates complete historical trails for any resident in under 5 seconds.",
    impact: "Zero Inspection Citations"
  }
];

export const DEVICE_SPECS: DeviceSpec[] = [
  {
    title: "Multi-Shape Adaptive Dispensing",
    description: "Patented carousel mechanics handle diverse pill and capsule geometries—from tiny micro-tablets to large softgels without jamming.",
    icon: "Pill",
    detail: "Supports up to 28 discrete medication schedules"
  },
  {
    title: "Dual-Verification Sensor Array",
    description: "Every dispensed dose is validated by high-frequency optical beam sensors and micro-load cell weight checks before release.",
    icon: "ScanLine",
    detail: "Verified count timestamped to milliseconds"
  },
  {
    title: "Integrated Touchscreen Terminal",
    description: "Brushed stainless-steel front face houses an intuitive color display showing resident photo, vitals, allergy alerts, and dosage instructions.",
    icon: "MonitorSmartphone",
    detail: "High contrast UI tuned for caregiver speed"
  },
  {
    title: "Tamper-Proof Secure Enclosure",
    description: "Heavy-duty medical-grade housing with electronic solenoid locks prevents diversion, tampering, and unauthorized pill access.",
    icon: "Lock",
    detail: "Biometric and NFC staff badge authentication"
  },
  {
    title: "Direct Vitals & Water Glass Station",
    description: "Dedicated hygienic alcove accommodates standard medicine and water cups, with Bluetooth sync for blood pressure, pulse, and temperature.",
    icon: "HeartPulse",
    detail: "Seamless caregiver workflow in one spot"
  },
  {
    title: "Always-On Offline Safeguard",
    description: "Built-in rechargeable battery backup and local offline flash storage ensure uninterrupted medication delivery even during grid outages.",
    icon: "Zap",
    detail: "Up to 36 hours autonomous operation"
  }
];

export const PLATFORM_FEATURES: FeatureCard[] = [
  {
    title: "Digitized eMAR Workflow",
    description: "Say goodbye to illegible handwritten forms. Every administered dose automatically creates a cryptographically timestamped record.",
    badge: "Paperless Audit Ready",
    icon: "FileText"
  },
  {
    title: "Live Shift & Task Dashboard",
    description: "Facility administrators view a bird's-eye map of all residents, upcoming medication passes, vital checkpoints, and caregiver activities.",
    badge: "100% Real-Time Visibility",
    icon: "LayoutDashboard"
  },
  {
    title: "Synchronized Vitals Tracking",
    description: "Blood pressure, pulse oximetry, blood glucose, and temperature readings flow directly into clinical trend charts for visiting physicians.",
    badge: "Early Decompensation Alerts",
    icon: "Activity"
  },
  {
    title: "Caregiver Daily Notes Engine",
    description: "Voice-to-text or structured note templates allow staff to record behavioral observations and meal intake effortlessly without burning time.",
    badge: "Seamless Shift Handover",
    icon: "Mic"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is CareHub, and how does it fit into our RCFE / Assisted Living facility?",
    answer: "CareHub™ by CareNovate is an all-in-one medication dispensing and facility management solution created specifically for Assisted Living and Residential Care Facilities for the Elderly (RCFE). It pairs physical smart dispensing machines with a secure cloud management portal to eliminate medication errors, automate eMAR charting, and keep your facility 100% audit-ready."
  },
  {
    question: "How does the smart dispenser handle different pill shapes and sizes?",
    answer: "Our US-patented dispensing technology features an adaptive metering chamber engineered in partnership with University of California Irvine (UCI). It accommodates standard tablets, coated caplets, oblong shapes, and softgel capsules with precision optical and weight verification."
  },
  {
    question: "Is CareHub compliant with California Title 22 and State Licensing requirements?",
    answer: "Yes. CareHub was built from the ground up to exceed state regulatory standards for medication storage, logging, destruction, and self-administration oversight. It is recognized as an FDA Exempt Class I Medical Device Data System (MDDS), guaranteeing strict adherence to medical record security and HIPAA standards."
  },
  {
    question: "How difficult is it to migrate our facility from paper MARs or our existing software?",
    answer: "Our dedicated onboarding team manages 100% of your initial setup. We support legacy data migration from existing EHR/eMAR software (such as PointClickCare, MatrixCare, and Eldermark) or paper records. Most facilities complete caregiver training in less than 90 minutes with zero downtime."
  },
  {
    question: "What happens if our facility loses power or internet connectivity?",
    answer: "CareHub is engineered with critical life-safety redundancy. Each dispenser includes a built-in battery backup providing up to 36 hours of operation, and an internal cryptographic memory buffer that continues dispensing and logging offline. The moment Wi-Fi or cellular connectivity returns, all records sync automatically to the cloud."
  },
  {
    question: "What kind of customer support is included with CareHub?",
    answer: "Every facility receives 24/7/365 real-time priority support from our US-based clinical care desk. Whether it's 2 PM on a Tuesday or 3 AM on a holiday, your caregivers have direct instant phone and video access to a CareNovate technical specialist."
  }
];  