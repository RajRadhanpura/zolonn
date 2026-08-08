/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { PROJECTS } from '../data';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Projects | Zolon Hardware"
        description="Explore ZOLON Hardware's global installations — glass railings, structural fittings, and luxury hardware delivered for high-end residential and commercial projects worldwide."
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
            Global Installations
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Projects
          </h1>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-5" />
        </div>
      </section>

      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-gray-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Photo-only Grid Gallery */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
