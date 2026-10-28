import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '../../data/faqsData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything You Need To Know"
          subtitle="Clear answers to common questions about admissions, language tests, visa norms, and post-study work rules."
          align="center"
        />

        <div className="mt-10 space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-navy-900 text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-gold-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

