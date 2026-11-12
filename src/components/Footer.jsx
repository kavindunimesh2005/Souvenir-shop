import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Heart,
  CreditCard,
  Truck,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { categories } from '../data/categories';
import vishLogo from '../assets/logo/vish-logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal-900 text-cream-100 relative overflow-hidden">
      {/* Top Colourful Sri Lankan Batik Accent Strip */}
      <div className="sri-lanka-border h-1.5 w-full" />

      {/* Decorative Subtle Background Glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-coral-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-tropical-400/10 blur-3xl" />

      {/* Trust Highlights Strip */}
      <div className="border-b border-charcoal-800 bg-charcoal-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-coral-500/15 border border-coral-500/30 flex items-center justify-center text-coral-400 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sri Lankan Heritage Design</h4>
              <p className="text-xs text-cream-400">Inspired by island art &amp; traditions</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-tropical-500/15 border border-tropical-400/30 flex items-center justify-center text-tropical-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Protective Gift Packaging</h4>
              <p className="text-xs text-cream-400">Luggage-safe wrapping for souvenirs</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-sunshine-400/15 border border-sunshine-400/30 flex items-center justify-center text-sunshine-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Islandwide &amp; Global Dispatch</h4>
              <p className="text-xs text-cream-400">Flexible shipping options (Placeholder)</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-ocean-500/15 border border-ocean-400/30 flex items-center justify-center text-ocean-300 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Flexible Checkout</h4>
              <p className="text-xs text-cream-400">Cash on Delivery &amp; Online Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Logo, Intro & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <img
                src={vishLogo}
                alt="Vish Collection Official Logo"
                className="w-16 h-16 object-contain rounded-full ring-2 ring-tropical-400/40 shadow-lg group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-serif text-2xl font-bold text-white block leading-none">
                  Vish <span className="text-tropical-400">Collection</span>
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-sunshine-400 font-semibold mt-1 block">
                  Sri Lankan Handicrafts
                </span>
              </div>
            </Link>

            <p className="text-sm text-cream-300 leading-relaxed">
              Celebrating the vibrant artistry, folklore masks, painted Ceylon elephants, and colourful coastal keepsakes of Sri Lanka. Take a little piece of paradise wherever you go.
            </p>

            {/* Footer Mini Newsletter */}
            <div className="bg-charcoal-800/80 border border-charcoal-700 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sunshine-400 mb-1">
                Join the Island Postcard List
              </h4>
              <p className="text-xs text-cream-300 mb-3">
                Receive updates on new Sri Lankan souvenir arrivals and seasonal collections.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-tropical-300 font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Bohoma Isthuthi! Thank you for subscribing.</span>
                </div>
              ) : (
                <form onSubmit={handleFooterSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address..."
                    aria-label="Newsletter email address"
                    className="flex-1 min-w-0 bg-charcoal-900 border border-charcoal-600 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-charcoal-400 focus:outline-none focus:border-coral-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Media Links (Placeholders) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#instagram-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="Vish Collection Instagram Placeholder"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-coral-500 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram (@vishcollection.lk - Placeholder)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#facebook-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="Vish Collection Facebook Placeholder"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-ocean-600 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook (Vish Collection - Placeholder)"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#youtube-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="Vish Collection YouTube Placeholder"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-red-600 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                title="YouTube Channel (Placeholder)"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#website-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="Vish Collection Website"
                className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-tropical-600 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                title="Official Storefront"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Shopping Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              Shopping Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(cat.slug)}`}
                    className="text-cream-300 hover:text-sunshine-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-charcoal-400 group-hover:text-coral-400 transition-colors">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Customer Support (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tropical-400" />
              Quick Links &amp; Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-cream-300 hover:text-white transition-colors">
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-white transition-colors">
                  About Us &amp; Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-cream-300 hover:text-white transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-cream-300 hover:text-white transition-colors">
                  Shopping Bag
                </Link>
              </li>
              <li className="pt-2 border-t border-charcoal-800">
                <Link to="/faq" className="text-cream-300 hover:text-sunshine-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-cream-300 hover:text-sunshine-300 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-cream-300 hover:text-sunshine-300 transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cream-300 hover:text-sunshine-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cream-300 hover:text-sunshine-300 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sunshine-400" />
              Contact Information
            </h3>
            <div className="bg-charcoal-800/60 border border-charcoal-700 rounded-2xl p-4 space-y-3.5 text-xs text-cream-300">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-sunshine-400/15 text-sunshine-300 text-[10px] font-bold uppercase tracking-wider">
                Editable Business Placeholders
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-coral-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Showroom / Studio Address:</p>
                  <p>[Store Address Line, City, Sri Lanka — Editable Placeholder]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-tropical-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Phone / WhatsApp:</p>
                  <p>[+94 XX XXX XXXX — Editable Phone Placeholder]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sunshine-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Customer Support Email:</p>
                  <p>[hello@your-domain.lk — Editable Email Placeholder]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-ocean-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Opening Hours:</p>
                  <p>[Mon – Sat: 9:00 AM – 7:00 PM IST — Editable Placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Method Placeholders */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-white">Vish Collection</strong>. All rights reserved. Designed with Sri Lankan island pride.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-charcoal-400 mr-1">Payment Placeholders:</span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal-800 border border-charcoal-700 text-cream-200 font-semibold">
              Cash on Delivery (LKR)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal-800 border border-charcoal-700 text-cream-200 font-semibold">
              Visa / Mastercard (Placeholder)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal-800 border border-charcoal-700 text-cream-200 font-semibold">
              LankaQR / Bank Transfer (Placeholder)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

