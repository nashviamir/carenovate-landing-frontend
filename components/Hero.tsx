import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';

const BULLETS = [
  'Zero memory-based logging',
  'Real-time pre-dose alerts',
  '1-click eMAR audits',
  'Multi-shape pill handling',
];

export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="chip-main">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span>Next-Gen RCFE &amp; Assisted Living Medication Security</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-b-32 sm:text-b-40 lg:text-b-48 text-brandGrey-500 tracking-tight leading-[1.15] text-balance">
              Never Face Medication{' '}
              <span className="text-primary-500">
                Guesswork or Audit Anxiety
              </span>{' '}
              in Your Facility Again.
            </h1>

            <p className="text-r-18 text-brandGrey-400 mt-6 max-w-xl mx-auto lg:mx-0">
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

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="btn-primary-lg group w-full sm:w-auto"
              >
                <span>Book a Live Facility Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/features"
                className="btn-outline-lg w-full sm:w-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Smart Dispenser</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — Device image (clean, no labels) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-card bg-brandGrey-50 aspect-[4/3] border border-brandGrey-50 shadow-card">
              <Image
                src="/carenovate-landing-frontend/images/device.jpg"
                alt="CareHub Smart Medication Dispenser"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}