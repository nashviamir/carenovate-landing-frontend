import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  Flag,
  Award,
  GraduationCap,
  RefreshCw,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { BENEFITS } from '@/lib/data';

const ICON_MAP: Record<string, React.ReactNode> = {
  Flag: <Flag className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-[11px] sm:text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Healthcare Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Built on Rigorous{' '}
            <span className="text-primary-600">US Healthcare</span> Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From university research partnerships to domestic manufacturing and
            24/7 live facility support, CareHub was architected so RCFE owners
            sleep peacefully at night.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
                {ICON_MAP[benefit.icon] || <ShieldCheck className="w-5 h-5" />}
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                {benefit.label}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-primary-600">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{benefit.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Human-Centric Banner */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary-600 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Human-Centered Technology</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Giving Caregivers Time Back to Actually Care
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Technology shouldn&apos;t get between your caregivers and your
              residents. By automating the mechanical tasks of pill counting,
              lockboxes, and frantic charting, your team spends their shifts
              doing what matters most: connecting with residents, noticing
              changes, and ensuring human dignity.
            </p>
            <div className="pt-2">
              <Link
                href="#book-demo-section"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-primary-600 hover:bg-primary-700 shadow-md shadow-primary-500/20 hover:-translate-y-0.5 transition-all"
              >
                <span>Schedule a 20-Min Facility Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-full bg-slate-100">
            <Image
              src="/carenovate-landing-frontend/images/care-hero.jpg"
              alt="Compassionate elderly care with senior resident and attentive caregiver"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}