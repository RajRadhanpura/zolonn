/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Factory, Users2, HardHat } from 'lucide-react';

const POINTS = [
  {
    icon: Factory,
    text: 'In-house design, tooling and production for end-to-end control over Aluminum Railing quality.'
  },
  {
    icon: HardHat,
    text: 'Experienced team familiar with balcony railing, staircase railing, terrace railing and commercial glass railing requirements.'
  },
  {
    icon: Users2,
    text: 'Support for architects, interior designers, builders and homeowners in Rajkot seeking reliable Aluminum Glass Railing solutions.'
  }
];

export default function WhyChooseRailing() {
  return (
    <section id="why-choose-railing" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            Built On Trust
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Why Choose Zolon for Aluminum Railing
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white">
          {POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="border-r border-b border-gray-200 p-8 hover:bg-gold-50/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 rounded-none shrink-0 border border-gold-500/30">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <p className="font-sans text-[14px] text-gray-800 font-light leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
