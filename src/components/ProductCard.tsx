/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ShieldCheck, Info, X, ClipboardList, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        id={`product-card-${product.id}`}
        className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col h-full"
      >
        {/* Product Image Area with Hover Zoom */}
        <div className="relative h-64 overflow-hidden bg-gray-50 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest text-gray-800 uppercase font-bold border border-gold-200 shadow-sm">
            {product.category.replace('-', ' ')}
          </div>
          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Summary */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight leading-snug group-hover:text-gold-600 transition-colors">
              {product.name}
            </h3>
            <p className="font-sans text-xs text-gray-600 font-light leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Quick Technical Specs Summary */}
          <div className="bg-gold-50/50 border border-gold-100 p-4 rounded-sm space-y-2 text-[11px] font-sans">
            <div className="flex justify-between border-b border-gold-100/50 pb-1.5 text-gray-600">
              <span className="font-semibold text-gray-700">Material:</span>
              <span className="text-right truncate max-w-[150px]">{product.specs.material}</span>
            </div>
            <div className="flex justify-between pb-1 text-gray-600">
              <span className="font-semibold text-gray-700">Finish:</span>
              <span className="text-right text-gold-700 font-semibold">{product.specs.finish}</span>
            </div>
          </div>

          {/* Call To Action */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-full border-2 border-gray-900 hover:border-gold-500 hover:bg-gold-500 hover:text-white text-gray-900 font-sans font-semibold text-xs tracking-widest uppercase py-3 rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <ClipboardList className="w-4 h-4" />
            <span>Technical Specs Sheet</span>
          </button>
        </div>
      </div>

      {/* Technical Spec Sheet Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden border border-gold-100 flex flex-col max-h-[90vh] z-10"
            >
              {/* Gold Header Accent Line */}
              <div className="h-1.5 w-full bg-gold-500" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 overflow-y-auto space-y-6">
                {/* Title */}
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-gold-600 font-bold uppercase block">
                    Product Specifications Blueprint
                  </span>
                  <h2 className="font-sans font-black text-2xl text-gray-900 mt-1">
                    {product.name}
                  </h2>
                </div>

                {/* Grid Info: Image and Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="rounded-sm overflow-hidden h-48 bg-gray-50 border border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider">
                      Product Overview
                    </h3>
                    <p className="font-sans text-xs text-gray-600 leading-relaxed font-light">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 border border-emerald-100 rounded-sm">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Passed Marine Grade Salt-Spray testing</span>
                    </div>
                  </div>
                </div>

                {/* Features & Key Design Marks */}
                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-gold-500" />
                    <span>Core Features & Design Advantages</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 font-sans text-xs text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comprehensive Spec Matrix */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                    <Info className="w-4 h-4 text-gold-500" />
                    <span>Technical Architecture Specs</span>
                  </h3>
                  <div className="bg-gray-50 border border-gray-100 rounded-sm divide-y divide-gray-100 text-xs font-sans">
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-gray-700 col-span-1">Base Material</span>
                      <span className="text-gray-600 col-span-2">{product.specs.material}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-gray-700 col-span-1">Finish / Coating</span>
                      <span className="text-gray-600 col-span-2">{product.specs.finish}</span>
                    </div>
                    {product.specs.loadCapacity && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="font-semibold text-gray-700 col-span-1">Wind & Load Capacity</span>
                        <span className="text-gray-600 col-span-2 font-mono text-xs">{product.specs.loadCapacity}</span>
                      </div>
                    )}
                    {product.specs.glassThickness && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="font-semibold text-gray-700 col-span-1">Glass Compatibility</span>
                        <span className="text-gray-600 col-span-2 font-mono text-xs">{product.specs.glassThickness}</span>
                      </div>
                    )}
                    {product.specs.durability && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="font-semibold text-gray-700 col-span-1">Lifecycle Rating</span>
                        <span className="text-gold-700 font-semibold col-span-2">{product.specs.durability}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CAD Drawings Mock Area */}
                <div className="bg-amber-50/40 border border-amber-100 p-4 rounded-sm text-center">
                  <p className="font-sans text-[11px] text-amber-800 leading-normal">
                    <strong>Architect Support:</strong> For AutoCAD DWG files, 3D Revit families, or high-tensile anchor sizing matrices, please contact our engineering desk via the form below or email <strong>engineering@zolonhardware.com</strong>.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-900 hover:bg-gold-500 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all"
                >
                  Close Spec Matrix
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
