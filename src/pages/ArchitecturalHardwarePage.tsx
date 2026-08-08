/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  DoorClosed,
  Sparkles,
  ShieldCheck,
  Wrench,
  Layers,
  Users,
  Building2,
  Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import photo1 from '../assets/products/photo1.jpg';
import photo2 from '../assets/products/photo2.jpg';
import photo3 from '../assets/products/photo3.jpg';

const DEMAND_FACTORS = [
  'Rapid Gujarat urbanization boosts needs for versatile door hardware.',
  'Smart home tech integrates automated locks and sensors.',
  'Low-maintenance fittings cut ownership costs long-term.'
];

const RAILING_BENEFITS = [
  'Superior strength for dynamic high-traffic railings.',
  'Custom aesthetics for architectural themes.',
  'Corrosion treatments extend humid-condition lifespan.',
  'Simplified installation accelerates timelines.'
];

const CLIENT_SEGMENTS = [
  'Residential developers and homeowners',
  'Commercial buildings and office fit-outs',
  'Hospitality projects: hotels, resorts and restaurants',
  'Institutional and educational facilities',
  'Healthcare facilities and clinics',
  'Retail outlets and malls',
  'Industrial and infrastructure projects'
];

const CORE_SERVICES = [
  {
    title: 'Product Supply',
    description: 'Wide inventory of architectural hardware, aluminium railings and accessories.'
  },
  {
    title: 'Custom Fabrication',
    description: 'Bespoke profiles, finishes and fittings to meet design and regulatory requirements.'
  },
  {
    title: 'Specification Support',
    description: 'Assistance with product selection, compliance and performance requirements for architects and contractors.'
  },
  {
    title: 'Logistics & Delivery',
    description: 'Timely dispatch and regional delivery with careful packaging.'
  },
  {
    title: 'After-Sales Support',
    description: 'Warranty handling and replacement parts to ensure long-term satisfaction.'
  }
];

const WHY_CHOOSE = [
  { icon: MapPin, title: 'Local Presence', description: 'Fast access to stocked hardware and timely deliveries across Rajkot and surrounding areas.' },
  { icon: Sparkles, title: 'Competitive Pricing', description: 'Transparent pricing backed by consistent product availability and value-for-money solutions.' },
  { icon: Wrench, title: 'Technical Support', description: 'Clear product data, installation guidance and help with compliance to local building requirements.' },
  { icon: Layers, title: 'Custom Solutions', description: 'Ability to fabricate and finish items to match project specifications and design intent.' },
  { icon: DoorClosed, title: 'Wide Selection', description: 'Comprehensive range from standard locks and handles to specialized glass and sanitary fittings.' },
  { icon: ShieldCheck, title: 'Quality & Durability', description: 'Products sourced and manufactured to industry standards for long-term performance.' },
  { icon: Users, title: 'Customer-Focused Service', description: 'Responsive order processing, accurate invoicing and reliable after-sales care.' }
];

const SUPPORT_SERVICES = [
  'Consultations align with project specs.',
  'On-site installation guidance.',
  'Maintenance extends longevity.',
  'Custom fabrication for demands.'
];

const PERFORMANCE_SPECS = [
  'Million-cycle tested door systems.',
  'Adjustable speeds for environments.',
  'Compact for minimal clearances.',
  'Safety stops prevent slamming.'
];

