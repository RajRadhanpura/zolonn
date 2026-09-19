/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import photo1 from '../assets/products/photo1.jpg';
import photo2 from '../assets/products/photo2.jpg';

export default function AluminumRailingRajkot() {
  return (
    <section id="aluminum-railing-rajkot" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
                Rajkot, Gujarat
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Aluminum Railing Manufacturer in Rajkot
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="font-sans text-sm sm:text-md text-gray-800 font-medium leading-relaxed">
                Zolon is an established Aluminum Railing manufacturer in Rajkot known for precision
                engineering, modern aesthetics and long-lasting performance. With advanced manufacturing
                facilities and a skilled team, the company supplies complete railing systems and
                architectural hardware for homes, offices, showrooms and industrial projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans font-semibold text-lg text-gray-900 tracking-tight uppercase">
                Expertise in Aluminum Glass Railing Systems
              </h3>
              <p className="font-sans text-sm sm:text-md text-gray-800 font-medium leading-relaxed">
                Zolon focuses on integrated Aluminum Glass Railing solutions that combine strong aluminum
                profiles with high-quality toughened glass for safety and transparency. Each railing
                system is designed for easy installation, low maintenance and seamless coordination with
                contemporary Indian architecture.
              </p>
            </div>

            {/* Stat Highlight */}
            <div className="flex items-center space-x-6 border-t border-gray-100 pt-8">
              <div>
                <div className="font-sans font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight">
                  1000<span className="text-gold-500">+</span>
                </div>
                <p className="font-sans text-xs tracking-widest text-gray-500 uppercase mt-1 font-semibold">
                  Happy Clients
                </p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <p className="font-sans text-[13px] text-gray-600 font-medium leading-relaxed max-w-xs">
                Trusted across pan india and internationally for aluminum railing and architectural glass systems.
              </p>
            </div>
          </div>

          {/* Right Column: Image Duo */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={photo1}
                alt="Aluminum glass railing system installation in Rajkot"
                className="w-full h-64 object-cover rounded-none border border-gray-200 mt-10"
                referrerPolicy="no-referrer"
              />
              <img
                src={photo2}
                alt="Zolon aluminum railing manufacturer hardware detail"
                className="w-full h-64 object-cover rounded-none border border-gray-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-950 text-white px-6 py-4 border border-gold-500/40 hidden sm:block">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
                  Made in Rajkot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
