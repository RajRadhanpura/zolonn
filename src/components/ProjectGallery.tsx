/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, MapPin, Building, Sparkles } from 'lucide-react';

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
                Global Installations
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Case Studies &amp; Projects
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
          </div>
          <div className="max-w-md">
            <p className="font-sans text-xs text-gray-600 font-light leading-relaxed">
              Witness how top architects and structural glass engineers leverage Zolon's certified Duplex 2205 spigots and luxury brass hydraulic fittings to elevate modern silhouettes.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Cover Photo */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
              </div>

              {/* Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-gold-600 font-bold tracking-widest uppercase">
                    <Building className="w-3.5 h-3.5" />
                    <span className="font-sans font-regular text-[10px]">{project.category}</span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight uppercase">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-light">
                    <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="font-sans font-medium text-black text-[13px]">{project.location}</span>
                  </div>
                  <div className="text-xs font-semibold tracking-wider text-gold-600 flex items-center space-x-1 uppercase group-hover:text-gold-700">
                    <span className="font-sans font-medium text-[11px]">View Case Study</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://zolonhardware.com/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-transparent border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-all duration-300"
          >
            <span>View All Global Projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
