/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TIMELINE } from '../data';
import { Compass, Sparkles } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <Compass className="w-4 h-4 text-gold-500" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
              How We Work
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Our Precision Blueprint
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            From design specifications to molecular coatings, we maintain a flawless sequence of design, manufacturing, and stress testing.
          </p>
        </div>

        {/* Timeline Grid (Desktop row, Mobile list) */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gray-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="space-y-6 group text-center lg:text-left">
                {/* Timeline Node Badge with Step Number */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-16 h-16 rounded-none bg-white border border-gray-200 flex items-center justify-center text-lg font-sans font-bold text-gray-400 group-hover:text-white group-hover:bg-gold-500 group-hover:border-gold-500 shadow-sm transition-all duration-300">
                    {item.step}
                  </div>
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <span className="font-sans text-[10px] tracking-wider text-gold-600 font-bold uppercase block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-sans font-extrabold text-base text-gray-900 tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Seal Banner below */}
        <div className="mt-20 border border-gold-300 bg-gold-50/20 p-8 rounded-none text-center max-w-4xl mx-auto space-y-3">
          <div className="flex justify-center">
            <Sparkles className="w-6 h-6 text-gold-500" />
          </div>
          <h4 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-widest">
            Flawless Compliance Guaranteed
          </h4>
          <p className="font-sans text-xs text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            All Zolon structural railings, spigots, and glass standoff anchors are certified by independent testing labs to comply with the American National Standards Institute (ANSI) and local high-rise wind and barrier safety code regulations.
          </p>
        </div>

      </div>
    </section>
  );
}
