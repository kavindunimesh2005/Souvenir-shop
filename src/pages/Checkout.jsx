import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CreditCard,
  Banknote,
  Lock,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR } from '../data/products';

const countries = [
  'Sri Lanka',
  'United Kingdom',
  'Australia',
  'United States',
  'Germany',
  'Canada',
  'France',
  'India',
  'Japan',
  'Singapore',
  'United Arab Emirates',
  'Other International Destination',
];

const Checkout = () => {
  const {
    cartItems,
    subtotal,
    shippingPlaceholder,
    totalPrice,
    clearCart,
    saveOrder,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'Sri Lanka',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    orderNotes: '',
    paymentMethod: 'cod', // 'cod' | 'online_placeholder'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = 'Checkout | Vish Collection Sri Lanka';
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl p-10 border border-cream-300 space-y-4">
          <h1 className="font-serif text-3xl font-bold text-charcoal-900">
            No Items to Checkout
          </h1>
          <p className="text-sm text-charcoal-600">
            Your shopping bag is currently empty. Add some Sri Lankan souvenirs before proceeding to checkout.
          </p>
          <Link
            to="/shop"
            className="inline-block px-7 py-3.5 rounded-full bg-coral-500 text-white text-xs font-bold uppercase tracking-wider"
          >
            Browse Shop Catalog
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Valid email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      nextErrors.phone = 'Valid phone number is required.';
    }
    if (!formData.addressLine1.trim()) {
      nextErrors.addressLine1 = 'Street delivery address is required.';
    }
    if (!formData.city.trim()) {
      nextErrors.city = 'City or town is required.';
    }
    if (!formData.postalCode.trim()) {
      nextErrors.postalCode = 'Postal / ZIP code is required.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderPayload = {
      orderId: `VC-${Math.floor(100000 + Math.random() * 900000)}`,
      placedAt: new Date().toLocaleString(),
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        address: `${formData.addressLine1}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.city} ${formData.postalCode}`,
      },
      paymentMethod:
        formData.paymentMethod === 'cod'
          ? 'Cash on Delivery (LKR)'
          : 'Online Payment Gateway (Placeholder)',
      items: cartItems,
      subtotal,
      shipping: shippingPlaceholder,
      total: totalPrice,
    };

    saveOrder(orderPayload);
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="mb-8">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500 hover:text-coral-600 mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shopping Bag</span>
        </Link>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
          Secure Souvenir Checkout
        </h1>
      </div>

      <form onSubmit={handlePlaceOrder} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Customer & Delivery Details + Payment Method (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Customer Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 pb-3 border-b border-cream-200">
              1. Customer Contact Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="e.g., Nimal"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="e.g., Perera"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+94 7X XXX XXXX"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Step 2: Delivery Address */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 pb-3 border-b border-cream-200">
              2. Delivery Address
            </h2>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Country / Destination *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Street Address Line 1 *
              </label>
              <input
                type="text"
                value={formData.addressLine1}
                onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                placeholder="House number, street name, or hotel name"
                className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
              />
              {errors.addressLine1 && (
                <p className="text-xs text-red-600 mt-1 font-medium">{errors.addressLine1}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Apartment, Suite, or Landmark (Optional)
              </label>
              <input
                type="text"
                value={formData.addressLine2}
                onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                placeholder="Apartment, floor, or nearby landmark"
                className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  City / Town *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g., Colombo / Kandy / Galle"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.city && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Postal / ZIP Code *
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  placeholder="e.g., 00100"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                />
                {errors.postalCode && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.postalCode}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Gift Note or Delivery Instructions (Optional)
              </label>
              <textarea
                rows="2"
                value={formData.orderNotes}
                onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                placeholder="Include a complimentary gift message or special delivery instructions..."
                className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
              />
            </div>
          </div>

          {/* Step 3: Payment Method Selection */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 pb-3 border-b border-cream-200">
              3. Payment Method Selection
            </h2>

            <div className="space-y-3">
              {/* Option A: Cash on Delivery */}
              <label
                className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod'
                    ? 'border-coral-500 bg-coral-50/40'
                    : 'border-cream-300 bg-cream-50 hover:border-cream-400'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="mt-1 accent-coral-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-charcoal-900 flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-tropical-600" />
                      Cash on Delivery (LKR)
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-tropical-100 text-tropical-800">
                      Recommended Local Option
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Pay in Sri Lankan Rupees (LKR) when your handicraft package is delivered to your doorstep or hotel.
                  </p>
                </div>
              </label>

              {/* Option B: Online Payment Integration Placeholder */}
              <label
                className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'online_placeholder'
                    ? 'border-coral-500 bg-coral-50/40'
                    : 'border-cream-300 bg-cream-50 hover:border-cream-400'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online_placeholder"
                  checked={formData.paymentMethod === 'online_placeholder'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="mt-1 accent-coral-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-charcoal-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-ocean-600" />
                      Online Card / LankaQR Payment (Integration Placeholder)
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ocean-100 text-ocean-800">
                      Gateway Placeholder
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Ready for integration with PayHere, Stripe, or local Sri Lankan bank payment gateway credentials. No live card data is collected in this demo.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Order Summary & Submit (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow sticky top-24 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 pb-4 border-b border-cream-200">
            Order Summary ({cartItems.length} {cartItems.length === 1 ? 'Product' : 'Products'})
          </h2>

          <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
            {cartItems.map((item) => (
              <div
                key={item.cartItemKey}
                className="flex items-center justify-between gap-3 py-2 border-b border-cream-100 last:border-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-cream-200"
                  />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-charcoal-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-charcoal-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-charcoal-900 shrink-0">
                  {formatLKR(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2.5 pt-4 border-t border-cream-200 text-sm">
            <div className="flex justify-between text-charcoal-600">
              <span>Subtotal</span>
              <span className="font-bold text-charcoal-900">{formatLKR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-charcoal-600">
              <span>Shipping Estimate (Placeholder)</span>
              <span className="font-bold text-tropical-700">
                {shippingPlaceholder === 0 ? 'Complimentary' : formatLKR(shippingPlaceholder)}
              </span>
            </div>
            <div className="pt-3 border-t border-cream-200 flex justify-between items-baseline">
              <span className="text-base font-extrabold text-charcoal-900">Grand Total</span>
              <span className="text-2xl font-extrabold text-coral-600">
                {formatLKR(totalPrice)}
              </span>
            </div>
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Please complete all highlighted required fields before placing your order.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Place Order — {formatLKR(totalPrice)}</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-400">
            <Lock className="w-3.5 h-3.5 text-tropical-600" />
            <span>Protected Checkout • Vish Collection Sri Lanka</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

