import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingBag, ArrowRight, Printer, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR } from '../data/products';
import vishLogo from '../assets/logo/vish-logo.png';

const OrderSuccess = () => {
  const { lastOrder } = useCart();

  useEffect(() => {
    document.title = 'Order Confirmed | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-cream-300 card-editorial-shadow relative overflow-hidden"
      >
        <div className="sri-lanka-border h-2 w-full absolute top-0 left-0" />

        <div className="text-center space-y-4 pb-8 border-b border-cream-200">
          <div className="inline-flex items-center justify-center relative">
            <img
              src={vishLogo}
              alt="Vish Collection Logo"
              className="w-16 h-16 rounded-full object-contain shadow-md"
            />
            <span className="w-7 h-7 rounded-full bg-tropical-600 text-white flex items-center justify-center absolute -bottom-1 -right-1 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tropical-50 text-tropical-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bohoma Isthuthi • Order Confirmed</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Thank You for Your Order!
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 max-w-lg mx-auto leading-relaxed">
            Your Sri Lankan handicraft &amp; souvenir order has been recorded. Below is your order confirmation summary.
          </p>
        </div>

        {lastOrder ? (
          <div className="py-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-cream-50 p-5 rounded-2xl border border-cream-200 text-xs sm:text-sm">
              <div>
                <span className="text-charcoal-400 font-bold uppercase text-[10px] tracking-wider block">
                  Order Reference
                </span>
                <span className="font-extrabold text-charcoal-900 text-base">
                  {lastOrder.orderId}
                </span>
              </div>
              <div>
                <span className="text-charcoal-400 font-bold uppercase text-[10px] tracking-wider block">
                  Payment Method
                </span>
                <span className="font-bold text-tropical-700">{lastOrder.paymentMethod}</span>
              </div>
              <div>
                <span className="text-charcoal-400 font-bold uppercase text-[10px] tracking-wider block">
                  Customer Name
                </span>
                <span className="font-semibold text-charcoal-800">{lastOrder.customer?.name}</span>
              </div>
              <div>
                <span className="text-charcoal-400 font-bold uppercase text-[10px] tracking-wider block">
                  Delivery Destination
                </span>
                <span className="font-semibold text-charcoal-800">
                  {lastOrder.customer?.address} ({lastOrder.customer?.country})
                </span>
              </div>
            </div>

            {/* Ordered Items */}
            <div className="space-y-3">
              <h2 className="font-serif text-lg font-bold text-charcoal-900">Ordered Items</h2>
              <div className="divide-y divide-cream-200 border border-cream-200 rounded-2xl px-4">
                {lastOrder.items?.map((item) => (
                  <div
                    key={item.cartItemKey}
                    className="py-3.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover border border-cream-200"
                      />
                      <div>
                        <p className="font-bold text-charcoal-900">{item.name}</p>
                        <p className="text-xs text-charcoal-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-charcoal-900">
                      {formatLKR(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-900 text-white flex items-center justify-between">
              <span className="text-sm font-bold text-cream-200">Total Amount</span>
              <span className="text-2xl font-extrabold text-sunshine-300">
                {formatLKR(lastOrder.total)}
              </span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-sm text-charcoal-600">
            Order reference generated. Ready to explore more Sri Lankan handicrafts!
          </div>
        )}

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/shop"
            className="px-7 py-3.5 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-glow-coral transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-6 py-3.5 rounded-full border border-cream-300 hover:bg-cream-100 text-charcoal-800 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Receipt</span>
          </button>

          <Link
            to="/"
            className="px-6 py-3.5 rounded-full text-charcoal-600 hover:text-coral-600 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;

