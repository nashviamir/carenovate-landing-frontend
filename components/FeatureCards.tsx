'use client';

import { useState } from 'react';
import Image from 'next/image';
import FeatureDemoModal from './FeatureDemoModal';
import {
  Pill,
  ScanLine,
  MonitorSmartphone,
  Lock,
  HeartPulse,
  Zap,
  Cpu,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { DEVICE_SPECS } from '@/lib/data';

const ICON_MAP: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-5 h-5" />,
  ScanLine: <ScanLine className="w-5 h-5" />,
  MonitorSmartphone: <MonitorSmartphone className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

export default function FeatureCards() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="features" className="py-16 lg:py-20 bg-brandGrey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — centered like other sections */}
<div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
  <div className="chip-main">
    <Cpu className="w-3.5 h-3.5" />
    <span>Pillar 1 — Hardware Architecture</span>
  </div>
  <h2 className="text-b-32 text-brandGrey-500 text-balance">
    Engineered in the USA.{' '}
    <span className="text-primary-500">Patented Precision.</span>
  </h2>
  <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
    Six hardware capabilities working together — hover or tap to explore.
  </p>
</div>

        {/* Split: image + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT — Image card */}
          <div className="lg:col-span-5">
            <div className="h-full flex flex-col rounded-card bg-white border border-brandGrey-50 shadow-card overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-brandGrey-50 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brandGreen-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-brandGreen-500" />
                  </span>
                  <span className="text-m-12 text-brandGrey-500">
                    CareHub Smart Dispenser
                  </span>
                </div>
                <span className="text-m-12 text-primary-500 font-mono bg-primary-50 px-2 py-0.5 rounded-chip border border-primary-100">
                  CH-2000
                </span>
              </div>

              {/* Image — bigger, less padding */}
              <div className="relative flex-1 min-h-[340px] bg-brandGrey-50">
                <Image
                  src="/carenovate-landing-frontend/images/9856.jpg"
                  alt="CareHub Smart Dispenser — carousel and pill chambers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-3"
                />
              </div>

              {/* Bottom spec strip */}
              <div className="grid grid-cols-3 divide-x divide-brandGrey-50 border-t border-brandGrey-50 flex-shrink-0">
                <div className="text-center py-3">
                  <div className="text-b-16 text-brandGrey-500">28</div>
                  <div className="text-m-10 text-brandGrey-300 uppercase tracking-wider mt-0.5">
                    Slots
                  </div>
                </div>
                <div className="text-center py-3">
                  <div className="text-b-16 text-primary-500">Dual</div>
                  <div className="text-m-10 text-brandGrey-300 uppercase tracking-wider mt-0.5">
                    Sensor
                  </div>
                </div>
                <div className="text-center py-3">
                  <div className="text-b-16 text-primary-500">FDA</div>
                  <div className="text-m-10 text-brandGrey-300 uppercase tracking-wider mt-0.5">
                    Exempt
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Accordion + CTA */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="flex-1 rounded-card bg-white border border-brandGrey-50 shadow-card overflow-hidden"
              onMouseLeave={() => setOpenIndex(-1)}
            >
              {DEVICE_SPECS.map((spec, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenIndex(idx)}
                    onClick={() => handleToggle(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleToggle(idx);
                      }
                    }}
                    className={`cursor-pointer transition-colors select-none ${
                      isOpen ? 'bg-brandGrey-50/70' : 'hover:bg-brandGrey-50/50'
                    } ${
                      idx !== DEVICE_SPECS.length - 1
                        ? 'border-b border-brandGrey-50'
                        : ''
                    }`}
                  >
                    {/* Header row */}
                    <div className="px-4 sm:px-5 py-4 flex items-center gap-3 sm:gap-4">
                      <span
                        className={`text-b-20 tabular-nums transition-colors duration-300 w-8 sm:w-10 flex-shrink-0 ${
                          isOpen ? 'text-primary-500' : 'text-brandGrey-200'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`w-9 h-9 rounded-card-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary-500 text-white border border-primary-500'
                            : 'bg-primary-50 text-primary-500 border border-primary-100'
                        }`}
                      >
                        {ICON_MAP[spec.icon] || (
                          <ShieldCheck className="w-4 h-4" />
                        )}
                      </span>

                      <span
                        className={`flex-1 text-b-16 transition-colors duration-300 ${
                          isOpen
                            ? 'text-brandGrey-500'
                            : 'text-brandGrey-400'
                        }`}
                      >
                        {spec.title}
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-primary-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-4 pl-[3.75rem] sm:pl-[4.5rem]">
                          <p className="text-r-14 text-brandGrey-400 leading-relaxed">
                            {spec.description}
                          </p>
                          <div className="mt-2.5 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary-500" />
                            <span className="text-m-10 text-primary-600 uppercase tracking-wider">
                              {spec.detail}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="btn-primary-lg group w-full sm:w-auto"
              >
                <span>Request a Hardware Hands-on Evaluation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <FeatureDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </section>
  );
}