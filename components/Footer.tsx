import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                CareHub<span className="text-primary-400">™</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              CareHub is a proprietary healthcare system developed by{' '}
              <strong className="text-slate-300">CareNovate Inc.</strong>, a US
              healthcare innovator dedicated to automated medication dispensing
              accuracy, caregiver efficiency, and complete state audit readiness
              for senior care communities.
            </p>

            <div className="space-y-1 text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                <span>Headquarters: Irvine, California, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-primary-400" />
                <span>24/7 Facility Care Line: (888) 902-CARE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-primary-400" />
                <span>contact@carenovate.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Solution Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-primary-300 transition-colors">
                  Smart Dispenser Hardware
                </Link>
              </li>
              <li>
                <Link href="#the-platform" className="hover:text-primary-300 transition-colors">
                  Cloud Platform &amp; Portal
                </Link>
              </li>
              <li>
                <Link href="#the-platform" className="hover:text-primary-300 transition-colors">
                  Automated eMAR Logging
                </Link>
              </li>
              <li>
                <Link href="#the-platform" className="hover:text-primary-300 transition-colors">
                  Vitals Integration
                </Link>
              </li>
              <li>
                <Link href="#the-platform" className="hover:text-primary-300 transition-colors">
                  Pre-Dose Dosing Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Compliance
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-1.5">
                <Award className="w-3 h-3 text-primary-400" />
                <span>FDA Exempt Class I MDDS</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Award className="w-3 h-3 text-primary-400" />
                <span>US Patented Dispensing Tech</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Award className="w-3 h-3 text-primary-400" />
                <span>UCI Clinical Refactor</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Award className="w-3 h-3 text-primary-400" />
                <span>HIPAA Compliant Cloud</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Schedule Evaluation
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Ready to eliminate paper binders and medication count stress from
              your facility?
            </p>
            <Link
              href="#book-demo-section"
              className="block w-full py-2.5 px-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-bold transition-colors text-center"
            >
              Book a Facility Demo
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-slate-800/80 pt-8 space-y-4 text-[11px] text-slate-400 leading-normal">
          <p>
            <strong>Regulatory Disclaimer:</strong> CareHub™ by CareNovate Inc.
            is categorized as an FDA Exempt Class I Medical Device Data System
            (MDDS) designed for the transfer, storage, and display of medical
            device data and electronic medication administration records (eMAR).
            CareHub supports licensed healthcare providers and caregiver staff;
            it does not replace professional clinical evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} CareNovate Inc. All Rights Reserved.
              CareHub™ is a registered trademark.
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-slate-300">
                Privacy Policy (HIPAA)
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-slate-300">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-slate-300">
                Security Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}