/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'What materials do you use for your architectural hardware?',
    answer: 'We manufacture premium architectural hardware using high-quality materials such as stainless steel, aluminium, brass and other durable alloys. Our hardware is designed to offer excellent strength, corrosion resistance, long-lasting performance and refined aesthetics — ideal for residential, commercial and architectural applications.'
  },
  {
    question: 'Do you provide installation support?',
    answer: 'Yes. ZOLON Architectural Hardware provides professional product guidance and technical support for architects, designers, dealers, contractors and installers. Our team assists with product selection, application requirements and installation guidance to ensure reliable performance across every project.'
  },
  {
    question: 'What is your warranty policy?',
    answer: 'We provide warranty coverage on selected architectural hardware products, subject to the specific product and application. Our products are manufactured with a focus on durability, precision and long-term performance. Contact our team for model-specific warranty terms and product support.'
  },
  {
    question: 'What types of architectural hardware do you manufacture?',
    answer: 'ZOLON Architectural Hardware offers a comprehensive range of architectural hardware solutions, including door hardware, glass hardware, shower hardware, handles, hinges, fittings, accessories and other architectural components. Our products are suitable for residential, commercial, hospitality and architectural projects.'
  },
  {
    question: 'Do you offer custom finishes and customised hardware?',
    answer: 'Yes. We offer a range of premium finishes and customised solutions to meet specific architectural and design requirements. Depending on the product, options may include customised colours, surface finishes, sizes and configurations, allowing our hardware to complement different interior and architectural styles.'
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
                      <p className="font-sans text-[14px] text-gray-700 font-medium leading-relaxed px-6 pl-[3.25rem] pb-6">
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
