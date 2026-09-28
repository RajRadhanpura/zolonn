/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Info } from 'lucide-react';

interface CatalogueModalProps {
  open: boolean;
  onClose: () => void;
  catalogueKey?: string;
  catalogueTitle?: string;
}

const EMPTY = { name: '', email: '', phone: '' };

const ENDPOINT = '/api/send-catalogue.php';

export default function CatalogueModal({ open, onClose, catalogueKey, catalogueTitle }: CatalogueModalProps) {
  const [form, setForm] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const close = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setError('');
      setForm(EMPTY);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, catalogue: catalogueKey })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed');
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full border border-gray-200 bg-white px-4 py-3 font-sans text-sm text-gray-900 outline-none transition-colors focus:border-gold-500';
  const labelClass = 'font-sans text-[10px] tracking-widest text-gray-500 font-bold uppercase block mb-1.5';

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Download catalogue"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white p-8 shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="space-y-4 py-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-gold-500" />
                <h3 className="font-sans font-bold text-lg uppercase tracking-tight text-gray-900">
                  Thank you
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  We will send the {catalogueTitle ? `${catalogueTitle} ` : ''}catalogue link to{' '}
                  <strong>{form.email}</strong> shortly.
                </p>
                <button
                  onClick={close}
                  className="bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-3 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg uppercase tracking-tight text-gray-900">
                    {catalogueTitle ? `Download ${catalogueTitle}` : 'Download Catalogue'}
                  </h3>
                  <div className="h-0.5 w-12 bg-gold-500" />
                </div>

                <div>
                  <label htmlFor="cat-name" className={labelClass}>Name</label>
                  <input
                    id="cat-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="cat-email" className={labelClass}>Email</label>
                  <input
                    id="cat-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="cat-phone" className={labelClass}>Mobile Number</label>
                  <input
                    id="cat-phone"
                    type="tel"
                    required
                    pattern="[0-9+\-\s]{8,15}"
                    title="Enter a valid mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <p className="flex items-start gap-2 bg-gold-50 border border-gold-200 p-3 font-sans text-xs text-gray-700 leading-relaxed">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    <strong>Note:</strong> Please provide a proper email address, so you can receive
                    the catalogue link.
                  </span>
                </p>

                {error && <p className="font-sans text-xs text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-white font-sans font-bold text-xs tracking-widest uppercase py-4 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Get Catalogue Link'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
