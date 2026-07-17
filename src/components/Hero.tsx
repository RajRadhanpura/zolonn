/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CornerRightDown, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920"
          alt="Luxury Architecture Facade with Structural Glass"
          className="w-full h-full object-cover object-center opacity-75 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic multi-tier gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-8">
            {/* Tagline Badge / Accent Bar */}
            <div className="space-y-4">
              <div className="h-1 w-12 bg-gold-500"></div>
              <span className="font-sans text-[10px] tracking-[0.25em] font-extrabold text-gold-500 uppercase block">
                ENGINEERING TIMELESS EXCELLENCE
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none uppercase"
              >
                ARCHITECTURAL <span className="text-gold-500">EXCELLENCE</span> <br />
                IN EVERY DETAIL
              </motion.h1>
            </div>

            {/* Description Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-gray-300 font-sans font-light text-base sm:text-lg leading-relaxed"
            >
              Engineered with heavy-duty Duplex 2205 Stainless Steel and premium brass. 
              Our architectural railings and hydraulic glass fittings are custom-crafted 
              for high-end residential estates and pristine coastal projects.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-4"
            >
              <button
                onClick={scrollToProducts}
                className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <span>Explore Showcase</span>
                <CornerRightDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={scrollToContact}
                className="border-2 border-white/60 hover:border-gold-500 hover:text-gold-400 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all text-center"
              >
                Request Architectural Specs
              </button>
            </motion.div>
          </div>

          {/* Quick Stats Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:block bg-black/45 backdrop-blur-lg border border-white/10 p-8 rounded-sm space-y-6"
          >
            <div className="border-b border-white/10 pb-4">
              <span className="font-sans text-[10px] tracking-widest text-gold-500 font-bold uppercase">
                Premium Standards
              </span>
              <h3 className="font-sans font-bold text-xl text-white mt-1">Product Certification</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-100">Duplex 2205 Certified</h4>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Maximum corrosion resistance for coastal projects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-100">500k Cycle Load Test</h4>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Hydraulic hinges and locksets guaranteed for heavy commercial traffic.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-100">PVD Molecular Coating</h4>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Ultra-tough titanium finish that will never peel or tarnish.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Scroll Down Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[0.3em] text-white/40 uppercase mb-2">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          onClick={scrollToProducts}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-gold-500 hover:text-gold-500 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-white/60 hover:text-gold-500 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
