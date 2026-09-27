import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';

const BULLETS = [
  'Zero memory-based logging',
  'Real-time pre-dose alerts',
  '1-click eMAR audits',
  'Multi-shape pill handling',
];

const QUICK_FACTS = [
  { value: '28 Slots', label: 'Multi-Shape Pills', accent: false },
  { value: '36 Hours', label: 'Battery Backup', accent: true },
  { value: '100%', label: 'Audit Logged', accent: true },
];

const METRICS = [
  { value: '99.99', suffix: '%', label: 'Dispensing Accuracy' },
  { value: '0', suffix: '', label: 'Missed Doses' },
  { value: '<3', suffix: 'Sec', label: 'Inspection Export' },
  { value: '90', suffix: 'Mins', label: 'Caregiver Time Saved' },
];

export default function Hero() {
  return (
    <section className="bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="chip-main">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span>Next-Gen RCFE &amp; Assisted Living Medication Security</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-b-32 sm:text-b-40 lg:text-b-48 xl:text-b-56 text-brandGrey-500 tracking-tight leading-[1.15] max-w-[40rem] mx-auto lg:mx-0">
              Never Face Medication{' '}
              <span className="text-primary-500">
                Guesswork or Audit Anxiety
              </span>{' '}
              in Your Facility Again.
            </h1>

            <p className="text-r-18 text-brandGrey-400 max-w-xl mx-auto lg:mx-0 mt-6">
              Built for{' '}
              <strong className="text-brandGrey-500">
                Assisted Living &amp; RCFE operators
              </strong>
              . Every dose, note, and task is{' '}
              <strong className="text-primary-500">
                automatically logged, verified, and audit-ready
              </strong>
              .
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-8 max-w-xl mx-auto lg:mx-0 text-left">
              {BULLETS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-r-14 text-brandGrey-500">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs — both same size */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="#book-demo-section"
                className="btn-primary-lg group w-full sm:w-auto"
              >
                <span>Book a Live Facility Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="btn-outline-lg w-full sm:w-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Smart Dispenser</span>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="card-base">
              {/* Card header */}
              <div className="flex items-center justify-between px-1 py-1.5 border-b border-brandGrey-50 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brandGreen-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-brandGreen-500" />
                  </span>
                  <span className="text-m-12 text-brandGrey-500">
                    CareHub Smart Dispenser
                  </span>
                </div>
                <span className="text-m-12 text-primary-500 font-mono bg-primary-50 px-2 py-0.5 rounded-chip border border-primary-100">
                  CH-2000
                </span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-card-sm bg-brandGrey-50 aspect-[4/3]">
                <Image
                  src="/images/device.jpg"
                  alt="CareHub Smart Medication Dispenser"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                {QUICK_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-2 rounded-card-sm bg-brandGrey-50 border border-brandGrey-100"
                  >
                    <div
                      className={`text-b-14 ${
                        fact.accent ? 'text-primary-500' : 'text-brandGrey-500'
                      }`}
                    >
                      {fact.value}
                    </div>
                    <div className="text-r-10 text-brandGrey-300 mt-0.5">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <div className="mt-14 pt-8 border-t border-brandGrey-50 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <div className="text-b-32 text-brandGrey-500">
                {metric.value}
                {metric.suffix && (
                  <span className="text-b-18 text-primary-500 ml-1">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-r-12 text-brandGrey-300 mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}