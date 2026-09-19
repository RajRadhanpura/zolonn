/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
        <div className="h-1 w-12 bg-gold-500 mx-auto" />
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Ready to Upgrade Your Space with{' '}
          <span className="text-gold-500">Aluminum Glass Railing?</span>
        </h2>
        <p className="font-sans text-sm sm:text-md text-gray-300 font-medium max-w-xl mx-auto leading-relaxed">
          Get in touch with Zolon&rsquo;s engineering desk in Rajkot for a free consultation, custom
          specifications and a quote tailored to your project.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 pt-2">
          <Link
            to="/contact-us"
            className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919033513331"
            className="border-2 border-white/20 hover:border-gold-500 hover:text-gold-400 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+91-903 351 3331</span>
          </a>
        </div>
      </div>
    </section>
  );
}
