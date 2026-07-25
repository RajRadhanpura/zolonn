/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ClipboardList } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showSpecs?: boolean;
}

export default function ProductCard({ product, showSpecs = true }: ProductCardProps) {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image Area with Hover Zoom */}
      <div className="relative h-64 overflow-hidden bg-gray-50 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest text-gray-800 uppercase font-semibold border border-gold-200 shadow-sm font-sans">
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
          <p className="font-sans text-xs text-gray-600 font-regular leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Quick Technical Specs Summary */}
        {showSpecs && (
          <div className="bg-gold-50/50 border border-gold-100 p-4 rounded-sm space-y-2 text-[11px] font-sans">
            <div className="flex justify-between border-b border-gold-100/50 pb-1.5 text-gray-600">
              <span className="font-semibold text-gray-700">Material:</span>
              <span className="text-end text-[12px]">{product.specs.material}</span>
            </div>
            <div className="flex justify-between pb-1 text-gray-600">
              <span className="font-semibold text-gray-700">Finish:</span>
              <span className="text-right text-gold-700 font-semibold">{product.specs.finish}</span>
            </div>
          </div>
        )}

        {/* Call To Action */}
        <Link
          to={`/products/${product.id}`}
          className="w-full border-2 border-gray-900 hover:border-gold-500 hover:bg-gold-500 hover:text-white text-gray-900 font-sans font-semibold text-xs tracking-widest uppercase py-3 rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <ClipboardList className="w-4 h-4" />
          <span>Technical Specs Sheet</span>
        </Link>
      </div>
    </div>
  );
}
