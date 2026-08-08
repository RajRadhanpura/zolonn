/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, Calendar, Globe2, Users, Quote, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import photo1 from '../assets/products/photo1.jpg';
import photo2 from '../assets/products/photo2.jpg';
import photo3 from '../assets/products/photo3.jpg';

const ABOUT_STATS = [
  { icon: Calendar, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '6K+', label: 'Happy Customers' },
  { icon: Award, value: '100+', label: 'Range of Products' },
  { icon: Globe2, value: '10+', label: 'Countries Covered' }
];

export default function AboutZolonPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Zolon | Who We Are"
        description="ZOLON is an innovative manufacturer of railing systems, architectural hardware, and bathroom accessories, delivering symmetrical elegance and aesthetic resonance to projects worldwide."
      />
      <Header />

      {/* Page Banner */}
      <section className="relative h-[46vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={photo2}
            alt="Zolon Architectural Hardware"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-black" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_45%)]" />
        </div>

        <div className="relative z-10 text-center px-6 pt-16">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block mb-3">
            Who We Are
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            About Zolon
          </h1>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-5" />
        </div>
      </section>

      <main className="pb-24">
        <div className="max-w-6xl mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-gray-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Who We Are */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Who We Are
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              Delivering Symmetrical Elegance for Aesthetic Resonance.
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              ZOLON has been an innovative and professional company engaged in research, manufacture and marketing of fittings for railing systems, architectural hardware and bathroom accessories. ZOLON provides fittings of high quality and provides consulting services to the architectural industries. Through many years since development, ZOLON achieves a good reputation in Construction Industry and Hardware Industry.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={photo1}
                alt="ZOLON Architectural Hardware Craftsmanship"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-24 overflow-hidden bg-gray-950 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={photo3}
              alt="Zolon manufacturing facility"
              className="w-full h-full object-cover object-center opacity-30 select-none scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-gray-950" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-14 space-y-3">
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block">
                Our Stats
              </span>
              <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {ABOUT_STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="text-center space-y-3 group border-r last:border-0 border-white/10 pr-4 last:pr-0"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-white/10 mb-2 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-colors">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <div className="font-sans font-bold pt-4 text-4xl sm:text-5xl text-white group-hover:text-gold-500 transition-colors tracking-tight">
                      {stat.value}
                    </div>
                    <h4 className="font-sans font-bold text-xs pt-3 tracking-wider text-gray-100 uppercase">
                      {stat.label}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Motto Quote */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <Quote className="w-8 h-8 text-gold-500 mx-auto" />
          <p className="font-sans font-semibold text-xl sm:text-2xl text-gray-900 tracking-tight leading-relaxed">
            &ldquo;Unique value can only be created by professionalism, speculation has no future.&rdquo;
          </p>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
            This motto is practiced by ZOLON personnel at all levels, ranging from senior executives to the new entry employees. In the continuous quest for constant technology development, higher quality and better services, today ZOLON has become the prominent and largest supplier of architectural hardware, railings and bathroom fittings.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Mission and Vision
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Our goal is to increase the value of buildings and to enhance the living and working environment of people worldwide. We achieve this together with our partners by providing innovative and sustainable architectural solutions for the building envelope.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Our Philosophy
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                No need to say any more about innovation or product quality. These characteristics, inherent to the company, need no further proof. What about the people and their working methods? Simple&hellip;
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                ZOLON is a multinational with the attitude of a small firm of craftsmen.
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                What matters most is a passion for the job and a desire to overcome challenges. We invent, we create, we produce. We design the best solutions to meet the needs of all architects and customers, whether large or small. All Directors&rsquo; philosophy has passed on to their team and partners. They describe this way of working in a few words:
              </p>
              <p className="font-sans font-semibold text-sm text-gray-900 leading-relaxed border-l-2 border-gold-500 pl-4">
                Let people do their thing. Develop a passion for the product, a sense of collaboration and complete confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Balustrade Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={photo2}
                alt="Glass balustrade system by Zolon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Glass Balustrade Systems
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              A Suitable Balustrade for Every Space
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              It is not without good reason that glass balustrades have become a trend. They provide an aesthetic, low-maintenance, durable solution for homes, offices and public spaces. There is a wide choice of suitable systems for every space, all of which are stylish, safe and easy to assemble.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
                Now Available Without Assembly
              </h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                You can now also order the ZOLON systems and assemble them yourself. This gives you even more options! Maybe you know exactly which profile you require, because the architect has included it in the design. However, it is also possible that it only says &lsquo;Glass balustrade&rsquo;. You can then choose one yourself with the aid of this product brochure or you can ask our consultants for advice.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Explore the Product Brochure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
                  Certified Quality
                </span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Our Certifications
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                Every ZOLON product is backed by internationally recognized quality and safety standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[photo1, photo3].map((img, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-4 space-y-3">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={img}
                      alt={`Zolon Certificate ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="font-sans text-[11px] text-gray-500 text-center uppercase tracking-wider">
                    Certificate {idx + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-4">
          <div className="border-t border-gray-200 pt-12 flex flex-col items-center text-center space-y-6">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Partner with ZOLON
            </h2>
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-2xl">
              Speak with our engineering desk to specify the right architectural hardware for your next project.
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
