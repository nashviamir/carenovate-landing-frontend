import Link from 'next/link';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Linkedin,
} from 'lucide-react';

const SOLUTION_LINKS = [
  { label: 'Smart Dispenser Hardware', href: '/features' },
  { label: 'Feature Comparison', href: '/features' },
  { label: 'Automated eMAR Logging', href: '/#comparison' },
  { label: 'Pre-Dose Alerts', href: '/#comparison' },
  { label: 'Frequently Asked Questions', href: '/faq' },
];

const COMPLIANCE_ITEMS = [
  'FDA Exempt Class I MDDS',
  'US Patented Dispensing Tech',
  'UCI Clinical Refactor',
  'HIPAA Compliant Cloud',
  'Title 22 Aligned',
];

const COMPANY_LINKS = [
  { label: 'About CareNovate', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press & Media', href: '#' },
  { label: 'Partners', href: '#' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy (HIPAA)', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Security Whitepaper', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandNavy-500 text-brandGrey-200">
      {/* Top: Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">
          {/* Column 1 — Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="text-b-24 text-white tracking-tight">
                Care<span className="text-primary-300">Novate</span>
              </span>
              <span className="text-r-10 text-brandGrey-200/60 uppercase tracking-wider">
                Inc.
              </span>
            </div>

            <p className="text-r-14 text-brandGrey-200/90 leading-relaxed max-w-sm">
              US-designed healthcare hardware and cloud software for senior
              living — engineered for automated medication accuracy, caregiver
              efficiency, and complete state audit readiness.
            </p>

            <ul className="space-y-2 text-r-14">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary-300 flex-shrink-0" />
                <span>Irvine, California, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-300 flex-shrink-0" />
                <a
                  href="tel:18002273482"
                  className="hover:text-white transition-colors"
                >
                  (888) 902-CARE
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-300 flex-shrink-0" />
                <a
                  href="mailto:contact@carenovate.com"
                  className="hover:text-white transition-colors"
                >
                  contact@carenovate.com
                </a>
              </li>
            </ul>

            <a
              href="https://www.linkedin.com/company/carenovate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-r-12 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-btn bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <span>Follow on LinkedIn</span>
            </a>
          </div>

          {/* Column 2 — Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-b-14 text-white uppercase tracking-wider mb-4">
              Solution Modules
            </h4>
            <ul className="space-y-2.5 text-r-14">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brandGrey-200/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Compliance (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-b-14 text-white uppercase tracking-wider mb-4">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-r-14">
              {COMPLIANCE_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brandGreen-500 flex-shrink-0" />
                  <span className="text-brandGrey-200/90 whitespace-nowrap">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-b-14 text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-r-14">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brandGrey-200/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Legal + disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          <p className="text-r-10 text-brandGrey-200/60 leading-relaxed max-w-4xl">
            <strong className="text-brandGrey-200/80">
              Regulatory Disclaimer:
            </strong>{' '}
            CareHub™ by CareNovate Inc. is categorized as an FDA Exempt Class I
            Medical Device Data System (MDDS) designed for the transfer,
            storage, and display of medical device data and electronic
            medication administration records (eMAR). CareHub supports licensed
            healthcare providers and caregiver staff; it does not replace
            professional clinical evaluation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-r-12 text-brandGrey-200/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brandGreen-500" />
              <span>© {currentYear} CareNovate Inc. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {LEGAL_LINKS.map((link, idx) => (
                <span key={link.label} className="flex items-center gap-3">
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {idx < LEGAL_LINKS.length - 1 && (
                    <span className="text-brandGrey-200/30">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}