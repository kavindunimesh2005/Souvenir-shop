import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatLKR } from '../data/products';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart, openQuickView } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const wished = isInWishlist(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl border border-cream-300/90 overflow-hidden card-editorial-shadow hover:card-editorial-shadow-hover transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-cream-100">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Subtle Top Gradient for Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-charcoal-950/35 to-transparent" />

        {/* Category & Highlight Badges */}
        <div className="absolute top-3.5 left-3.5 right-14 flex flex-wrap gap-1.5 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/95 backdrop-blur-xs text-charcoal-900 shadow-xs">
            {product.category}
          </span>
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-coral-500 text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          title={wished ? 'Remove from Wishlist' : 'Add to Wishlist'}
          className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
            wished
              ? 'bg-coral-500 text-white scale-105'
              : 'bg-white/95 text-charcoal-700 hover:bg-coral-50 hover:text-coral-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${wished ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="w-full py-2.5 px-4 rounded-2xl bg-charcoal-900/90 hover:bg-charcoal-900 text-white backdrop-blur-xs text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <Eye className="w-4 h-4 text-sunshine-300" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <Link
            to={`/product/${product.id}`}
            className="block font-serif text-lg font-bold text-charcoal-900 group-hover:text-coral-600 transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
          <p className="mt-1.5 text-xs text-charcoal-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-cream-200 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-charcoal-400 block">
              Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-charcoal-900">
                {formatLKR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-charcoal-400 line-through font-medium">
                  {formatLKR(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Mobile-accessible Quick View button */}
            <button
              type="button"
              onClick={() => openQuickView(product)}
              className="sm:hidden p-2.5 rounded-xl bg-cream-100 text-charcoal-700 hover:bg-cream-200 transition-colors"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="px-4 py-2.5 rounded-2xl bg-coral-500 hover:bg-tropical-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;

