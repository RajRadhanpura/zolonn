/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, CornerRightDown, ChevronLeft, ChevronRight } from 'lucide-react';

import photo1 from '../assets/products/photo1.jpg';
import photo2 from '../assets/products/photo2.jpg';
import photo3 from '../assets/products/photo3.jpg';

const SLIDES = [
  {
    url: photo1,
    title: 'Architectural Facades',
    subtitle: 'Structural Glass Systems'
  },
  {
    url: photo2,
    title: 'Luxury Railings',
    subtitle: 'Duplex 2205 Stainless Fittings'
  },
  {
    url: photo3,
    title: 'Hydraulic Systems',
    subtitle: 'Precision Patch Hardware'
  },
  {
    url: photo1,
    title: 'Minimalist Balustrades',
    subtitle: 'PVD Gold Finish Precision'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

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
      {/* Background Image Slider with Crossfade Animation */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={SLIDES[currentSlide].url}
            alt={SLIDES[currentSlide].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.75, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Cinematic Multi-tier Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white pt-20">
        <div className="max-w-3xl space-y-8">
          {/* Tagline Badge / Accent Bar */}
          <div className="space-y-4">
            <div className="h-1 w-12 bg-gold-500"></div>
            <span className="font-sans text-[12px] tracking-[0.25em] font-medium text-gold-500 uppercase block">
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
              Endless <span className="text-gold-500">Innovation</span>
            </motion.h1>
          </div>

          {/* Description Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-gray-300 font-sans font-medium text-base sm:text-lg leading-relaxed"
          >
            We are a ZOLON ARCHITECTURAL HARDWARE team of young professionals: Design, Supply and
            Build your Dreams of exterior and interiors of your loved Building / Projects.
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
              className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Showcase</span>
              <CornerRightDown className="w-3.5 h-3.5" />
            </button>
            {/* 
            <button
              onClick={scrollToContact}
              className="border-2 border-white/60 hover:border-gold-500 hover:text-gold-400 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all text-center cursor-pointer"
            >
              Request Architectural Specs
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* Slider Controls & Slide Indicators */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-30 flex items-center space-x-6">
        {/* Slide Counter */}
        <div className="hidden sm:flex items-center space-x-2 font-sans text-xs font-bold tracking-widest text-white/80">
          <span className="text-gold-500">0{currentSlide + 1}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/40">0{SLIDES.length}</span>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center space-x-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${currentSlide === idx ? 'w-8 bg-gold-500' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 border border-white/20 hover:border-gold-500 hover:text-gold-500 hover:bg-black/40 text-white/80 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 border border-white/20 hover:border-gold-500 hover:text-gold-500 hover:bg-black/40 text-white/80 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Animated Scroll Down Cue */}
      <div className="absolute bottom-8 left-8 sm:left-12 z-30 flex items-center space-x-3">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          onClick={scrollToProducts}
          className="w-8 h-8 border border-white/20 flex items-center justify-center cursor-pointer hover:border-gold-500 hover:text-gold-500 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-white/60 hover:text-gold-500 transition-colors" />
        </motion.div>
        <span className="font-sans text-[9px] tracking-[0.3em] text-white/40 uppercase hidden sm:inline-block">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
