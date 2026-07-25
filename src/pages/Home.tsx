/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import ProductShowcase from '../components/ProductShowcase';
import StatsBanner from '../components/StatsBanner';
import WhyZolon from '../components/WhyZolon';
import ProjectGallery from '../components/ProjectGallery';
import Timeline from '../components/Timeline';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTarget?: string } | null;
    if (state?.scrollTarget) {
      document.getElementById(state.scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative selection:bg-gold-500 selection:text-white">
      {/* Top Banner & Main Navigation */}
      <Header />

      {/* Hero Entrance Area */}
      <Hero />

      {/* Prestige Client List */}
      <ClientMarquee />

      {/* Main Filterable Spec Showcase */}
      <ProductShowcase />

      {/* Parallax Building Metrics */}
      <StatsBanner />

      {/* High-End Architectural Advantages */}
      <WhyZolon />

      {/* Real-World Glass Installations */}
      <ProjectGallery />

      {/* Steps to Completion */}
      {/* <Timeline /> */}

      {/* Form & Specifications Office */}
      <ContactForm />

      {/* Clean Technical Footer */}
      <Footer />
    </div>
  );
}
