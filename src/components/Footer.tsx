/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-12 border-t-2 border-gold-500 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <img
                src={logo}
                alt="ZOLON Hardware Logo"
                width={150}
                height={150}
                className={`transition-all duration-300`}
              />
            </div>

            <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
              Pioneers in high-strength Duplex 2205 metallurgical hardware and PVD titanium coatings, supplying elite glass railings and architectural fittings to high-end developers across the globe.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-gold-400 border p-3.5 w-fit border-color-gold-500 rounded-sm">
              <ShieldCheck className="w-4 h-4" />
              <span className='font-sans'>ANSI/BHMA Grade 1 Standardized</span>
            </div>
          </div>

          {/* Catalog Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Product Collections</h4>
            <ul className="space-y-3.5 text-xs text-gray-300 font-regular">
              {['Continue Systems', 'Profile System', 'Bracket Cover System'].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="font-sans text-gray-300 hover:text-gold-500 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Support Col */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Engineer Support</h4>
            <ul className="space-y-3.5 text-xs  text-gray-300 font-regular">
              {['AutoCAD Spec Files', 'Revit 3D Families', 'Wind Load Charts', 'Marine Grade Testing Reports', 'Architect Privacy Accord'].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="font-sans text-gray-300 hover:text-gold-500 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Desk */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Specifications Desk</h4>
            <div className="space-y-4 text-xs text-gray-300 font-regular">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className='font-sans text-gray-300'>Survey No.202, Plot No.20, Narmada Pipe Gate, Essen Road, Industrial Area, Veraval(Shapar), Rajkot, Gujarat – 360024</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className='font-sans text-gray-300'>+91-903 351 3331</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className='font-sans text-gray-300'>info@zolonhardware.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="font-sans text-[12px] text-gray-300 font-regular">
              &copy; {currentYear} Zolon Hardware Industries Ltd.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-gray-500 font-light">
            <p className="font-sans text-[12px] text-gray-300 font-regular">
              Designed by <a href="https://www.feelmarks.in" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Feelmarks Design</a>
            </p>
            {/* <a href="" className="hover:text-gold-500 transition-colors">Privacy</a>
            <a href="" className="hover:text-gold-500 transition-colors">Terms</a>

            <div className="flex items-center space-x-4 border-l border-gray-800 pl-6">
              <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div> */}
          </div>
        </div>

      </div>
    </footer>
  );
}
