import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  Info,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatLKR } from '../data/products';

const QuickViewModal = () => {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedVariations, setSelectedVariations] = useState({});

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImage(quickViewProduct.image);
      setQuantity(1);
      const initialVars = {};
      if (quickViewProduct.variations) {
        quickViewProduct.variations.forEach((v) => {
          initialVars[v.name] = v.options[0];
        });
      }
      setSelectedVariations(initialVars);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const wished = isInWishlist(quickViewProduct.id);
  const gallery = quickViewProduct.gallery || [quickViewProduct.image];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedVariations, true);
    closeQuickView();
  };

  return (
    <AnimatePresence>
      {quickViewProduct && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="fixed inset-0 bg-charcoal-950/65 backdrop-blur-xs z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-tropical-lg border border-cream-300 z-50 overflow-y-auto"
            role="dialog"
            aria-label={`Quick view: ${quickViewProduct.name}`}
          >
            <div className="sri-lanka-border h-1.5 w-full sticky top-0 z-10" />

            <button
              type="button"
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-cream-200 text-charcoal-700 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close quick view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
              {/* Left Gallery (6 cols) */}
              <div className="md:col-span-6 space-y-3">
                <div className="aspect-square rounded-2xl overflow-hidden bg-cream-100 border border-cream-200">
                  <img
                    src={selectedImage || quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {gallery.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(imgUrl)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                          selectedImage === imgUrl
                            ? 'border-coral-500 scale-105'
                            : 'border-cream-200 opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Details (6 cols) */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-tropical-50 text-tropical-700 border border-tropical-200">
                      {quickViewProduct.category}
                    </span>
                    {quickViewProduct.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-coral-50 text-coral-600 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {quickViewProduct.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                    {quickViewProduct.name}
                  </h2>

                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold text-coral-600">
                      {formatLKR(quickViewProduct.price)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-sm text-charcoal-400 line-through font-medium">
                        {formatLKR(quickViewProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {quickViewProduct.description}
                  </p>

                  {/* Variations */}
                  {quickViewProduct.variations && quickViewProduct.variations.length > 0 && (
                    <div className="space-y-3 pt-2">
                      {quickViewProduct.variations.map((variation) => (
                        <div key={variation.name}>
                          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-1.5">
                            {variation.name}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {variation.options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() =>
                                  setSelectedVariations((prev) => ({
                                    ...prev,
                                    [variation.name]: opt,
                                  }))
                                }
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                                  selectedVariations[variation.name] === opt
                                    ? 'bg-charcoal-900 text-white border-charcoal-900'
                                    : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-coral-400'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Honest Craft Verification Note */}
                  {quickViewProduct.craftInfo?.verificationNote && (
                    <div className="p-3 rounded-xl bg-cream-100 border border-cream-300 flex items-start gap-2 text-xs text-charcoal-600">
                      <Info className="w-4 h-4 text-tropical-600 shrink-0 mt-0.5" />
                      <span>{quickViewProduct.craftInfo.verificationNote}</span>
                    </div>
                  )}
                </div>

                {/* Quantity & Actions */}
                <div className="pt-4 border-t border-cream-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center rounded-2xl border border-cream-300 bg-cream-50 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="p-2 text-charcoal-700 hover:text-coral-600"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-sm font-bold text-charcoal-900">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        className="p-2 text-charcoal-700 hover:text-coral-600"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="flex-1 py-3.5 px-5 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleWishlist(quickViewProduct)}
                      className={`p-3.5 rounded-2xl border transition-colors ${
                        wished
                          ? 'bg-coral-50 border-coral-300 text-coral-600'
                          : 'bg-white border-cream-300 text-charcoal-700 hover:border-coral-300'
                      }`}
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`w-5 h-5 ${wished ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <Link
                    to={`/product/${quickViewProduct.id}`}
                    onClick={closeQuickView}
                    className="w-full py-2.5 text-center text-xs font-bold text-charcoal-700 hover:text-coral-600 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Full Product Details &amp; Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;

