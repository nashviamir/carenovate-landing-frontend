'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/lib/data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers for Facility Administrators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked{' '}
            <span className="carehub-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about implementing CareHub in your Assisted Living or RCFE community.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 hover:text-primary-700 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
          <h4 className="font-bold text-slate-900 text-base">
            Have a specific facility or pharmacy question?
          </h4>
          <p className="text-xs sm:text-sm text-slate-500">
            Our clinical systems team is available to review your facility's medication schedules, pharmacy pack types, and floor plans.
          </p>
          <div className="pt-2">
            <a
              href="#book-demo-section"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              <span>Schedule a Clinical Q&A Walkthrough →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}