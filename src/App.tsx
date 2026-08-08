/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './pages/ContactUs';
import WhyZolonPage from './pages/WhyZolonPage';
import ProjectsPage from './pages/ProjectsPage';
import ProductsPage from './pages/ProductsPage';
import ArchitecturalHardwarePage from './pages/ArchitecturalHardwarePage';
import AboutZolonPage from './pages/AboutZolonPage';
import EventsPage from './pages/EventsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/why-zolon" element={<WhyZolonPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/architectural-hardware-in-rajkot" element={<ArchitecturalHardwarePage />} />
      <Route path="/about-zolon" element={<AboutZolonPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
}
