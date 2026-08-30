/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Compass, Briefcase, Award, Building2 } from 'lucide-react';

export default function ClientMarquee() {
  const clients = [
    { name: 'Quality Craftsmanship', icon: Compass },
    { name: 'Innovative Designs', icon: Building2 },
    { name: 'Trusted Solutions', icon: Award },
    { name: 'Expert Installation', icon: ShieldCheck },
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-sans text-[10px] tracking-[0.3em] text-gold-600 font-bold uppercase mb-8">
          Our Valuable Clients
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 hover:opacity-100 hover:text-gold-500 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-gold-500 transition-colors" />
                <span className="font-sans font-bold text-xs tracking-widest text-gray-500 uppercase group-hover:text-gray-900 transition-colors">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
