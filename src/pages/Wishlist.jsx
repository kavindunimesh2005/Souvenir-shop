import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatLKR } from '../data/products';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    document.title = 'Saved Wishlist | Vish Collection Sri Lanka';
  }, []);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-16 border border-cream-300 card-editorial-shadow space-y-6">
          <div className="w-20 h-20 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center mx-auto">
            <Heart className="w-9 h-9" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Your Wishlist is Empty
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Tap the heart icon on any Sri Lankan mask, magnet, or handicraft to save your favourite items here for later.
          </p>
          <Link
            to="/shop"
            className="px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm inline-flex items-center gap-2 shadow-glow-coral transition-all"
          >
            <span>Explore Souvenirs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-coral-600 block mb-1">
            Saved Island Treasures
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Your Wishlist ({wishlistItems.length})
          </h1>
        </div>

        <button
          type="button"
          onClick={clearWishlist}
          className="text-xs font-bold text-charcoal-500 hover:text-red-600 inline-flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Saved Items</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-cream-300 overflow-hidden card-editorial-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-square bg-cream-100 overflow-hidden">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 text-charcoal-600 hover:text-red-600 flex items-center justify-center shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tropical-700">
                  {item.category}
                </span>
                <Link
                  to={`/product/${item.id}`}
                  className="block font-serif text-lg font-bold text-charcoal-900 hover:text-coral-600 mt-1 line-clamp-1"
                >
                  {item.name}
                </Link>
                <p className="text-lg font-extrabold text-coral-600 mt-2">
                  {formatLKR(item.price)}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => addToCart(item, 1)}
                className="w-full py-3 px-4 rounded-2xl bg-charcoal-900 hover:bg-coral-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Move to Shopping Bag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

