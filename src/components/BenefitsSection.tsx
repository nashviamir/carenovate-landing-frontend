import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

import { getIcon } from './Icon';
import InlineMarkup from './InlineMarkup';
import type { BenefitsBlock } from '@/payload-types';
import { asMedia } from '@/lib/media';

export default function BenefitsSection({
  data,
}: {
  data: BenefitsBlock;
}) {
  const BENEFITS = data.items ?? [];
  const bannerImage = asMedia(data.banner.image);
  return (
    <section id="benefits" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="chip-main">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{data.intro.chip}</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            <InlineMarkup text={data.intro.heading} />
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            {data.intro.description}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit, idx) => {
            const Icon = getIcon(benefit.icon) ?? ShieldCheck;
            return (
              <div
                key={idx}
                className="group p-6 rounded-card bg-white border border-brandGrey-50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-card-sm bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-b-16 text-brandGrey-500">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-r-14 text-brandGrey-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlight footer */}
                <div className="mt-4 pt-3 border-t border-brandGrey-50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                  <span className="text-m-12 text-primary-600">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Human-Centric Banner */}
        <div className="mt-14 rounded-card overflow-hidden border border-brandGrey-50 bg-white shadow-card grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Text side */}
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-m-12 text-primary-500 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.banner.eyebrow}</span>
            </div>

            <h3 className="text-b-24 text-brandGrey-500 leading-tight">
              {data.banner.heading}
            </h3>

            <p className="mt-4 text-r-16 text-brandGrey-400 leading-relaxed">
              {data.banner.body}
            </p>

            <div className="mt-6">
              <Link
                href={data.banner.cta.href}
                className="btn-primary group inline-flex"
              >
                <span>{data.banner.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="relative min-h-[280px] lg:min-h-full bg-brandGrey-50">
            {bannerImage?.url && (
              <Image
                src={bannerImage.url}
                alt={bannerImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}