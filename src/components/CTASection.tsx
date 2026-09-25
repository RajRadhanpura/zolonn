/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2 } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-white/10 md:divide-y-0 md:divide-x">
          {/* Ready to Upgrade */}
          <div className="text-center space-y-6 px-4 pb-12 md:pb-0 md:pr-12">
            <div className="h-1 w-12 bg-gold-500 mx-auto" />
            <h2 className="font-sans font-bold text-3xl text-white tracking-tight leading-tight">
              Ready to Upgrade Your Space with{' '}
              <span className="text-gold-500">Aluminum Glass Railing?</span>
            </h2>
            <p className="font-sans text-sm text-gray-300 font-medium max-w-md mx-auto leading-relaxed">
              Get in touch with Zolon&rsquo;s engineering desk in Rajkot for a free consultation,
              custom specifications and a quote tailored to your project.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Export Inquiry */}
          <div className="text-center space-y-6 px-4 pt-12 md:pt-0 md:pl-12">
            <div className="h-1 w-12 bg-gold-500 mx-auto" />
            <h2 className="font-sans font-bold text-3xl text-white tracking-tight leading-tight">
              Sourcing Railing Systems for{' '}
              <span className="text-gold-500">Your Country?</span>
            </h2>
            <p className="font-sans text-sm text-gray-300 font-medium max-w-md mx-auto leading-relaxed">
              Zolon supplies architectural hardware and railing systems to distributors and
              contractors worldwide, with bulk pricing and export documentation support.
            </p>
            <a
              href="mailto:info@zolonhardware.com?subject=Export%20Inquiry"
              className="inline-flex border-2 border-white/20 hover:border-gold-500 hover:text-gold-400 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all items-center justify-center space-x-2 cursor-pointer"
            >
              <Globe2 className="w-4 h-4" />
              <span>Export Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
