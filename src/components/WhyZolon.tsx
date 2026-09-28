/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Compass, Hammer, Sparkles, Award, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WHY_ZOLON_POINTS = [
  {
    icon: ShieldAlert,
    title: 'Heavy-Duty & Reliable',
    description: 'Built from premium-grade materials to withstand daily wear, heavy loads, and demanding site conditions, so every fitting performs reliably for years without failure.'
  },
  {
    icon: Sparkles,
    title: 'Modern Architectural Design',
    description: 'Clean lines and a contemporary aesthetic that complement modern interiors and facades, helping architects and designers achieve a refined, minimalist look.'
  },
  {
    icon: Hammer,
    title: 'Timely Dispatch & Delivery',
    description: 'A streamlined production and logistics process ensures orders are dispatched and delivered on schedule, keeping your project timelines on track.'
  },
  {
    icon: Compass,
    title: 'Complete Architectural Solutions',
    description: 'From aluminium railings and glass fittings to slim partition systems, Zolon offers a comprehensive range under one roof.'
  },
  {
    icon: Scale,
    title: 'Project & Technical Support',
    description: 'Our team provides hands-on technical guidance and on-ground project support, helping architects, contractors and installers get every specification right.'
  },
  {
    icon: Award,
    title: 'Customisation Capability',
    description: 'Tailored finishes, dimensions, and configurations to match unique project requirements, delivering fittings that fit your exact design intent.'
  }
];

export default function WhyZolon() {
  const points = WHY_ZOLON_POINTS.slice(0, 3);

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
          <p className="font-sans text-md sm:text-md text-gray-800 font-medium leading-relaxed">
            Every clamp, lever, hinge, and spigot is engineered with zero compromises,
            blending modern minimalism with structural invincibility.
          </p>
        </div>

        {/* Three Column Bento-grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200">
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
                  <h3 className="font-sans font-semibold text-md text-gray-900 tracking-tight uppercase">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[14px] text-gray-800 font-medium leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Know More CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/why-zolon"
            className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Know More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
