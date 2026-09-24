'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { COMPARISON_DATA } from '@/lib/data';

const BEFORE_IMG = '/images/before.jpg';
const AFTER_IMG = '/images/after.jpg';

const CHALLENGES = [
  {
    title: 'Manual Counts & Cluttered Storage',
    desc: 'Dozens of open prescription bottles crowded on nurse station countertops. Pill counts rely on tired staff during chaotic shift transitions.',
  },
  {
    title: 'End-of-Shift Memory Logging',
    desc: 'Caregivers backfill handwritten notes and manual eMAR forms from memory hours after the event, leaving gaps in dose timing and vitals.',
  },
  {
    title: 'Incomplete Refusals & Self-Administration',
    desc: 'When a resident refuses a dose or self-administers, real-time documentation is skipped, creating immediate regulatory non-compliance.',
  },
  {
    title: 'State Inspection Panic',
    desc: 'When inspectors ask for 90 days of MAR history, administrators spend hours flipping through binders trying to locate missing pages.',
  },
];

const CARENOVATE_SOLUTIONS = [
  {
    title: 'Smart Dispenser Hardware Security',
    desc: 'Medications safely locked inside tamper-proof vaults. Every dose is counted, optical-verified, and dispensed in exact prescribed quantities.',
  },
  {
    title: 'Pre-Dose Real-Time Alert Engine',
    desc: 'Active audio-visual alerts notify caregivers on their tablets and dispensers before a dosing window expires—preventing missed doses before they happen.',
  },
  {
    title: 'Automated eMARs, Vitals & Daily Notes',
    desc: 'Dispenses automatically log to resident charts with biometric confirmation, blood pressure/pulse readings, and structured caregiver notes.',
  },
  {
    title: 'Instant 1-Click State Inspection Reports',
    desc: 'Produce immaculate, cryptographic audit trails for state inspectors in less than 3 seconds. Zero guesswork, zero citations.',
  },
];

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderChange = (value: number) => {
    setSliderPosition(value);
    setActiveTab(value > 50 ? 'before' : 'after');
  };

  const handleTabChange = (tab: 'after' | 'before') => {
    setActiveTab(tab);
    setSliderPosition(tab === 'before' ? 100 : 0);
  };

  return (
    <section
      id="comparison"
      className="py-16 lg:py-20 bg-slate-50 text-slate-900 relative"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-[11px] sm:text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Reality of Senior Living Medication Management</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            From Manual Panic to{' '}
            <span className="carehub-gradient-text">Digital Serenity</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Traditional facilities rely on caregiver memory, manual counts, and
            binders of paperwork. It works—until a dose is missed, a shift
            changes, or a state inspector walks through the door.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xl">
          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Facility Visual Transformation
              </h3>
              <p className="text-[11px] text-slate-500">
                Drag the slider handle or click a tab to compare
              </p>
            </div>

            <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => handleTabChange('before')}
                className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                  activeTab === 'before'
                    ? 'bg-amber-100 text-amber-800 border border-amber-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Current Reality
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('after')}
                className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                  activeTab === 'after'
                    ? 'bg-primary-100 text-primary-800 border border-primary-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                CareHub™ Standard
              </button>
            </div>
          </div>

          {/* Slider viewport */}
          <div className="relative mt-4 rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-slate-200 bg-slate-100 select-none">
            <Image
              src={AFTER_IMG}
              alt="CareHub standard — organized, calm, audit-ready facility"
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover object-center"
              draggable={false}
            />

            <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md border border-primary-200 text-primary-700 px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 shadow-md pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
              <span>CareHub Digital Peace of Mind</span>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: `${(100 / Math.max(sliderPosition, 1)) * 100}%` }}
              >
                <Image
                  src={BEFORE_IMG}
                  alt="Traditional facility — cluttered counters, paper binders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="object-cover object-center"
                  draggable={false}
                />
              </div>

              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-amber-200 text-amber-700 px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 shadow-md pointer-events-none">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Current Manual Chaos &amp; Binders</span>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 z-20 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-primary-700 font-bold text-sm select-none">
                ⇄
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={sliderPosition}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-1">
            <span className="text-amber-600 font-medium">
              ← Slide left to view CareHub Standard
            </span>
            <span className="hidden sm:inline text-slate-400">
              Drag horizontally to inspect both environments
            </span>
            <span className="text-primary-600 font-medium">
              Slide right to view Manual Chaos →
            </span>
          </div>
        </div>

        {/* Breakdown: Challenges vs CareHub — 4 items each */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="rounded-2xl bg-amber-50/50 border border-amber-200/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Current Facility Challenges
                </h3>
                <p className="text-[11px] text-slate-500">
                  The high cost of manual processes &amp; paper memory
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              {CHALLENGES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-amber-100 shadow-sm space-y-1.5"
                >
                  <div className="font-semibold text-amber-700 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CareHub */}
          <div className="rounded-2xl bg-primary-50/50 border border-primary-200/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-100 border border-primary-200 flex items-center justify-center text-primary-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Facility on CareHub™
                </h3>
                <p className="text-[11px] text-primary-600">
                  Total automated security, accuracy &amp; verification
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              {CARENOVATE_SOLUTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-primary-100 shadow-sm space-y-1.5"
                >
                  <div className="font-semibold text-primary-700 flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4">Operational Area</th>
                  <th className="py-3 px-4 text-amber-700">Traditional Practice</th>
                  <th className="py-3 px-4 text-primary-700">CareHub™ System</th>
                  <th className="py-3 px-4 text-emerald-600 text-right">
                    Verified Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {row.traditionalFacility}
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">
                      {row.careHubSolution}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-600 whitespace-nowrap">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="#book-demo-section"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/20 hover:-translate-y-0.5 transition-all"
          >
            <span>Upgrade Your Facility to the CareHub Standard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}