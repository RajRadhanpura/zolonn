/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CatalogueModal from '../components/CatalogueModal';

interface CatalogueItem {
  key: string;
  title: string;
  description: string;
}

const CATALOGUES: CatalogueItem[] = [
  {
    key: 'aluminium-railing-system',
    title: 'Aluminium Railing System',
    description: 'Complete range of aluminium glass railing systems, profiles and fittings.',
  },
  {
    key: 'architectural-hardware',
    title: 'Architectural Hardware',
    description: 'Premium architectural hardware fittings for doors, windows and interiors.',
  },
  {
    key: 'slim-partitions-systems',
    title: 'Slim Partitions Systems',
    description: 'Sleek slim-profile partition systems for modern interior spaces.',
  },
];

export default function CataloguePage() {
  const [activeCatalogue, setActiveCatalogue] = useState<CatalogueItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Download Catalogue | Zolon Hardware"
        description="Download ZOLON Hardware product catalogues — Aluminium Railing System, Architectural Hardware, and Slim Partitions Systems."
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
            Product Literature
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Download Catalogue
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest text-gray-500 hover:text-gold-600 uppercase font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>

      {/* Catalogue List */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATALOGUES.map((cat) => (
          <div
            key={cat.key}
            className="flex flex-col border border-gray-200 bg-white p-8 space-y-5 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gold-50 border border-gold-200">
              <FileText className="w-5 h-5 text-gold-600" />
            </div>
            <h2 className="font-sans font-bold text-xl text-gray-900 tracking-tight">
              {cat.title}
            </h2>
            <p className="font-sans text-sm text-gray-600 leading-relaxed flex-1">
              {cat.description}
            </p>
            <button
              onClick={() => setActiveCatalogue(cat)}
              className="flex items-center justify-between gap-3 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-wider uppercase px-4 py-3 transition-all"
            >
              <span>Get Catalogue Link</span>
              <Download className="w-4 h-4 shrink-0" />
            </button>
          </div>
        ))}
      </section>

      <Footer />

      <CatalogueModal
        open={activeCatalogue !== null}
        onClose={() => setActiveCatalogue(null)}
        catalogueKey={activeCatalogue?.key}
        catalogueTitle={activeCatalogue?.title}
      />
    </div>
  );
}
