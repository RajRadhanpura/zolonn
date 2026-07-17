/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Shield, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Products', 'Projects', 'Process', 'Why Zolon', 'Contact'].map((item) => {
              const targetId = item.toLowerCase().replace(' ', '-');
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="font-sans font-medium text-xs tracking-widest text-white hover:text-gold-500 uppercase transition-colors relative py-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center space-x-6">
            
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Consult an Engineer
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gold-500 text-white p-2 rounded-sm"
              title="Contact"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800"
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
            className="fixed inset-0 top-[72px] bg-white z-40 px-6 py-10 flex flex-col justify-between border-t border-gray-100 md:hidden"
          >
            <div className="space-y-6">
              {['Products', 'Projects', 'Process', 'Why Zolon', 'Contact'].map((item) => {
                const targetId = item.toLowerCase().replace(' ', '-');
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(targetId)}
                    className="block w-full text-left font-sans font-semibold text-xl tracking-wider text-gray-800 hover:text-gold-500 uppercase py-2"
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="space-y-6 border-t border-gray-100 pt-8">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
