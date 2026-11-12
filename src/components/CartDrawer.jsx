import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR } from '../data/products';

const CartDrawer = () => {
  const {
    cartItems,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingPlaceholder,
    totalPrice,
    totalItems,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    closeCartDrawer();
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCartDrawer}
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-xs z-50"
          />

          {/* Slide-Out Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 shadow-2xl flex flex-col"
            aria-label="Shopping Bag Drawer"
          >
            <div className="sri-lanka-border h-1.5 w-full shrink-0" />

            {/* Header */}
            <div className="p-5 bg-white border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-coral-50 text-coral-600 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-charcoal-900">
                    Your Souvenir Bag
                  </h2>
                  <p className="text-xs text-charcoal-500">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeCartDrawer}
                className="p-2 rounded-full text-charcoal-500 hover:bg-cream-200 hover:text-charcoal-900 transition-colors"
                aria-label="Close shopping bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Banner (Placeholder Rule) */}
            {cartItems.length > 0 && (
              <div className="bg-tropical-50 border-b border-tropical-200 px-5 py-2.5 text-xs text-tropical-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-tropical-600 shrink-0" />
                {subtotal >= 10000 ? (
                  <span>
                    <strong>Placeholder perk unlocked:</strong> Complimentary standard island delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong>{formatLKR(10000 - subtotal)}</strong> more for complimentary standard delivery (Placeholder threshold)
                  </span>
                )}
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-cream-200 text-charcoal-400 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-1.5">
                    Your bag is currently empty
                  </h3>
                  <p className="text-xs text-charcoal-500 max-w-xs mb-6 leading-relaxed">
                    Discover colourful Sri Lankan magnets, carved wooden elephants, traditional Yaka masks, and canvas totes.
                  </p>
                  <Link
                    to="/shop"
                    onClick={closeCartDrawer}
                    className="px-6 py-3 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold uppercase tracking-wider shadow-glow-coral transition-all"
                  >
                    Start Exploring
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.cartItemKey}
                    className="bg-white rounded-2xl p-3.5 border border-cream-300 flex gap-3.5 shadow-2xs"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCartDrawer}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-cream-100 shrink-0 border border-cream-200"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCartDrawer}
                            className="font-serif font-bold text-sm text-charcoal-900 hover:text-coral-600 transition-colors line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartItemKey)}
                            className="text-charcoal-400 hover:text-red-600 p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.selectedVariations &&
                          Object.keys(item.selectedVariations).length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {Object.entries(item.selectedVariations).map(([k, v]) => (
                                <span
                                  key={k}
                                  className="text-[10px] px-2 py-0.5 rounded-md bg-cream-100 text-charcoal-600 font-medium"
                                >
                                  {v}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>

                      <div className="mt-2.5 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="inline-flex items-center rounded-xl border border-cream-300 bg-cream-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemKey, item.quantity - 1)}
                            className="p-1.5 text-charcoal-700 hover:text-coral-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-charcoal-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemKey, item.quantity + 1)}
                            className="p-1.5 text-charcoal-700 hover:text-coral-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-sm font-extrabold text-charcoal-900">
                          {formatLKR(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Totals & Actions */}
            {cartItems.length > 0 && (
              <div className="p-5 bg-white border-t border-cream-300 space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-charcoal-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-charcoal-900">{formatLKR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-500">
                    <span>Estimated Shipping (Placeholder)</span>
                    <span>
                      {shippingPlaceholder === 0 ? 'Complimentary' : formatLKR(shippingPlaceholder)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-cream-200 flex justify-between text-base font-extrabold text-charcoal-900">
                    <span>Total Estimate</span>
                    <span className="text-coral-600">{formatLKR(totalPrice)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleViewCart}
                    className="py-3 px-4 rounded-2xl border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    View Full Bag
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-glow-coral transition-all"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

