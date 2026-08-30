/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isLightboxOpen]);

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <button
        onClick={() => setIsLightboxOpen(true)}
        className="group relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 border border-gray-100 cursor-zoom-in block"
      >
        <img
          src={images[activeIndex]}
          alt={alt}
          className="mx-auto h-full object-cover object-center p-4"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
            <ZoomIn className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </button>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`aspect-square rounded-sm overflow-hidden border-2 transition-colors ${activeIndex === idx ? 'border-gold-500' : 'border-transparent hover:border-gold-200'
                }`}
            >
              <img
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox — portaled to document.body so it isn't trapped inside any
          ancestor stacking context (e.g. the sticky gallery column on the
          product detail page), which would otherwise let later sibling
          content paint on top of it despite its high z-index. */}
      {createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close lightbox"
                className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    aria-label="Previous image"
                    className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); showNext(); }}
                    aria-label="Next image"
                    className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                src={images[activeIndex]}
                alt={alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />

              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-xs font-sans tracking-widest">
                  {activeIndex + 1} / {images.length}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
