/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

const CATEGORY_ORDER: { label: string; value: Product['category'] }[] = [
  { label: 'Continue Systems', value: 'continue-systems' },
  { label: 'Profile System', value: 'profile-system' },
  { label: 'Bracket Cover System', value: 'bracket-cover-system' },
  { label: 'Bracket System', value: 'glass-fittings' },
  { label: 'Handrail & Accessories', value: 'handrail-accessories' },
  { label: 'Aluminium Spigots', value: 'aluminium-spigots' },
  { label: 'Balustrade System', value: 'balustrade-system' },
  { label: 'Side Mount', value: 'side-mount' },
  { label: 'Spigot', value: 'spigot' }
];

export default function ProductCategorySlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, startScrollLeft: 0, moved: false });

  // One representative product per category, in a fixed display order
  const featured = CATEGORY_ORDER
    .map((cat) => PRODUCTS.find((p) => p.category === cat.value))
    .filter((p): p is Product => Boolean(p));

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>('[data-slider-card]');
    const distance = card ? card.offsetWidth + 24 : 320;
    scroller.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

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

  return (
    <section id="product-categories" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft grid, matching the main product showcase */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4b438_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-12xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-3 space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            Engineered Hardware, By Category
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            Explore Our Product Range
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
            From continue systems and glass balustrades to spigots, brackets, and handrail accessories &mdash;
            every ZOLON category is engineered for strength, safety, and modern aesthetics. Browse a highlight
            from each range below.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Previous product"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gold-400 hover:text-gold-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Next product"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gold-400 hover:text-gold-600 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slider Track */}
        <div
          ref={scrollerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          className="flex items-stretch overflow-x-auto no-scrollbar gap-6 pb-4 -mx-6 px-6 cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory scroll-smooth"
        >
          {featured.map((product) => (
            <div
              key={product.id}
              data-slider-card
              className="snap-start shrink-0 w-[280px] sm:w-[320px]"
            >
              <ProductCard product={product} showSpecs={false} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gold-500 text-white font-sans font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
