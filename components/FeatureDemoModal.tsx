'use client';

import { useState } from 'react';
import {
  X,
  Sparkles,
  ShieldCheck,
  Video,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface FeatureDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureDemoModal({
  isOpen,
  onClose,
}: FeatureDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [format, setFormat] = useState<'virtual' | 'onsite'>('virtual');
  const [form, setForm] = useState({
    fullName: '',
    facilityName: '',
    email: '',
    phone: '',
    facilityType: 'rcfe',
    bedCount: '6_beds',
    preferredTime: 'tomorrow_10am',
    currentSystem: 'paper_binders',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, format }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-tight">
                Book a Live CareHub™ Facility Demo
              </h3>
              <p className="text-[11px] sm:text-xs text-primary-100">
                Experience automated dispensing &amp; 1-click audit compliance
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto"
          >
            {/* Trust banner */}
            <div className="p-3 rounded-xl bg-primary-50 border border-primary-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-primary-800">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
                <span>Zero sales pressure • Direct hardware walkthrough</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                US Direct: (888) 902-CARE
              </span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams, Administrator"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Facility Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunrise Gardens RCFE"
                  value={form.facilityName}
                  onChange={(e) =>
                    setForm({ ...form, facilityName: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@facility.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Phone / Direct Line *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 234-5678"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Facility Type
                </label>
                <select
                  value={form.facilityType}
                  onChange={(e) =>
                    setForm({ ...form, facilityType: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                >
                  <option value="rcfe">RCFE (Residential Care Elderly)</option>
                  <option value="assisted_living">Assisted Living Facility</option>
                  <option value="memory_care">Memory Care</option>
                  <option value="board_and_care">Board &amp; Care (6-Bed)</option>
                  <option value="multi">Multi-Facility Operator</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Total Licensed Beds
                </label>
                <select
                  value={form.bedCount}
                  onChange={(e) =>
                    setForm({ ...form, bedCount: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                >
                  <option value="6_beds">6 Beds (Residential)</option>
                  <option value="12_25">12–25 Beds</option>
                  <option value="26_50">26–50 Beds</option>
                  <option value="50_100">50–100 Beds</option>
                  <option value="100_plus">100+ Beds</option>
                </select>
              </div>
            </div>

            {/* Format */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700">
                Preferred Demo Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormat('virtual')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                    format === 'virtual'
                      ? 'bg-primary-50 border-primary-400 ring-1 ring-primary-400'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Video
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      format === 'virtual'
                        ? 'text-primary-600'
                        : 'text-slate-400'
                    }`}
                  />
                  <div>
                    <div
                      className={`text-xs font-bold ${
                        format === 'virtual'
                          ? 'text-primary-800'
                          : 'text-slate-700'
                      }`}
                    >
                      Live Virtual Demo
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      HD Hardware &amp; Cloud Screen share
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('onsite')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                    format === 'onsite'
                      ? 'bg-primary-50 border-primary-400 ring-1 ring-primary-400'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      format === 'onsite'
                        ? 'text-primary-600'
                        : 'text-slate-400'
                    }`}
                  />
                  <div>
                    <div
                      className={`text-xs font-bold ${
                        format === 'onsite'
                          ? 'text-primary-800'
                          : 'text-slate-700'
                      }`}
                    >
                      On-Site Facility Evaluation
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Representative visits with hardware
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Preferred Date &amp; Time
                </label>
                <select
                  value={form.preferredTime}
                  onChange={(e) =>
                    setForm({ ...form, preferredTime: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                >
                  <option value="tomorrow_10am">
                    Tomorrow at 10:00 AM PST
                  </option>
                  <option value="tomorrow_130pm">
                    Tomorrow at 1:30 PM PST
                  </option>
                  <option value="tomorrow_330pm">
                    Tomorrow at 3:30 PM PST
                  </option>
                  <option value="friday_11am">
                    This Friday at 11:00 AM PST
                  </option>
                  <option value="next_week">
                    Next Week (specialist coordinates)
                  </option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Current eMAR / MAR Method
                </label>
                <select
                  value={form.currentSystem}
                  onChange={(e) =>
                    setForm({ ...form, currentSystem: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                >
                  <option value="paper_binders">Handwritten Paper Binders</option>
                  <option value="pointclickcare">PointClickCare</option>
                  <option value="matrixcare">MatrixCare</option>
                  <option value="eldermark">Eldermark</option>
                  <option value="other">Pharmacy Blister Packs / Other</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Reserving Your Priority Slot...</span>
              ) : (
                <>
                  <span>Confirm Live Facility Demonstration</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-slate-500">
              🔒 Your facility information is protected under strict HIPAA and
              confidentiality agreements.
            </p>
          </form>
        ) : (
          /* Success state */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-slate-900">
                Your Demo is Confirmed!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you,{' '}
                <strong className="text-slate-900">
                  {form.fullName || 'Administrator'}
                </strong>
                . We&apos;ve reserved your session for{' '}
                <strong className="text-primary-600">
                  {form.facilityName || 'your facility'}
                </strong>
                .
              </p>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}