/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us | Zolon Hardware"
        description="Connect with ZOLON Hardware's engineering department for custom PVD finishes, wind load sizing sheets, and certified structural blueprints for luxury real estate ventures."
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
            We'd Love to Hear From You
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Contact Us
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

        {/* Quick Info Strip */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-none flex items-start space-x-4">
              <div className="w-11 h-11 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Call Us</h4>
                <p className="font-sans text-sm text-gray-900 font-medium mt-1">+91 966 225 5163</p>
                <p className="font-sans text-sm text-gray-900 font-medium">+91 903 351 3331</p>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-none flex items-start space-x-4">
              <div className="w-11 h-11 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Email Us</h4>
                <p className="font-sans text-sm text-gray-900 font-medium mt-1">info@zolonhardware.com</p>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-none flex items-start space-x-4">
              <div className="w-11 h-11 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Working Hours</h4>
                <p className="font-sans text-sm text-gray-900 font-medium mt-1">Mon - Sat: 9:30 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reused Specification Form Section */}
        <ContactForm />

        {/* Location Map */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-8">
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
                Find Us
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Head Office &amp; Manufacturing Unit
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed flex items-start space-x-2 max-w-2xl">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>
                  Survey No.202, Plot No.20, Narmada Pipe Gate, Essen Road, Industrial Area, Veraval(Shapar), Rajkot, Gujarat &ndash; 360024
                </span>
              </p>
            </div>

            <div className="w-full h-[420px] border border-gray-200 overflow-hidden">
              <iframe
                title="Zolon Hardware Location"
                src="https://www.google.com/maps?q=Veraval%20Shapar%2C%20Rajkot%2C%20Gujarat%20360024&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
