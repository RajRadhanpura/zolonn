/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, Layers, Sparkles } from 'lucide-react';

type FilterCategory = 'all' | 'continue-systems' | 'aluminium-baluster' | 'bracket-system' | 'bracket-cover-system' | 'handrail-accessories' | 'aluminium-spigots' | 'balustrade-system' | 'side-mount' | 'spigot' | 'glass-fittings';

interface MainCategory {
  label: string;
  /** Sub-tabs shown under this main category. Empty means the main tab filters directly. */
  subcategories: { label: string; value: FilterCategory }[];
  /** Used only when there are no subcategories — the data category this main tab filters to. */
  dataCategory?: FilterCategory;
}

const MAIN_CATEGORIES: MainCategory[] = [
  {
    label: 'Aluminium Railing System',
    subcategories: [
      { label: 'Continue Systems', value: 'continue-systems' },
      { label: 'Aluminium Baluster', value: 'aluminium-baluster' },
      { label: 'Bracket Cover System', value: 'bracket-cover-system' },
      { label: 'Handrail & Accessories', value: 'handrail-accessories' },
      { label: 'Glass Fittings', value: 'glass-fittings' },
      { label: 'Aluminium Spigots', value: 'aluminium-spigots' }
    ]
  },
  {
    label: 'S.S Railing System',
    subcategories: [
      { label: 'Balustrade System', value: 'balustrade-system' },
      { label: 'Side Mount', value: 'side-mount' },
      { label: 'Spigot', value: 'spigot' }
    ]
  },
  {
    label: 'Architectural Glass Hardware',
    subcategories: [],
  },
  {
    label: 'Slim Partitions System',
    subcategories: []
    // No dataCategory yet — the client hasn't supplied products for this range.
  }
];

const VALID_CATEGORIES: FilterCategory[] = [
  'all',
  ...MAIN_CATEGORIES.flatMap((main) =>
    main.subcategories.length > 0 ? main.subcategories.map((s) => s.value) : main.dataCategory ? [main.dataCategory] : []
  )
];

// Finds which main tab (and sub-tab, if any) a given leaf category value belongs to.
function findMainIndex(category: FilterCategory): { mainIndex: number; sub: FilterCategory } {
  for (let i = 0; i < MAIN_CATEGORIES.length; i++) {
    const main = MAIN_CATEGORIES[i];
    if (main.subcategories.some((s) => s.value === category)) return { mainIndex: i, sub: category };
    if (main.dataCategory === category) return { mainIndex: i, sub: 'all' };
  }
  return { mainIndex: 0, sub: 'all' };
}

const PAGE_SIZE = 18;

export default function ProductShowcase() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const initial =
    categoryFromUrl && (VALID_CATEGORIES as string[]).includes(categoryFromUrl)
      ? findMainIndex(categoryFromUrl as FilterCategory)
      : { mainIndex: 0, sub: 'all' as FilterCategory };

  const [selectedMain, setSelectedMain] = useState(initial.mainIndex);
  const [selectedSub, setSelectedSub] = useState<FilterCategory>(initial.sub);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const activeMain = MAIN_CATEGORIES[selectedMain];

  // Keep the filter in sync if the URL's category param changes after mount
  // (e.g. navigating here again from a footer link while already on /products)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && (VALID_CATEGORIES as string[]).includes(cat)) {
      const { mainIndex, sub } = findMainIndex(cat as FilterCategory);
      setSelectedMain(mainIndex);
      setSelectedSub(sub);
    }
  }, [searchParams]);

  // The set of data categories the current selection should match.
  const activeCategories = useMemo<FilterCategory[]>(() => {
    if (activeMain.subcategories.length === 0) {
      return activeMain.dataCategory ? [activeMain.dataCategory] : [];
    }
    return selectedSub === 'all' ? activeMain.subcategories.map((s) => s.value) : [selectedSub];
  }, [activeMain, selectedSub]);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, startScrollLeft: 0, moved: false });
  const loadMoreRef = useRef<HTMLDivElement>(null);

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

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategories.includes(product.category as FilterCategory);
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategories, searchQuery]);

  // Reset pagination whenever the active filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategories, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // Load the next page automatically once the sentinel scrolls into view
  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, filteredProducts.length]);

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
          <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
            Discover ZOLON's premium range of architectural hardware, expertly designed to combine strength, safety, and modern aesthetics. From glass balustrade systems and railing solutions to premium fittings and accessories.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col gap-6 mb-12 border-b border-gray-100 pb-8">

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

          {/* Main Category Tabs (4 only, full width) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {MAIN_CATEGORIES.map((main, idx) => (
              <button
                key={main.label}
                onClick={() => {
                  setSelectedMain(idx);
                  setSelectedSub('all');
                }}
                className={`font-sans px-5 py-3 text-xs font-bold tracking-wider uppercase rounded-sm text-center transition-all duration-300 cursor-pointer ${selectedMain === idx
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                  }`}
              >
                {main.label}
              </button>
            ))}
          </div>

          {/* Sub-category Selectors for the active main category */}
          {activeMain.subcategories.length > 0 && (
            <div
              ref={scrollerRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              className="flex items-center overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 space-x-2 pb-2 lg:pb-0 cursor-grab active:cursor-grabbing select-none"
            >
              <button
                onClick={() => {
                  if (dragState.current.moved) return;
                  setSelectedSub('all');
                }}
                className={`font-sans px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedSub === 'all'
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                  }`}
              >
                All
              </button>
              {activeMain.subcategories.map((sub) => (
                <button
                  key={sub.label}
                  onClick={() => {
                    if (dragState.current.moved) return;
                    setSelectedSub(sub.value);
                  }}
                  className={`font-sans px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedSub === sub.value
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                    }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Products Grid with Staggered Animations */}
        {filteredProducts.length > 0 ? (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleProducts.map((product) => (
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

            {/* Sentinel: loads the next page of products when scrolled into view */}
            {hasMore && (
              <div ref={loadMoreRef} className="h-10 mt-8 flex items-center justify-center">
                <span className="font-sans text-[10px] tracking-[0.25em] text-gray-400 uppercase">Loading more...</span>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 border border-gray-100 p-16 text-center rounded-sm max-w-lg mx-auto"
          >
            <SlidersHorizontal className="w-8 h-8 text-gold-500 mx-auto mb-4" />
            <h3 className="font-sans font-bold text-base text-gray-900">
              {activeCategories.length === 0 ? 'Coming Soon' : 'No Matching Products Found'}
            </h3>
            {activeCategories.length === 0 && (
              <p className="font-sans text-xs text-gray-500 mt-2">
                Products for this category will be added soon.
              </p>
            )}
            <button
              onClick={() => {
                setSelectedMain(0);
                setSelectedSub('all');
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
