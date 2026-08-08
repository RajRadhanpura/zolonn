/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { WHY_ZOLON_POINTS } from '../components/WhyZolon';

export default function WhyZolonPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Why Zolon | The Golden Standard of Quality"
        description="Discover why architects specify Zolon: Duplex 2205 metallurgical superiority, CNC micro-forging, titanium PVD finishes, and rigorous 500,000+ cycle longevity testing."
      />
      <Header />

      {/* Page Banner */}
      <section className="relative h-[42vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_45%)]" />
        </div>

        <div className="relative z-10 text-center px-6 pt-16">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block mb-3">
            The Golden Standard of Quality
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Why Zolon
          </h1>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-5" />
        </div>
      </section>

      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Link
            to="/"
            state={{ scrollTarget: 'why-zolon' }}
            className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-gray-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="font-sans text-md sm:text-md text-gray-800 font-light leading-relaxed">
              Every clamp, lever, hinge, and spigot is engineered with zero compromises,
              blending modern minimalism with structural invincibility. Here is the full
              engineering standard behind every piece of Zolon hardware.
            </p>
          </div>

          {/* Full Six Column Bento-grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
            {WHY_ZOLON_POINTS.map((point, idx) => {
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
                    <p className="font-sans text-[14px] text-gray-800 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-16">
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Talk to Our Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
