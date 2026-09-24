'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Video,
  MapPin,
} from 'lucide-react';
import type { DemoRequest } from '@/lib/types';

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
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-demo-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Facility Demonstration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              See CareHub™ in Action on Your{' '}
              <span className="carehub-gradient-text">Next Shift</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Book a tailored 20-minute demonstration. We will show you how CareHub will securely store, count, dispense, and log every dose across your exact resident count.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                What to expect during your live session:
              </h3>

              {[
                {
                  title: 'Live Smart Dispenser Hardware Demo',
                  desc: 'Watch our patented carousel dispense capsules, micro-tablets, and multi-pill passes with optical and weight verification.',
                },
                {
                  title: 'State Inspection eMAR Audit Simulation',
                  desc: 'See how a 90-day MAR records request is fulfilled in less than 3 seconds with zero missing signatures.',
                },
                {
                  title: 'Custom Pricing & Hardware Allocation',
                  desc: 'Receive an exact proposal tailored to your licensed bed capacity, current pharmacy partner, and existing EHR systems.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">{item.title}</strong>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Prefer to schedule over the phone?</div>
                  <div className="text-slate-500">Call our California team directly</div>
                </div>
              </div>
              <a
                href="tel:18002273482"
                className="font-mono font-bold text-primary-700 text-sm hover:underline"
              >
                (888) 902-CARE
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-primary-200 p-6 sm:p-8 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-xl font-bold text-slate-900">
                      Reserve Your Facility Demonstration
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select your preferred session time and facility size
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Administrator Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Facility Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Facility name"
                        value={form.facilityName}
                        onChange={(e) => setForm({ ...form, facilityName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@facility.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Licensed Bed Count
                      </label>
                      <select
                        value={form.bedCount}
                        onChange={(e) => setForm({ ...form, bedCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                      >
                        <option value="6 Beds">6 Beds (Residential)</option>
                        <option value="12-25 Beds">12–25 Beds</option>
                        <option value="26-50 Beds">26–50 Beds</option>
                        <option value="50-100 Beds">50–100 Beds</option>
                        <option value="100+ Beds">100+ Beds</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Preferred Time
                      </label>
                      <select
                        value={form.preferredTime}
                        onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                      >
                        <option value="10:00 AM">Tomorrow: 10:00 AM PST</option>
                        <option value="1:30 PM">Tomorrow: 1:30 PM PST</option>
                        <option value="3:30 PM">Tomorrow: 3:30 PM PST</option>
                        <option value="Flexible">Anytime this week</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Preferred Demonstration Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'virtual', label: 'Virtual Video Demo', Icon: Video },
                        { value: 'onsite', label: 'On-Site Evaluation', Icon: MapPin },
                      ].map(({ value, label, Icon }) => (
                        <label
                          key={value}
                          className={`p-2.5 rounded-xl border text-xs flex items-center space-x-2 cursor-pointer transition-all ${
                            form.format === value
                              ? 'bg-primary-50 border-primary-400 text-primary-700 font-semibold'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          <input
                            type="radio"
                            name="format"
                            value={value}
                            checked={form.format === value}
                            onChange={() => setForm({ ...form, format: value as any })}
                            className="sr-only"
                          />
                          <Icon className="w-3.5 h-3.5 text-primary-600" />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving Your Slot...</span>
                    ) : (
                      <>
                        <span>Book Facility Demo Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-500 pt-1">
                    <span>✓ No credit card required</span>
                    <span>✓ Under 20 minutes</span>
                    <span>✓ Free ROI report</span>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Demo Reservation Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    We have scheduled your session for{' '}
                    <strong className="text-slate-900">{form.facilityName}</strong>. A calendar invite has been sent to{' '}
                    <strong className="text-primary-700">{form.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-primary-600 hover:underline pt-2"
                  >
                    Edit details or book another facility
                  </button>
                </div>
              )}

              <div className="mt-4 flex items-center justify-center space-x-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Your information is protected under HIPAA guidelines.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}