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
await new Promise((resolve) => setTimeout(resolve, 600));
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

  const inputClass =
    'w-full h-10 px-3 rounded-btn bg-white border border-brandGrey-50 text-r-14 text-brandGrey-500 placeholder-brandGrey-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all';

  const labelClass = 'text-m-12 text-brandGrey-500 block mb-1.5';

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto bg-brandNavy-500/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-card shadow-card overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — light */}
<div className="bg-white border-b border-brandGrey-50 px-5 py-4 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-card-sm bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
      <Sparkles className="w-5 h-5 text-primary-500" />
    </div>
    <div>
      <h3 className="text-b-16 text-brandGrey-500 leading-tight">
        Book a Live CareHub™ Facility Demo
      </h3>
      <p className="text-r-12 text-brandGrey-400 mt-0.5">
        Automated dispensing &amp; 1-click audit compliance
      </p>
    </div>
  </div>
  <button
    onClick={handleClose}
    className="p-1.5 rounded-btn text-brandGrey-400 hover:text-brandGrey-500 hover:bg-brandGrey-50 transition-colors flex-shrink-0"
    aria-label="Close"
  >
    <X className="w-5 h-5" />
  </button>
</div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-5 space-y-3 max-h-[78vh] overflow-y-auto"
          >
            {/* Trust banner */}
            <div className="px-3 py-2 rounded-btn bg-primary-50 border border-primary-100 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-m-10 text-primary-800">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                <span>Zero sales pressure • Direct hardware walkthrough</span>
              </span>
              <span className="text-m-10 text-brandGrey-400">
                (888) 902-CARE
              </span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Facility Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunrise Gardens RCFE"
                  value={form.facilityName}
                  onChange={(e) =>
                    setForm({ ...form, facilityName: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="director@facility.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone / Direct Line *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 234-5678"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Facility Type</label>
                <select
                  value={form.facilityType}
                  onChange={(e) =>
                    setForm({ ...form, facilityType: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="rcfe">RCFE (Residential Care Elderly)</option>
                  <option value="assisted_living">Assisted Living Facility</option>
                  <option value="memory_care">Memory Care</option>
                  <option value="board_and_care">Board &amp; Care (6-Bed)</option>
                  <option value="multi">Multi-Facility Operator</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Total Licensed Beds</label>
                <select
                  value={form.bedCount}
                  onChange={(e) =>
                    setForm({ ...form, bedCount: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="6_beds">6 Beds (Residential)</option>
                  <option value="12_25">12–25 Beds</option>
                  <option value="26_50">26–50 Beds</option>
                  <option value="50_100">50–100 Beds</option>
                  <option value="100_plus">100+ Beds</option>
                </select>
              </div>
            </div>

            {/* Format selection */}
            <div>
              <label className={labelClass}>Preferred Demo Format</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    value: 'virtual',
                    label: 'Live Virtual Demo',
                    sub: 'HD Hardware & Cloud screen share',
                    Icon: Video,
                  },
                  {
                    value: 'onsite',
                    label: 'On-Site Facility Evaluation',
                    sub: 'Representative visits with hardware',
                    Icon: MapPin,
                  },
                ].map(({ value, label, sub, Icon }) => {
                  const isActive = format === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormat(value as 'virtual' | 'onsite')}
                      className={`p-3 rounded-btn border text-left flex items-start gap-2.5 transition-all ${
                        isActive
                          ? 'bg-primary-50 border-primary-300 ring-1 ring-primary-500/20'
                          : 'bg-white border-brandGrey-50 hover:border-primary-200'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isActive ? 'text-primary-500' : 'text-brandGrey-300'
                        }`}
                      />
                      <div>
                        <div
                          className={`text-m-12 ${
                            isActive ? 'text-primary-700' : 'text-brandGrey-500'
                          }`}
                        >
                          {label}
                        </div>
                        <div className="text-r-10 text-brandGrey-300 mt-0.5">
                          {sub}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Preferred Date &amp; Time</label>
                <select
                  value={form.preferredTime}
                  onChange={(e) =>
                    setForm({ ...form, preferredTime: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="tomorrow_10am">Tomorrow at 10:00 AM PST</option>
                  <option value="tomorrow_130pm">Tomorrow at 1:30 PM PST</option>
                  <option value="tomorrow_330pm">Tomorrow at 3:30 PM PST</option>
                  <option value="friday_11am">This Friday at 11:00 AM PST</option>
                  <option value="next_week">Next Week (coordinates)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Current eMAR / MAR Method</label>
                <select
                  value={form.currentSystem}
                  onChange={(e) =>
                    setForm({ ...form, currentSystem: e.target.value })
                  }
                  className={inputClass}
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
              className="btn-primary-lg w-full group justify-center"
            >
              {isSubmitting ? (
                <span>Reserving Your Priority Slot...</span>
              ) : (
                <>
                  <span>Confirm Live Facility Demonstration</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

            <p className="text-r-10 text-center text-brandGrey-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-brandGreen-500" />
              <span>Protected under HIPAA confidentiality.</span>
            </p>
          </form>
        ) : (
          /* Success state */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brandGreen-50 border border-brandGreen-200 text-brandGreen-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h4 className="text-b-24 text-brandGrey-500">
                Your Demo is Confirmed!
              </h4>
              <p className="text-r-14 text-brandGrey-400 max-w-md mx-auto">
                Thank you,{' '}
                <strong className="text-brandGrey-500">
                  {form.fullName || 'Administrator'}
                </strong>
                . We&apos;ve reserved your session for{' '}
                <strong className="text-primary-500">
                  {form.facilityName || 'your facility'}
                </strong>
                .
              </p>
            </div>
            <button
              onClick={handleClose}
              className="btn-primary-lg group justify-center"
            >
              <span>Return to Website</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}