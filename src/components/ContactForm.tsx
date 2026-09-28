/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Luxury Residential',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/send-contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed');

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Luxury Residential',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50/50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Premium Contact Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
                Get in Touch
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Architect &amp; Builder Specifications Desk
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                Connect directly with our engineering department. We specialize in providing custom PVD finishes, wind load sizing sheets, and certified structural blueprints for luxury real estate ventures.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Engineering Hotline</h4>
                  <p className="font-sans text-sm text-gray-900 font-medium mt-1">+91-972 756 0994</p>
                  {/* <p className="font-sans text-[11px] text-gray-500 font-medium mt-0.5">Mon - Fri: 8:00 AM - 6:00 PM EST</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Direct Email Desk</h4>
                  <p className="font-sans text-sm text-gray-900 font-medium mt-1">info@zolonhardware.com</p>
                  {/* <p className="font-sans text-[11px] text-gray-500 font-medium mt-0.5">Architect CAD block requests: dwg@zolonhardware.com</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-none bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 tracking-wider uppercase">Head Office</h4>
                  <p className="font-sans text-sm text-gray-900 font-medium mt-1">Vrundawan Gate, 2 & 3, Rajkot - Gondal Hwy, near Innovative Mould Works, opp. Leuva Patel Samaj, Pipaliya, Gujarat 360311.</p>
                  {/* <p className="font-sans text-[11px] text-gray-500 font-medium mt-0.5">Miami Design District, FL 33137</p> */}
                </div>
              </div>
            </div>

            {/* Security Notice */}
            {/* <div className="bg-gray-50 border border-gray-200 p-6 rounded-none space-y-3">
              <div className="flex items-center space-x-2 text-gold-700">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h5 className="font-sans font-bold text-xs tracking-wider uppercase">Architect Privacy Accord</h5>
              </div>
              <p className="font-sans text-[11px] text-gray-600 leading-normal font-medium">
                Your submitted blueprints, floorplans, and email logs are treated under strict proprietary confidentiality guidelines. We never distribute architectural files without written consent.
              </p>
            </div> */}
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 rounded-none shadow-md relative">

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight uppercase">Request Specification Pricing</h3>
                    <p className="font-sans text-[14px] text-gray-500 font-regular">Fill out the fields below to receive pricing matrices and CAD specifications.</p>
                  </div>

                  {/* Name and Phone Input Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs px-4 py-3 rounded-none outline-none transition-all placeholder-gray-400 font-medium"
                        placeholder="e.g. Richard Rogers"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs px-4 py-3 rounded-none outline-none transition-all placeholder-gray-400 font-medium"
                        placeholder="e.g. +1 (310) 555-0199"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs px-4 py-3 rounded-none outline-none transition-all placeholder-gray-400 font-medium"
                      placeholder="e.g. Rogers@architecturegroup.com"
                    />
                  </div>

                  {/* Project Type Dropdown Selector */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs px-4 py-3 rounded-none outline-none transition-all appearance-none font-medium text-gray-800"
                      >
                        <option value="Luxury Residential">Luxury Custom Residential Estate</option>
                        <option value="High-Rise Condominiums">High-Rise Condominiums / Towers</option>
                        <option value="Hotel Resort">Hotel Resort &amp; Hospitality</option>
                        <option value="Commercial Glazing">Commercial Office / Glazing Project</option>
                        <option value="Other Fitting Query">Other Fitting Query</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Message Input Box */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block">
                      Scope of Hardware &amp; Blueprints
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs px-4 py-3 rounded-none outline-none transition-all placeholder-gray-400 font-medium"
                      placeholder=" Please specify structural loads, glass thickness requirements, PVD gold quantity estimates, or questions for our metallurgy desk..."
                    />
                  </div>

                  {error && <p className="font-sans text-xs text-red-600">{error}</p>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`font-sans w-full bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase py-4 rounded-none transition-all shadow-md hover:shadow-gold-500/10 flex items-center justify-center space-x-2 cursor-pointer ${isSubmitting ? 'opacity-80 pointer-events-none' : ''
                      }`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Proposal Specifications</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-none bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-sans font-black text-2xl text-gray-900 tracking-tight uppercase">
                      Specifications Received
                    </h3>
                    <p className="font-sans text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting the Zolon Hardware specifications desk. A senior architectural hardware consultant will review your parameters and respond via email within 4 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-gray-300 hover:border-gold-500 hover:text-gold-600 text-gray-700 font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-none transition-all cursor-pointer"
                  >
                    Draft Another spec request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
