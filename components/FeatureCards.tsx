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
    <section id="features" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary-200 text-primary-700 text-[10px] sm:text-[11px] font-semibold tracking-wide">
              <Cpu className="w-3 h-3" />
              <span>Pillar 1 — Hardware Architecture</span>
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 text-balance">
              Engineered in the USA.{' '}
              <span className="text-primary-600">Patented Precision.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Six hardware capabilities working together — hover or tap to
              explore.
            </p>
          </div>
        </div>

        {/* Split: image + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Image */}
          <div className="lg:col-span-5">
  <div className="h-full flex flex-col rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
    {/* Top bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 flex-shrink-0">
      <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Model CH-2000
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-primary-600 font-semibold">
        US Patent Protected
      </span>
    </div>

    {/* Image — flex-1 to fill remaining space */}
    <div className="relative flex-1 min-h-[320px] bg-slate-50">
      <Image
        src="/carenovate-landing-frontend/images/9856.jpg"
        alt="CareHub Smart Dispenser — carousel and pill chambers"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-contain p-4"
      />
    </div>

    {/* Bottom spec strip */}
    <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 flex-shrink-0">
      <div className="text-center py-3">
        <div className="text-sm font-bold text-slate-900">28</div>
        <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
          Slots
        </div>
      </div>
      <div className="text-center py-3">
        <div className="text-sm font-bold text-primary-600">Dual</div>
        <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
          Sensor
        </div>
      </div>
      <div className="text-center py-3">
        <div className="text-sm font-bold text-primary-600">FDA</div>
        <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
          Exempt
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Accordion */}
         <div className="lg:col-span-7 flex flex-col">
  <div
    className="flex-1 rounded-2xl bg-white border border-slate-200 overflow-hidden"
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
                      isOpen ? 'bg-slate-50/70' : 'hover:bg-slate-50/50'
                    } ${
                      idx !== DEVICE_SPECS.length - 1
                        ? 'border-b border-slate-100'
                        : ''
                    }`}
                  >
                    {/* Header row */}
                    <div className="px-4 sm:px-5 py-3.5 flex items-center gap-3 sm:gap-4">
                      <span
                        className={`text-xl sm:text-2xl font-black tabular-nums leading-none transition-colors duration-300 w-8 sm:w-10 flex-shrink-0 ${
                          isOpen ? 'text-primary-600' : 'text-slate-200'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary-600 text-white border border-primary-600'
                            : 'bg-primary-50 text-primary-600 border border-primary-100'
                        }`}
                      >
                        {ICON_MAP[spec.icon] || (
                          <ShieldCheck className="w-4 h-4" />
                        )}
                      </span>

                      <span
                        className={`flex-1 text-sm sm:text-base font-bold leading-snug ${
                          isOpen ? 'text-slate-900' : 'text-slate-800'
                        }`}
                      >
                        {spec.title}
                      </span>

                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary-500 transition-transform duration-300 ${
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
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {spec.description}
                          </p>
                          <div className="mt-2.5 text-[10px] font-mono uppercase tracking-wider text-primary-600 inline-flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary-500" />
                            <span>{spec.detail}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-all group"
              >
                <span>Request a Hardware Hands-on Evaluation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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