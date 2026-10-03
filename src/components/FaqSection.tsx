'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

import InlineMarkup from './InlineMarkup';
import type { FaqBlock } from '@/payload-types';

export default function FaqSection({ data }: { data: FaqBlock }) {
  const FAQS = data.items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-brandGrey-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="chip-main">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{data.intro.chip}</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            <InlineMarkup text={data.intro.heading} />
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            {data.intro.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-card bg-white border border-brandGrey-50 shadow-card overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-brandGrey-50/50 transition-colors cursor-pointer"
                >
                  <span
                    className={`text-b-16 transition-colors ${
                      isOpen ? 'text-primary-500' : 'text-brandGrey-500'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 text-primary-500'
                        : 'text-brandGrey-300'
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      id={`faq-answer-${index}`}
                      className="px-5 sm:px-6 pb-5 pt-1 border-t border-brandGrey-50"
                    >
                      <p className="text-r-14 text-brandGrey-400 leading-relaxed pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className="mt-10 rounded-card bg-white border border-brandGrey-50 shadow-card p-6 sm:p-8 text-center">
          <h3 className="text-b-18 text-brandGrey-500">
            {data.cta.heading}
          </h3>
          <p className="text-r-14 text-brandGrey-400 mt-2 max-w-xl mx-auto">
            {data.cta.description}
          </p>
          <div className="mt-5">
            <Link
              href={data.cta.button.href}
              className="btn-primary group inline-flex"
            >
              <span>{data.cta.button.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}