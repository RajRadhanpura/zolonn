/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'What is an Aluminum Glass Railing system?',
    answer: 'An Aluminum Glass Railing system combines extruded aluminum profiles with toughened safety glass panels to create a strong, transparent barrier for balconies, staircases and terraces. Zolon engineers each profile for easy installation and long-term durability.'
  },
  {
    question: 'Do you manufacture custom railing sizes for Rajkot projects?',
    answer: 'Yes. Zolon fabricates aluminum railing profiles and glass panels to match your exact balcony, staircase and terrace dimensions, ensuring a precise fit for residential, commercial and industrial sites across Rajkot and Gujarat.'
  },
  {
    question: 'How durable is Zolon Aluminum Railing?',
    answer: 'Our aluminum profiles are corrosion-resistant, low-maintenance and finished for long-lasting performance in Indian climate conditions, making them suitable for both indoor and outdoor installations.'
  },
  {
    question: 'Do you work with architects, builders and interior designers?',
    answer: 'Absolutely. We regularly support architects, interior designers, builders and homeowners with specification guidance, product samples and on-site installation coordination for Aluminum Glass Railing projects.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'Zolon is based in Rajkot and serves clients throughout Gujarat, supplying complete railing systems and architectural hardware for homes, offices, showrooms and industrial projects.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            Common Questions
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-none bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer group"
                >
                  <span className="flex items-start space-x-3">
                    <HelpCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span className="font-sans font-semibold text-sm sm:text-md text-gray-900 tracking-tight group-hover:text-gold-600 transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center border border-gray-200 text-gray-500 group-hover:border-gold-500 group-hover:text-gold-600 transition-colors ml-4">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[14px] text-gray-700 font-light leading-relaxed px-6 pl-[3.25rem] pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
