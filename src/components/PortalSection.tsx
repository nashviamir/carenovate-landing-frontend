'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

import { getIcon } from './Icon';
import InlineMarkup from './InlineMarkup';
import type { PortalBlock } from '@/payload-types';
import { asMedia } from '@/lib/media';

export default function PortalSection({ data }: { data: PortalBlock }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const SCREENS = data.screens ?? [];
  const activeScreen = SCREENS[activeIndex];
  const activeImage = asMedia(activeScreen?.image);

  if (!activeScreen) return null;

  return (
    <section id="portal" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="chip-main">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>{data.intro.chip}</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            <InlineMarkup text={data.intro.heading} />
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            {data.intro.description}
          </p>
        </div>

        {/* Browser frame with tabs */}
        <div className="rounded-card bg-white border border-brandGrey-50 shadow-card overflow-hidden">
          {/* Browser-like top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-brandGrey-50">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-brandRed-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-brandOrange-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-brandGreen-500/70" />
              </div>
              <span className="text-m-12 text-brandGrey-300 font-mono pl-2 truncate hidden sm:inline">
                {data.urlPrefix}{activeScreen.path}
              </span>
            </div>
            <div className="hidden sm:inline-flex chip-success flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brandGreen-500" />
              <span>{data.liveLabel}</span>
            </div>
          </div>

          {/* Tabs row — with icons */}
          <div className="flex items-center gap-1 px-3 sm:px-4 py-2 border-b border-brandGrey-50 overflow-x-auto">
            {SCREENS.map((screen, idx) => {
              const isActive = activeIndex === idx;
              const Icon = getIcon(screen.icon) ?? FileText;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-m-12 transition-all ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-brandGrey-400 hover:text-brandGrey-500 hover:bg-brandGrey-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{screen.tab}</span>
                </button>
              );
            })}
          </div>

          {/* Screenshot — 16:9 with subtle hover zoom */}
          <div className="relative bg-brandGrey-50 aspect-video overflow-hidden group">
            {activeImage?.url && (
              <Image
                key={activeImage.url}
                src={activeImage.url}
                alt={`CareHub Portal — ${activeScreen.label}`}
                fill
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.015]"
                priority
              />
            )}
          </div>

          {/* Caption strip */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-brandGrey-50">
            <div>
              <div className="text-b-14 text-brandGrey-500">
                {activeScreen.label}
              </div>
              <div className="text-r-12 text-brandGrey-300 mt-0.5">
                {activeScreen.caption}
              </div>
            </div>
            <span className="text-m-10 text-primary-500 uppercase tracking-wider">
              {activeIndex + 1} / {SCREENS.length}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={data.cta.href}
            className="btn-primary-lg group inline-flex"
          >
            <span>{data.cta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-r-12 text-brandGrey-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brandGreen-500" />
            <span>{data.note}</span>
          </span>
        </div>
      </div>
    </section>
  );
}