/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Compass, Hammer, Sparkles, Award, Scale } from 'lucide-react';

export default function WhyZolon() {
  const points = [
    {
      icon: ShieldAlert,
      title: 'Duplex 2205 Metallurgical Superiority',
      description: 'Twice the yield strength of ordinary 316 stainless steel. Standardized in all glass spigots to combat extreme tension stress and high salt-spray coastal environments without rusting.'
    },
    {
      icon: Scale,
      title: '0.1mm CNC Micro-Forging',
      description: 'Forged at thousands of tons of pressure and micro-CNC milled to eliminate loose tolerances, ensuring heavy glass doors and structural partitions glide with zero vibration.'
    },
    {
      icon: Sparkles,
      title: 'Titanium PVD Molecular Finish',
      description: 'Physical Vapor Deposition bonds pure gold-titanium alloys directly onto the molecular level of our metals. Guaranteed never to chip, flake, or tarnish over decades of use.'
    },
    {
      icon: Compass,
      title: 'Total AutoCAD & BIM Integration',
      description: 'We supply custom Revit models, AutoCAD spec blocks, and accurate glass-drilling template sheets to eliminate contractor guesswork on active job sites.'
    },
    {
      icon: Hammer,
      title: '500,000+ Cycle Longevity Testing',
      description: 'Our hydraulic hinges, glass door rollers, and heavy deadbolt lock cylinders undergo millions of continuous stress cycles to earn premium commercial grade-1 certifications.'
    },
    {
      icon: Award,
      title: 'Bespoke Architectural Engineering',
      description: 'Tailored consulting to meet local building safety codes for high-load glass barriers, commercial handrails, and luxury master bath frameless setups.'
    }
  ];

  return (
    <section id="why-zolon" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            The Golden Standard of Quality
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Why Architects Specify Zolon
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Every clamp, lever, hinge, and spigot is engineered with zero compromises, 
            blending modern minimalism with structural invincibility.
          </p>
        </div>

        {/* Six Column Bento-grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border-r border-b border-gray-200 p-8 hover:bg-gold-50/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 rounded-none shrink-0 border border-gold-500/30">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm text-gray-900 tracking-tight uppercase">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 font-light leading-relaxed">
                    {point.description}
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
