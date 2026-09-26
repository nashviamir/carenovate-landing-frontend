import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';

const BULLETS = [
  'Zero memory-based shift logging',
  'Real-time pre-dose alerts',
  '1-click state inspection eMAR audits',
  'Patented multi-shape pill handling',
];

const QUICK_FACTS = [
  { value: '28 Slots', label: 'Multi-Shape Pills', accent: false },
  { value: '36 Hours', label: 'Battery Backup', accent: true },
  { value: '100%', label: 'Audit Logged', accent: true },
];

export default function Hero() {
  return (
    <section className="bg-white pt-14 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-[11px] sm:text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span>Next-Gen RCFE &amp; Assisted Living Medication Security</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — value proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.12] text-slate-900 text-balance max-w-[34rem] mx-auto lg:mx-0">
              Never Face Medication{' '}
              <span className="text-primary-600">
                Guesswork or Audit Anxiety
              </span>{' '}
              in Your Facility Again.
            </h1>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-6">
              Built for{' '}
              <strong className="text-slate-900 font-semibold">
                Assisted Living &amp; RCFE operators
              </strong>
              . Every dose, note, and task is{' '}
              <strong className="text-primary-600 font-semibold">
                automatically logged, verified, and audit-ready
              </strong>
              .
            </p>

            {/* Bullets — 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-8 max-w-lg mx-auto lg:mx-0 text-left">
              {BULLETS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="#book-demo-section"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Live Facility Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-primary-300 hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-primary-500" />
                <span>Explore Smart Dispenser</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — device showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-3 border border-slate-200 shadow-xl shadow-slate-200/50">
              {/* Card header */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-100 mb-3 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-semibold text-slate-900">
                    CareHub Smart Dispenser
                  </span>
                </div>
                <span className="text-primary-600 font-mono bg-primary-50 px-2 py-0.5 rounded border border-primary-100">
                  CH-2000
                </span>
              </div>

              {/* Clean image */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
                <Image
                  src="/carenovate-landing-frontend/images/device.jpg"
                  alt="CareHub Smart Medication Dispenser"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Facts */}
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                {QUICK_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-2 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <div
                      className={`font-bold text-xs ${
                        fact.accent ? 'text-primary-600' : 'text-slate-900'
                      }`}
                    >
                      {fact.value}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              99.99<span className="text-primary-500">%</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
              Dispensing Accuracy
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              0
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
              Missed Doses
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              &lt;3{' '}
              <span className="text-primary-500 text-base font-bold">Sec</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
              Inspection Export
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              90{' '}
              <span className="text-primary-500 text-base font-bold">Mins</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
              Caregiver Time Saved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}