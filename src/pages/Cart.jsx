import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR } from '../data/products';

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shippingPlaceholder,
    totalPrice,
    totalItems,
  } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Shopping Bag | Vish Collection Sri Lanka';
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-16 border border-cream-300 card-editorial-shadow space-y-6">
          <div className="w-24 h-24 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-11 h-11" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Your Shopping Bag is Empty
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Explore our colourful collection of Sri Lankan fridge magnets, painted wooden elephants, traditional Yaka masks, and canvas tote bags.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm inline-flex items-center gap-2 shadow-glow-coral transition-all"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-coral-600 block mb-1">
            Vish Collection Checkout Flow
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Your Shopping Bag ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})
          </h1>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-bold text-charcoal-500 hover:text-red-600 inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Entire Bag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Selected Products List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.cartItemKey}
              className="bg-white rounded-3xl p-4 sm:p-6 border border-cream-300 card-editorial-shadow flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Link
                to={`/product/${item.id}`}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-cream-100 border border-cream-200 shrink-0"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </Link>

              <div className="flex-1 min-w-0 space-y-2 w-full">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tropical-700">
                      {item.category}
                    </span>
                    <Link
                      to={`/product/${item.id}`}
                      className="block font-serif text-lg sm:text-xl font-bold text-charcoal-900 hover:text-coral-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartItemKey)}
                    className="p-2 rounded-full text-charcoal-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {item.selectedVariations && Object.keys(item.selectedVariations).length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(item.selectedVariations).map(([k, v]) => (
                      <span
                        key={k}
                        className="px-2.5 py-1 rounded-lg bg-cream-100 text-charcoal-700 text-xs font-medium"
                      >
                        <strong className="text-charcoal-900">{k}:</strong> {v}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center rounded-2xl border border-cream-300 bg-cream-50 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemKey, item.quantity - 1)}
                      className="p-1.5 text-charcoal-700 hover:text-coral-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-extrabold text-charcoal-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemKey, item.quantity + 1)}
                      className="p-1.5 text-charcoal-700 hover:text-coral-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-charcoal-400 block">
                      {formatLKR(item.price)} each
                    </span>
                    <span className="text-lg font-extrabold text-charcoal-900">
                      {formatLKR(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-800 hover:text-coral-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Right: Order Summary Card (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow sticky top-24 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 pb-4 border-b border-cream-200">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-charcoal-600">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-bold text-charcoal-900">{formatLKR(subtotal)}</span>
            </div>

            <div className="flex justify-between text-charcoal-600">
              <span>Shipping Calculation (Placeholder)</span>
              <span className="font-bold text-tropical-700">
                {shippingPlaceholder === 0 ? 'Complimentary' : formatLKR(shippingPlaceholder)}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-cream-100 text-[11px] text-charcoal-600 flex items-start gap-2">
              <Truck className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
              <span>
                Shipping rate is a sample calculation placeholder (LKR 650 flat rate, or complimentary over LKR 10,000).
              </span>
            </div>

            <div className="pt-4 border-t border-cream-200 flex justify-between items-baseline">
              <span className="text-base font-extrabold text-charcoal-900">Total Price</span>
              <span className="text-2xl font-extrabold text-coral-600">
                {formatLKR(totalPrice)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="w-full py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 space-y-2 text-xs text-charcoal-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-tropical-600 shrink-0" />
              <span>Cash on Delivery &amp; Online Payment Placeholder supported</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sunshine-500 shrink-0" />
              <span>Carefully wrapped for gift giving &amp; travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

