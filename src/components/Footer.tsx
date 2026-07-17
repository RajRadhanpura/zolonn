/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

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
             
              <div className="flex items-center text-xl font-bold tracking-tighter">
                <img
                src="https://zolonhardware.com/wp-content/uploads/2019/02/Logo-Zolon.png"
                alt="Luxury Architecture Facade with Structural Glass"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
                width="150px"
              />
              </div>
            </div>
            
            <p className="text-white font-sans text-xs text-gray-400 leading-relaxed font-light">
              Pioneers in high-strength Duplex 2205 metallurgical hardware and PVD titanium coatings, supplying elite glass railings and architectural fittings to high-end developers across the globe.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-gold-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-white font-sans">ANSI/BHMA Grade 1 Standardized</span>
            </div>
          </div>

          {/* Catalog Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Product Collections</h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              {['Glass Railing Systems', 'Hydraulic Glass Pivots', 'Architectural Lever Handles', 'Heavy-Duty Glass Standoffs', 'Sliding Shower Rail Systems'].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-white font-sans hover:text-gold-500 transition-colors text-left"
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
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              {['AutoCAD Spec Files', 'Revit 3D Families', 'Wind Load Charts', 'Marine Grade Testing Reports', 'Architect Privacy Accord'].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-white font-sans hover:text-gold-500 transition-colors text-left"
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
            <div className="space-y-4 text-xs text-gray-400 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="text-white font-sans w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-white font-sans">Miami Design District, FL 33137</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Phone className="text-white font-sans w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-white font-sans">1-800-ZOLON-HW</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Mail className="text-white font-sans w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-white font-sans">specifications@zolonhardware.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-sans  space-y-1.5 text-center md:text-left">
            <p className="font-sans text-[14px] text-gray-500 font-light">
              &copy; {currentYear} Zolon Hardware Industries Ltd. All Engineering Rights Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-gray-500 font-light">
            <a href="#contact" className="text-white hover:text-gold-500 transition-colors font-sans ">Privacy Policy</a>
            <a href="#contact" className="text-white hover:text-gold-500 transition-colors font-sans ">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
