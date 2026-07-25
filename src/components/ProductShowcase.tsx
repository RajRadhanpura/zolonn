/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, Layers, Sparkles } from 'lucide-react';

type FilterCategory = 'all' | 'continue-systems' | 'profile-system' | 'bracket-cover-system';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, startScrollLeft: 0, moved: false });

  const handleDragStart = (e: React.MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX,
      startScrollLeft: scroller.scrollLeft,
      moved: false,
    };
  };

  const handleDragMove = (e: React.MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragState.current.isDragging) return;
    const delta = e.pageX - dragState.current.startX;
    if (Math.abs(delta) > 3) dragState.current.moved = true;
    scroller.scrollLeft = dragState.current.startScrollLeft - delta;
  };

  const handleDragEnd = () => {
    dragState.current.isDragging = false;
  };

  const categories: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Continue Systems', value: 'continue-systems' },
    { label: 'Profile System', value: 'profile-system' },
    { label: 'Bracket Cover System', value: 'bracket-cover-system' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-white relative">
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4b438_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase">
              Premium Architectural Hardware for Modern Spaces
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            Our Products
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Discover ZOLON's premium range of architectural hardware, expertly designed to combine strength, safety, and modern aesthetics. From glass balustrade systems and railing solutions to premium fittings and accessories.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 border-b border-gray-100 pb-8">

          {/* Categories Tab Selectors */}
          <div
            ref={scrollerRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            className="flex items-center overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 space-x-2 pb-2 lg:pb-0 cursor-grab active:cursor-grabbing select-none"
          >
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => {
                  if (dragState.current.moved) return;
                  setSelectedCategory(cat.value);
                }}
                className={`font-sans px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedCategory === cat.value
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input Field */}
          <div className="relative max-w-md w-full shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-sans w-full bg-gray-50 border border-gray-200 focus:border-gold-400 focus:bg-white text-xs font-medium px-10 py-3 rounded-sm outline-none transition-all placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-gray-400 hover:text-gray-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Products Grid with Staggered Animations */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 border border-gray-100 p-16 text-center rounded-sm max-w-lg mx-auto"
          >
            <SlidersHorizontal className="w-8 h-8 text-gold-500 mx-auto mb-4" />
            <h3 className="font-sans font-bold text-base text-gray-900">No Matching Engineering Specs</h3>
            <p className="font-sans text-xs text-gray-500 mt-2">
              We couldn't find hardware fitting your search query. Try typing alloy grades like "2205", "brass", or general keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-6 bg-gray-900 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm hover:bg-gold-500 transition-colors cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
