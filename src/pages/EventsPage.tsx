/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, PlayCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Events | Zolon Hardware"
        description="Zolon Hardware showcases its latest innovations in architectural hardware and railing systems at leading industry exhibitions, including Acetech Mumbai."
      />
      <Header />

      {/* Page Banner */}
      <section className="relative h-[46vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_45%)]" />
        </div>

        <div className="relative z-10 text-center px-6 pt-16">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block mb-3">
            Industry Exhibitions &amp; Engagements
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Events
          </h1>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-5" />
        </div>
      </section>

      <main className="pb-24">
        <div className="max-w-5xl mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-gray-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Intro Copy */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            At Zolon Hardware, we actively participate in leading industry events and exhibitions to showcase our latest innovations in architectural hardware and railing systems. These platforms allow us to connect with architects, builders, and industry professionals while presenting our high-quality products and solutions.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Our presence at exhibitions like Acetech helps us stay aligned with modern design trends and evolving customer needs. Through these events, we demonstrate our commitment to innovation, quality, and excellence in every product we offer.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Stay connected with us to explore our upcoming events and discover how Zolon Hardware continues to shape the future of architectural solutions.
          </p>
        </section>

        {/* Featured Event */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
                  Featured Event
                </span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Acetech Exhibition 2022
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <div className="flex items-center space-x-2 text-xs text-gray-500 font-light">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="font-sans font-medium text-gray-800 text-[13px]">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* YouTube Embed */}
            <div className="relative w-full aspect-video overflow-hidden border border-gray-200 bg-black shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/n7JxJAvO7yI"
                title="Zolon Hardware — Acetech Exhibition 2022"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500 font-sans">
              <PlayCircle className="w-4 h-4 text-gold-500 shrink-0" />
              <a
                href="https://www.youtube.com/watch?v=n7JxJAvO7yI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-600 transition-colors underline underline-offset-2"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Our participation in such exhibitions reflects our dedication to quality, innovation, and building long-term relationships with clients and partners. Stay tuned for more updates on our upcoming events and industry engagements.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pt-4 pb-4">
          <div className="border-t border-gray-200 pt-12 flex flex-col items-center text-center space-y-6">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Meet Us at Our Next Event
            </h2>
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-2xl">
              Want to connect with our team at an upcoming exhibition, or discuss a project in the meantime?
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
