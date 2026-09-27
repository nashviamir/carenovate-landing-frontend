'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const BEFORE_IMG = '/carenovate-landing-frontend/images/before.jpg';
const AFTER_IMG = '/carenovate-landing-frontend/images/after.jpg';

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

const SOLUTIONS = [
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

  const showBeforeBadge = sliderPosition >= 22;
  const showAfterBadge = sliderPosition <= 78;

  return (
    <section id="comparison" className="py-16 lg:py-20 bg-brandGrey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="chip-main">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Reality of Senior Living Medication Management</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            From Manual Panic to{' '}
            <span className="text-primary-500">Digital Serenity</span>
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            Traditional facilities rely on caregiver memory, manual counts, and
            binders of paperwork. It works—until a dose is missed, a shift
            changes, or a state inspector walks through the door.
          </p>
        </div>

        {/* Slider Card */}
        <div className="bg-white rounded-card p-4 sm:p-5 shadow-card border border-brandGrey-50">
          {/* Tabs */}
          <div className="flex items-center justify-end pb-4 border-b border-brandGrey-50">
            <div className="flex items-center rounded-btn bg-brandGrey-50 p-1 border border-brandGrey-100">
              <button
                type="button"
                onClick={() => handleTabChange('before')}
                className={`px-3 py-1.5 rounded-btn text-m-12 transition-all ${
                  activeTab === 'before'
                    ? 'bg-brandOrange-50 text-brandOrange-800 border border-brandOrange-200 shadow-sm'
                    : 'text-brandGrey-400 hover:text-brandGrey-500'
                }`}
              >
                Current Reality
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('after')}
                className={`px-3 py-1.5 rounded-btn text-m-12 transition-all ${
                  activeTab === 'after'
                    ? 'bg-primary-50 text-primary-700 border border-primary-200 shadow-sm'
                    : 'text-brandGrey-400 hover:text-brandGrey-500'
                }`}
              >
                CareHub™ Standard
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mt-4 rounded-card-sm overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-brandGrey-50 bg-brandGrey-50 select-none">
            <Image
              src={AFTER_IMG}
              alt="CareHub standard — organized, calm, audit-ready facility"
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover object-center"
              draggable={false}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: `${(100 / Math.max(sliderPosition, 1)) * 100}%`,
                }}
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
            </div>

            {/* Before badge */}
            <div
              className={`absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm border border-brandOrange-200 text-brandOrange-800 px-3 py-1 rounded-chip text-m-12 flex items-center gap-1.5 shadow-card pointer-events-none whitespace-nowrap transition-opacity duration-200 ${
                showBeforeBadge ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-brandOrange-600 flex-shrink-0" />
              <span>Current Manual Chaos &amp; Binders</span>
            </div>

            {/* After badge */}
            <div
              className={`absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm border border-primary-200 text-primary-700 px-3 py-1 rounded-chip text-m-12 flex items-center gap-1.5 shadow-card pointer-events-none whitespace-nowrap transition-opacity duration-200 ${
                showAfterBadge ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
              <span>CareHub Digital Peace of Mind</span>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
              style={{
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-brandGrey-50 shadow-card flex items-center justify-center text-primary-500 text-b-16 select-none">
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
        </div>

        {/* Challenges vs CareHub */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="rounded-card bg-brandOrange-50 border border-brandOrange-200 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-card-sm bg-brandOrange-100 border border-brandOrange-200 flex items-center justify-center text-brandOrange-600 flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-b-18 text-brandGrey-500">
                  Current Facility Challenges
                </h3>
                <p className="text-r-12 text-brandGrey-400 mt-0.5">
                  The high cost of manual processes &amp; paper memory
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {CHALLENGES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-card-sm bg-white border border-brandOrange-100 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-b-14 text-brandOrange-800 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brandOrange-500 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-r-14 text-brandGrey-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CareHub */}
          <div className="rounded-card bg-primary-50 border border-primary-200 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-card-sm bg-primary-100 border border-primary-200 flex items-center justify-center text-primary-500 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-b-18 text-brandGrey-500">
                  Facility on CareHub™
                </h3>
                <p className="text-r-12 text-primary-600 mt-0.5">
                  Total automated security, accuracy &amp; verification
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {SOLUTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-card-sm bg-white border border-primary-100 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-b-14 text-primary-700 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-r-14 text-brandGrey-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}