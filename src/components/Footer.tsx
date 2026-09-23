/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const QUICK_LINKS = [
  { label: 'About Zolon', to: '/about-zolon' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Why Zolon', to: '/why-zolon' },
  { label: 'Architectural Hardware', to: '/architectural-hardware-in-rajkot' },
  { label: 'Events', to: '/events' },
  { label: 'Contact Us', to: '/contact-us' }
];

const PRODUCT_CATEGORIES = [
  { label: 'Continue Systems', category: 'continue-systems' },
  { label: 'Profile System', category: 'profile-system' },
  { label: 'Bracket Cover System', category: 'bracket-cover-system' },
  { label: 'Bracket System', category: 'glass-fittings' },
  { label: 'Handrail & Accessories', category: 'handrail-accessories' },
  { label: 'Aluminium Spigots', category: 'aluminium-spigots' },
  { label: 'Balustrade System', category: 'balustrade-system' },
  { label: 'Side Mount', category: 'side-mount' },
  { label: 'Spigot', category: 'spigot' }
];

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
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <img
                src={logo}
                alt="ZOLON Hardware Logo"
                width={150}
                height={150}
                className={`transition-all duration-300`}
              />
            </div>

            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
              Rajkot-based manufacturer of premium architectural hardware and aluminum glass railing systems, including door and glass hardware, shower fittings, handles, hinges and accessories for residential, commercial and hospitality projects.
            </p>

            {/* <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-gold-400 border p-3.5 w-fit border-color-gold-500 rounded-sm">
              <ShieldCheck className="w-4 h-4" />
              <span className='font-sans'>ANSI/BHMA Grade 1 Standardized</span>
            </div> */}
          </div>

          {/* Catalog Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Quick Links</h4>
            <ul className="space-y-3.5 text-sm text-gray-300 font-regular">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-gray-300 hover:text-gold-500 transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Product Categories</h4>
            <ul className="space-y-3.5 text-sm text-gray-300 font-regular">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.category}>
                  <Link
                    to={`/products?category=${cat.category}`}
                    className="font-sans text-gray-300 hover:text-gold-500 transition-colors text-left"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Desk */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-xs tracking-widest text-gray-300 uppercase">Specifications Desk</h4>
            <div className="space-y-4 text-sm text-gray-300 font-regular">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className='font-sans text-gray-300'>Vrundawan Gate, 2 & 3, Rajkot - Gondal Hwy, near Innovative Mould Works, opp. Leuva Patel Samaj, Pipaliya, Gujarat 360311.</span>
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
            <p className="font-sans text-[14px] text-gray-300 font-regular">
              &copy; {currentYear} Zolon Architectural Hardware. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 font-light">
            <p className="font-sans text-[14px] text-gray-300 font-regular">
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
