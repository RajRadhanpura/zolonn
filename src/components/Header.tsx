/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSectionNav } from '../hooks/useSectionNav';
import CatalogueModal from './CatalogueModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const goToSection = useSectionNav();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    goToSection(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md py-4 border-b border-gray-100'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Area */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logo}
              alt="ZOLON Hardware Logo"
              width={150}
              height={150}
              className={`transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'brightness-0' : ''}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about-zolon"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              About Zolon
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/why-zolon"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Why Zolon
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/architectural-hardware-in-rajkot"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Architectural Hardware
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Events
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link>
            {/* <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans font-medium text-xs tracking-widest hover:text-gold-500 uppercase transition-colors relative py-1 group ${isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </Link> */}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => setIsCatalogueOpen(true)}
              className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Download Catalogue
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="tel:+919727560994"
              className="bg-gold-500 text-white p-2 rounded-sm"
              title="Call Mr. Semyul Dalsaniya (+91-972 756 0994)"
              aria-label="Call Mr. Semyul Dalsaniya"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-gray-100'}`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-white z-40 px-6 pt-28 pb-10 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            <div className="space-y-1">
              {/* {['Process'].map((item) => {
                const targetId = item.toLowerCase().replace(' ', '-');
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(targetId)}
                    className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
                  >
                    {item}
                  </button>
                );
              })} */}
              <Link
                to="/about-zolon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                About Zolon
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Products
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Projects
              </Link>
              <Link
                to="/why-zolon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Why Zolon
              </Link>
              <Link
                to="/architectural-hardware-in-rajkot"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Architectural Hardware
              </Link>
              <Link
                to="/events"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Events
              </Link>
              <Link
                to="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-sans font-semibold text-base tracking-wide text-gray-800 hover:text-gold-500 uppercase py-2.5"
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCatalogueOpen(true);
                }}
                className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-sm tracking-widest uppercase py-4 rounded-sm text-center transition-all shadow-md"
              >
                Download Catalogue
              </button>
            </div>

            {/* <div className="space-y-6 border-t border-gray-100 pt-8">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-gold-500" />
                <span>Duplex 2205 Marine Grade Tested</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <span>PVD Scratch-Resistant Coating</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-sm tracking-widest uppercase py-4 rounded-sm text-center block transition-all shadow-md"
              >
                Schedule Free Consultation
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      <CatalogueModal open={isCatalogueOpen} onClose={() => setIsCatalogueOpen(false)} />
    </>
  );
}
