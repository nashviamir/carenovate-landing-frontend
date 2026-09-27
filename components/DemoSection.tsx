'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Video,
  MapPin,
  ShieldCheck,
  Calendar,
  Monitor,
  FileCheck,
} from 'lucide-react';
import type { DemoRequest } from '@/lib/types';

const STEPS = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Book Your Slot',
    desc: 'Under 30 seconds',
  },
  {
    number: '02',
    Icon: Monitor,
    title: 'Live Walkthrough',
    desc: 'Real-time demo',
  },
  {
    number: '03',
    Icon: FileCheck,
    title: 'Custom Proposal',
    desc: 'Tailored pricing',
  },
];

const HIGHLIGHTS = [
  'Dual-sensor dispenser verification',
  '90-day eMAR audit in 3 seconds',
  'Custom hardware for your beds',
];

export default function DemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<DemoRequest>({
    fullName: '',
    email: '',
    phone: '',
    facilityName: '',
    facilityType: 'rcfe',
    bedCount: '12-25 Beds',
    currentSystem: 'paper_binders',
    preferredDate: 'Tomorrow',
    preferredTime: '10:00 AM',
    format: 'virtual',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-demo-section" className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="chip-main">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Facility Demonstration</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            See CareHub™ in Action on Your{' '}
            <span className="text-primary-500">Next Shift</span>
          </h2>
          <p className="text-r-14 text-brandGrey-400 max-w-xl mx-auto">
            20-minute live walkthrough. No slides, no sales pitch.
          </p>
        </div>

        {/* 3 Steps — compact strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {STEPS.map(({ number, Icon, title, desc }) => (
            <div
              key={number}
              className="flex items-center gap-3 rounded-card-sm bg-white border border-brandGrey-50 p-3 shadow-card"
            >
              <div className="w-8 h-8 rounded-card-sm bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-m-10 text-primary-500 uppercase tracking-wider">
                    {number}
                  </span>
                  <span className="text-b-14 text-brandGrey-500">{title}</span>
                </div>
                <div className="text-r-10 text-brandGrey-400 mt-0.5">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form card — full width */}
        <div className="rounded-card bg-white border border-brandGrey-50 shadow-card overflow-hidden">
          {/* Top strip — Highlights (blue gradient) */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-4 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.1] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-2 text-primary-100 text-m-10 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>What You Will See</span>
                </span>
                {HIGHLIGHTS.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-r-12 text-primary-50"
                  >
                    <CheckCircle2 className="w-3 h-3 text-white flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="tel:18002273482"
                className="inline-flex items-center gap-2 text-white hover:text-primary-100 transition-colors flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-m-14">(888) 902-CARE</span>
              </a>
            </div>
          </div>

          {/* Form body */}
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between border-b border-brandGrey-50 pb-3 mb-5">
                  <div>
                    <h3 className="text-b-18 text-brandGrey-500">
                      Reserve Your Slot
                    </h3>
                    <p className="text-r-12 text-brandGrey-400 mt-0.5">
                      We will confirm by email within minutes
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-r-10 text-brandGrey-300">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-brandGreen-500" />
                      No credit card
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-brandGreen-500" />
                      Under 20 min
                    </span>
                  </div>
                </div>

                {/* Form grid — 2 cols on mobile, 4 cols on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Administrator Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 placeholder-brandGrey-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Facility Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Facility name"
                      value={form.facilityName}
                      onChange={(e) =>
                        setForm({ ...form, facilityName: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 placeholder-brandGrey-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@facility.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 placeholder-brandGrey-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 placeholder-brandGrey-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Licensed Bed Count
                    </label>
                    <select
                      value={form.bedCount}
                      onChange={(e) =>
                        setForm({ ...form, bedCount: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    >
                      <option value="6 Beds">6 Beds</option>
                      <option value="12-25 Beds">12–25 Beds</option>
                      <option value="26-50 Beds">26–50 Beds</option>
                      <option value="50-100 Beds">50–100 Beds</option>
                      <option value="100+ Beds">100+ Beds</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Preferred Time
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) =>
                        setForm({ ...form, preferredTime: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all"
                    >
                      <option value="10:00 AM">Tomorrow 10 AM</option>
                      <option value="1:30 PM">Tomorrow 1:30 PM</option>
                      <option value="3:30 PM">Tomorrow 3:30 PM</option>
                      <option value="Flexible">This week</option>
                    </select>
                  </div>

                  {/* Format — spans 2 cols */}
                  <div className="space-y-1.5 lg:col-span-2">
                    <label className="text-m-12 text-brandGrey-500 block">
                      Demonstration Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        {
                          value: 'virtual',
                          label: 'Virtual Demo',
                          Icon: Video,
                        },
                        {
                          value: 'onsite',
                          label: 'On-Site Visit',
                          Icon: MapPin,
                        },
                      ].map(({ value, label, Icon }) => {
                        const isActive = form.format === value;
                        return (
                          <label
                            key={value}
                            className={`h-10 px-3 rounded-btn border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                              isActive
                                ? 'bg-primary-50 border-primary-300 ring-1 ring-primary-500/20'
                                : 'bg-white border-brandGrey-50 hover:border-primary-200'
                            }`}
                          >
                            <input
                              type="radio"
                              name="format"
                              value={value}
                              checked={isActive}
                              onChange={() =>
                                setForm({
                                  ...form,
                                  format: value as 'virtual' | 'onsite',
                                })
                              }
                              className="sr-only"
                            />
                            <Icon
                              className={`w-3.5 h-3.5 flex-shrink-0 ${
                                isActive
                                  ? 'text-primary-500'
                                  : 'text-brandGrey-300'
                              }`}
                            />
                            <span
                              className={`text-m-12 ${
                                isActive
                                  ? 'text-primary-700'
                                  : 'text-brandGrey-500'
                              }`}
                            >
                              {label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Submit row */}
                <div className="mt-5 pt-4 border-t border-brandGrey-50 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-lg w-full sm:w-auto group justify-center"
                  >
                    {isSubmitting ? (
                      <span>Reserving...</span>
                    ) : (
                      <>
                        <span>Confirm Live Demonstration</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 text-r-10 text-brandGrey-400">
                    <ShieldCheck className="w-3 h-3 text-brandGreen-500" />
                    <span>HIPAA Compliant • Encrypted end-to-end</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-brandGreen-50 border border-brandGreen-200 text-brandGreen-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-b-20 text-brandGrey-500">
                  You&apos;re All Set!
                </h3>
                <p className="text-r-14 text-brandGrey-400 max-w-md mx-auto">
                  Reserved for{' '}
                  <strong className="text-brandGrey-500">
                    {form.facilityName || 'your facility'}
                  </strong>
                  . Invite heading to{' '}
                  <strong className="text-primary-500">
                    {form.email || 'your inbox'}
                  </strong>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                >
                  <span>Book another facility</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}