/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Loads every logo in src/assets/client at build time — drop a new file in that
// folder and it will show up here automatically, named from the filename.
const logoModules = import.meta.glob<{ default: string }>('../assets/client/*.png', {
  eager: true
});

function toName(path: string) {
  const fileName = path.split('/').pop() ?? '';
  return fileName.replace(/\.png$/i, '');
}

const CLIENTS = Object.entries(logoModules)
  .map(([path, mod]) => ({ name: toName(path), logo: mod.default }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function ClientMarquee() {
  // Duplicated so the strip can loop seamlessly.
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-12 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-4 mb-10">
        <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
          Trusted Nationwide
        </span>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
          Our Valuable Clients
        </h2>
        <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
        <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
          From leading real estate developers to industrial conglomerates, ZOLON is the trusted
          hardware partner behind premium residential and commercial projects across India.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {track.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 px-8 sm:px-12"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 sm:h-18 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
