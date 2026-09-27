'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '@/lib/data';

export default function FaqSection() {
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
            <span>Answers for Facility Administrators</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            Frequently Asked{' '}
            <span className="text-primary-500">Questions</span>
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            Everything you need to know about implementing CareHub in your
            Assisted Living or RCFE community.
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
            Have a specific facility or pharmacy question?
          </h3>
          <p className="text-r-14 text-brandGrey-400 mt-2 max-w-xl mx-auto">
            Our clinical systems team is available to review your facility&apos;s
            medication schedules, pharmacy pack types, and floor plans.
          </p>
          <div className="mt-5">
            <Link
  href="/#book-demo-section"
  className="btn-primary group inline-flex"
>
              <span>Schedule a Clinical Q&amp;A Walkthrough</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}