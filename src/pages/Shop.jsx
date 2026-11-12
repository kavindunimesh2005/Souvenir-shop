import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products, formatLKR } from '../data/products';
import { categories } from '../data/categories';

const MAX_PRICE_LIMIT = 15000;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialSort = searchParams.get('sort') || 'popularity';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);
  const [sortBy, setSortBy] = useState(initialSort);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Shop Sri Lankan Handicrafts & Souvenirs | Vish Collection';
  }, []);

  useEffect(() => {
    const catParam = searchParams.get('category') || 'All';
    const searchParam = searchParams.get('search') || '';
    const sortParam = searchParams.get('sort') || 'popularity';
    setSelectedCategory(catParam);
    setSearchQuery(searchParam);
    setSortBy(sortParam);
  }, [searchParams]);

  const handleCategoryChange = (catSlug) => {
    setSelectedCategory(catSlug);
    const nextParams = new URLSearchParams(searchParams);
    if (catSlug === 'All') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', catSlug);
    }
    setSearchParams(nextParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setMaxPrice(MAX_PRICE_LIMIT);
    setSortBy('popularity');
    setSearchParams({});
  };

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' ||
          product.category === selectedCategory ||
          (product.categories && product.categories.includes(selectedCategory));

        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          product.name.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.tags.some((t) => t.toLowerCase().includes(q));

        const matchesPrice = product.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
        return b.popularity - a.popularity; // popularity default
      });
  }, [selectedCategory, searchQuery, maxPrice, sortBy]);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="min-h-screen pb-20">
      {/* Editorial Shop Header Banner */}
      <div className="bg-charcoal-900 text-white relative overflow-hidden py-12 sm:py-16 border-b border-charcoal-800">
        <div className="sri-lanka-border h-1.5 w-full absolute top-0 left-0" />
        <div className="pointer-events-none absolute -top-24 right-10 w-80 h-80 rounded-full bg-coral-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-tropical-400/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sunshine-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-coral-400" />
              <span>Vish Collection Catalog</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              {selectedCategory === 'All' ? 'All Sri Lankan Handicrafts & Souvenirs' : selectedCategory}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-cream-200 leading-relaxed">
              {activeCategoryObj
                ? activeCategoryObj.description
                : 'Browse our complete collection of traditional Yaka masks, painted wooden elephants, coastal turtle & Tuk-Tuk magnets, canvas tote bags, and island gifts.'}
            </p>
          </div>

          {/* Horizontal Quick Category Pills */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              type="button"
              onClick={() => handleCategoryChange('All')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-coral-500 text-white shadow-glow-coral'
                  : 'bg-charcoal-800 text-cream-200 hover:bg-charcoal-700'
              }`}
            >
              All Categories ({products.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-coral-500 text-white shadow-glow-coral'
                    : 'bg-charcoal-800 text-cream-200 hover:bg-charcoal-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Shop Layout: Sidebar Filters + Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Top Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-coral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search souvenirs by name, motif, or tag..."
              className="w-full pl-11 pr-9 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-coral-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
            {/* Mobile Filter Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-charcoal-900 text-white text-xs font-bold"
            >
              <SlidersHorizontal className="w-4 h-4 text-sunshine-300" />
              <span>Filters</span>
            </button>

            <span className="text-xs font-semibold text-charcoal-500">
              Showing <strong className="text-charcoal-900">{filteredAndSortedProducts.length}</strong> of{' '}
              {products.length} items
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-charcoal-400 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="px-4 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-xs sm:text-sm font-bold text-charcoal-800 focus:outline-none focus:border-coral-500"
              >
                <option value="popularity">Sort by: Popularity</option>
                <option value="newest">Sort by: Newest Arrivals</option>
                <option value="price-asc">Sort by: Price (Low to High)</option>
                <option value="price-desc">Sort by: Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sidebar Filters (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white rounded-3xl border border-cream-300 p-6 space-y-7 sticky top-24 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-cream-200">
              <h2 className="font-serif text-lg font-bold text-charcoal-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-coral-500" />
                <span>Filter Catalog</span>
              </h2>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Category List Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3">
                Product Categories
              </h3>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => handleCategoryChange('All')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-charcoal-900 text-white'
                      : 'text-charcoal-700 hover:bg-cream-100'
                  }`}
                >
                  <span>All Souvenirs</span>
                  <span>{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat.slug || (p.categories && p.categories.includes(cat.slug))
                  ).length;
                  const active = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-left transition-colors ${
                        active
                          ? 'bg-coral-500 text-white shadow-2xs'
                          : 'text-charcoal-700 hover:bg-cream-100'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] ${
                          active ? 'bg-white/20 text-white' : 'bg-cream-200 text-charcoal-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-5 border-t border-cream-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                  Max Price (LKR)
                </h3>
                <span className="text-xs font-extrabold text-coral-600">
                  Up to {formatLKR(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="1200"
                max={MAX_PRICE_LIMIT}
                step="250"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-coral-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-charcoal-400 font-medium mt-1">
                <span>LKR 1,200</span>
                <span>LKR 7,500</span>
                <span>LKR 15,000</span>
              </div>

              {/* Quick Price Presets */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[
                  { label: 'Under LKR 2,000', val: 2000 },
                  { label: 'Under LKR 5,000', val: 5000 },
                  { label: 'Under LKR 9,000', val: 9000 },
                  { label: 'All Prices', val: MAX_PRICE_LIMIT },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setMaxPrice(preset.val)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-colors ${
                      maxPrice === preset.val
                        ? 'bg-tropical-600 text-white border-tropical-600'
                        : 'bg-cream-50 text-charcoal-600 border-cream-300 hover:border-coral-400'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Area (9 cols) */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredAndSortedProducts}
              columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Filter Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-xs z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85%] bg-white z-50 lg:hidden p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-cream-200">
                  <h2 className="font-serif text-lg font-bold text-charcoal-900">Filter Products</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 rounded-full hover:bg-cream-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2.5">
                    Categories
                  </h3>
                  <div className="space-y-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        handleCategoryChange('All');
                        setMobileFiltersOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold ${
                        selectedCategory === 'All' ? 'bg-charcoal-900 text-white' : 'text-charcoal-700'
                      }`}
                    >
                      <span>All Categories</span>
                      {selectedCategory === 'All' && <Check className="w-3.5 h-3.5" />}
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          handleCategoryChange(cat.slug);
                          setMobileFiltersOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-left ${
                          selectedCategory === cat.slug
                            ? 'bg-coral-500 text-white'
                            : 'text-charcoal-700 hover:bg-cream-100'
                        }`}
                      >
                        <span>{cat.name}</span>
                        {selectedCategory === cat.slug && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-cream-200">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Max Price</span>
                    <span className="text-coral-600">{formatLKR(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min="1200"
                    max={MAX_PRICE_LIMIT}
                    step="250"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-coral-500"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-cream-200 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="py-3 rounded-xl border border-charcoal-300 text-xs font-bold text-charcoal-700"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="py-3 rounded-xl bg-coral-500 text-white text-xs font-bold"
                >
                  Apply ({filteredAndSortedProducts.length})
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;

