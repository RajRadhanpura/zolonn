/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { STATS } from '../data';
import { Percent, Ruler, Calendar, Award } from 'lucide-react';

export default function StatsBanner() {
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0: return Calendar;
      case 1: return Award;
      case 2: return Ruler;
      default: return Percent;
    }
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gray-950 text-white">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920"
          alt="Modern steel and glass structural skyscraper facade"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-gray-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {STATS.map((stat, idx) => {
            const IconComponent = getIconForIndex(idx);
            return (
              <div
                key={idx}
                className="text-center space-y-3 group border-r last:border-0 border-white/10 pr-4 last:pr-0"
              >
                {/* Visual Icon Accent */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-white/10 mb-2 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <IconComponent className="w-5 h-5 text-gold-500" />
                </div>

                {/* Stat Big Number */}
                <div className="font-sans font-bold pt-4 text-4xl sm:text-5xl text-white group-hover:text-gold-500 transition-colors tracking-tight">
                  {stat.value}
                </div>

                {/* Label and Sublabel */}
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-xs pt-3 tracking-wider text-gray-100 uppercase">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-[12px] text-white pt-3 leading-normal font-light">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
