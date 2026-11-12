import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, formatLKR } from '../data/products';
import { categories } from '../data/categories';

const SearchBar = () => {
  const { isSearchOpen, closeSearch } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  const filteredProducts = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : products.slice(0, 4);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      closeSearch();
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-charcoal-950/65 backdrop-blur-xs z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.22 }}
            className="fixed top-4 inset-x-4 sm:top-12 max-w-2xl mx-auto bg-white rounded-3xl shadow-tropical-lg border border-cream-300 z-50 overflow-hidden"
            role="dialog"
            aria-label="Search Sri Lankan handicrafts"
          >
            <div className="sri-lanka-border h-1.5 w-full" />

            <form onSubmit={handleSubmit} className="p-4 sm:p-5 border-b border-cream-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-coral-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search masks, Tuk-Tuk magnets, wooden elephants, tote bags..."
                className="flex-1 text-sm sm:text-base text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-xs text-charcoal-400 hover:text-charcoal-700 px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={closeSearch}
                className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-600 transition-colors"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </form>

            <div className="p-5 max-h-[70vh] overflow-y-auto space-y-6">
              {/* Quick Category Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2.5">
                  Popular Island Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        closeSearch();
                        navigate(`/shop?category=${encodeURIComponent(cat.slug)}`);
                      }}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cream-100 hover:bg-coral-500 hover:text-white text-charcoal-700 transition-colors"
                    >
                      {cat.shortName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Matching Products */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sunshine-500" />
                    {query.trim()
                      ? `Search Results (${filteredProducts.length})`
                      : 'Featured Sri Lankan Keepsakes'}
                  </p>
                  {query.trim() && filteredProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1"
                    >
                      View all in Shop <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {filteredProducts.length === 0 ? (
                  <p className="text-sm text-charcoal-500 py-6 text-center">
                    No souvenirs found matching “{query}”. Try searching for “Elephant”, “Mask”, “Magnet”, or “Tote”.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={closeSearch}
                        className="flex items-center gap-3.5 p-2.5 rounded-2xl border border-cream-200 hover:border-coral-300 hover:bg-cream-50 transition-all group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0 bg-cream-100"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-charcoal-900 group-hover:text-coral-600 transition-colors truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-charcoal-500 truncate">{product.category}</p>
                          <p className="text-xs font-extrabold text-tropical-700 mt-0.5">
                            {formatLKR(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;