const STRATEGIC_ADVANTAGES = [
  'Port proximity aids exports.',
  'Skilled labor drives innovation.',
  'Incentives boost sustainability.',
  'Digital tools enhance chains.'
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start space-x-2.5 font-sans text-sm text-gray-700 leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ArchitecturalHardwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Architectural Hardware in Rajkot | Zolon Hardware"
        description="Zolon is Rajkot's premier manufacturer of architectural hardware, railing systems, and door fittings — combining local manufacturing prowess with global design trends since 2004."
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
            Premium Architectural Hardware Manufacturer in Rajkot
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Architectural Hardware in Rajkot
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

        {/* Welcome Intro */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            Welcome to Zolon
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Rajkot&rsquo;s Pioneer Architectural Hardware
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Architectural Hardware in Rajkot sets the standard for precision-engineered solutions transforming spaces into functional masterpieces. Zolon Architectural Hardware leads as the premier manufacturer, delivering innovative railing systems, door fittings, and accessories for residential, commercial, and industrial applications across Gujarat. With over two decades of expertise since 2004, Zolon combines local manufacturing prowess with global design trends to meet rising demands from urbanization and smart construction.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Rajkot&rsquo;s industrial ecosystem positions it as a key hub for Architectural Hardware in Rajkot, supporting India&rsquo;s market growth at 4.7% CAGR through 2031. Zolon exemplifies this by serving high-profile clients and adapting to sustainable, IoT-enabled trends.
          </p>
        </section>

        {/* Premium Architectural Hardware Gallery */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Premium Architectural Hardware in Rajkot
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[photo1, photo2, photo3].map((img, idx) => (
                <div key={idx} className="aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={img}
                    alt="Architectural Hardware In Rajkot"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Premium Architectural Hardware in Rajkot from Zolon emphasizes quality craftsmanship for doors, windows, and structures ensuring smooth operation. Clients rely on consistent excellence that reduces long-term maintenance costs.{' '}
              <Link to="/products" className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2">
                View our premium collection here
              </Link>{' '}
              tailored for modern projects.
            </p>
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Local production in Shapar Veraval guarantees quick turnaround and customization unavailable from distant suppliers. Zolon&rsquo;s 4.9 customer rating reflects this reliability, making Rajkot the go-to destination for architects.
            </p>
          </div>
        </section>

        {/* Evolution Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Evolution of Architectural Hardware in Rajkot
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Architectural Hardware in Rajkot evolved from basic fittings to sophisticated systems amid India&rsquo;s construction boom via Smart City Mission. Zolon innovates to support these priorities with minimalist, eco-friendly designs.{' '}
            <Link to="/why-zolon" className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2">
              Discover how we&rsquo;ve shaped the industry
            </Link>{' '}
            in our history section.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Proximity to raw materials enables rapid prototyping in Rajkot, benefiting national architecture trends. This evolution integrates seamlessly into contemporary builds.{' '}
            <Link to="/projects" className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2">
              Read case studies in our projects gallery
            </Link>.
          </p>

          <div className="bg-gold-50/50 border border-gold-100 p-8 space-y-4 mt-4">
            <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
              Factors Driving Demand for Rajkot Architectural Hardware
            </h3>
            <BulletList items={DEMAND_FACTORS} />
          </div>
        </section>

        {/* Railing Systems */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-6 text-white">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block">
              Zolon Hardware
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight">
              Railing Systems &mdash; Aluminum Railings from Architectural Hardware in Rajkot
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-3xl">
              Zolon&rsquo;s Railing System range features premium aluminium railings engineered for durability, low maintenance and modern aesthetics. Designed for both residential and commercial projects, our aluminium railings combine corrosion resistance with sleek profiles to enhance safety without compromising style.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Innovations in Rajkot Railing Hardware */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Innovations in Rajkot Railing Hardware
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Innovations in Architectural Hardware in Rajkot feature adjustable fittings and corrosion-resistant finishes for Gujarat&rsquo;s climate. Zolon incorporates client feedback for evolving styles.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Precision engineering ensures smooth retrofitting, strengthening Rajkot&rsquo;s national reputation.
          </p>

          <div className="bg-gold-50/50 border border-gold-100 p-8 space-y-4 mt-4">
            <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
              Key Benefits of Rajkot Architectural Hardware Railings
            </h3>
            <BulletList items={RAILING_BENEFITS} />
          </div>
        </section>

        {/* Accessories */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Zolon Hardware
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Architectural Hardware Accessories in Rajkot
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-3xl">
              Zolon supplies a complete range of architectural hardware and accessories crafted to blend functionality with refined aesthetics. From hinges and locks to handles and flush bolts, every product is designed for long life, smooth operation and an elegant finish.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Who We Serve & Our Services */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Zolon Hardware
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Who We Serve &amp; Our Services
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-3xl">
              Zolon provides architectural hardware, railing systems and accessory solutions to a wide range of clients &ndash; supplying reliable products, specification support and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
                Industries &amp; Clients We Serve
              </h3>
              <BulletList items={CLIENT_SEGMENTS} />
            </div>

            <div className="space-y-4">
              <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
                Core Services
              </h3>
              <div className="space-y-4">
                {CORE_SERVICES.map((service, idx) => (
                  <div key={idx} className="border-l-2 border-gold-500 pl-4">
                    <h4 className="font-sans font-semibold text-sm text-gray-900">{service.title}</h4>
                    <p className="font-sans text-xs text-gray-600 leading-relaxed mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Zolon */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                Why Choose Zolon for Architectural Hardware in Rajkot?
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                When you need dependable architectural hardware and accessories in Rajkot, Zolon stands out for product quality, local availability and practical support. We combine industry-grade materials with agile supply to meet the timelines and standards of modern construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
              {WHY_CHOOSE.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div key={idx} className="bg-white border-r border-b border-gray-200 p-8 hover:bg-gold-50/20 transition-all duration-300 space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 rounded-none shrink-0 border border-gold-500/30">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans font-semibold text-sm text-gray-900 tracking-tight uppercase">
                        {reason.title}
                      </h3>
                      <p className="font-sans text-[13px] text-gray-700 font-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patch Fittings and Door Hardware */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Patch Fittings and Door Hardware in Architectural Hardware in Rajkot
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Patch fittings for glass doors provide hydraulic patches and floor springs for smooth gliding. Zolon&rsquo;s handle heavy panels quietly for offices and residences.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Supporting frameless designs, precision alignment enhances space illusion. Rapid scaling meets large orders from Rajkot hub.
          </p>

          <div className="pt-6 space-y-4">
            <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight">
              Floor Springs and Hydraulic Systems Overview
            </h3>
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Floor springs control closing for high-traffic doors with adjustable speeds. Zolon hydraulics reduce structural wear in malls and hospitals.
            </p>
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Customization includes hold-open features aligning with smart infrastructure. Local testing ensures compliance.
            </p>
          </div>
        </section>

        {/* Why Zolon Excels */}
        <section className="bg-gray-950 py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-6 text-white">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block">
              Zolon Hardware
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight">
              Why Zolon Excels in Architectural Hardware in Rajkot
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-3xl">
              Zolon shines in Architectural Hardware in Rajkot with 20+ years powering landmarks from its Shapar facility. Client-centric services build lasting trust nationwide. Industry authority features in stadiums and pharma plants with IoT trends. Leadership anticipates shifts effectively.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Contact for Consultations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Proven Track Record */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Zolon Hardware
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Proven Track Record of Zolon Services
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-3xl flex items-start space-x-2">
              <Star className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>
                Services extend to consultations and after-sales for flawless execution. Efficient logistics serve Gujarat beyond. Verified 70+ reviews validate reliability.{' '}
                <Link to="/contact-us" className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2">
                  Schedule a service request
                </Link>.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gold-50/50 border border-gold-100 p-8 space-y-4">
              <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
                Services Supporting Architectural Hardware in Rajkot
              </h3>
              <BulletList items={SUPPORT_SERVICES} />
            </div>

            <div className="bg-gold-50/50 border border-gold-100 p-8 space-y-4">
              <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
                Performance Specs for Rajkot Door Hardware
              </h3>
              <BulletList items={PERFORMANCE_SPECS} />
            </div>
          </div>
        </section>

        {/* Clients Benefiting */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
                Trusted Partnerships
              </span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Clients Benefiting from Rajkot Architectural Hardware
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Clients like Prestige Group, Adani, and Narendra Modi Stadium trust Zolon&rsquo;s Architectural Hardware in Rajkot. Partnerships span towers to public venues.
            </p>
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              Consistent delivery under deadlines avoids rework. Developers praise integration. Portfolio reinforces authority.{' '}
              <Link to="/contact-us" className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2">
                Request client references
              </Link>.
            </p>
          </div>
        </section>

        {/* Future Trends */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Future Trends in Architectural Hardware in Rajkot
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Trends feature smart integrations and sustainability, with Zolon leading IoT locks. Rajkot gears via R&amp;D for digital transformation.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            E-commerce expands access for architects. Minimalist designs gain amid urbanization. Zolon captures opportunities.
          </p>

          <div className="bg-gold-50/50 border border-gold-100 p-8 space-y-4 mt-4">
            <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-wider">
              Strategic Advantages for Rajkot Manufacturers
            </h3>
            <BulletList items={STRATEGIC_ADVANTAGES} />
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="max-w-5xl mx-auto px-6 pt-4 pb-4">
          <div className="border-t border-gray-200 pt-12 flex flex-col items-center text-center space-y-6">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Visit Us
            </h2>
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-2xl">
              Survey No.202, Plot No.20, Narmada Pipe Gate, Essen Road, Industrial Area, Veraval(Shapar), Rajkot, Gujarat &ndash; 360024
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
