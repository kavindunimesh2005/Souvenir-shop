import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Star } from 'lucide-react';
import vishLogo from '../assets/logo/vish-logo.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-coral-50/40 pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-cream-200">
      {/* Decorative Tropical Blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sunshine-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-tropical-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-coral-400/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & CTAs (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-cream-300 shadow-xs">
              <img
                src={vishLogo}
                alt="Vish Collection"
                className="w-6 h-6 rounded-full object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-tropical-700">
                Vish Collection • Island Souvenir Emporium
              </span>
              <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            </div>

            {/* Creative Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-extrabold text-charcoal-900 leading-[1.1] tracking-tight">
              Discover the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 via-sunshine-500 to-tropical-600">
                Colours
              </span>{' '}
              of Sri Lanka
            </h1>

            {/* Required Subtitle */}
            <p className="font-editorial italic text-2xl sm:text-3xl text-charcoal-700 font-medium">
              “Take a little piece of Sri Lanka wherever you go.”
            </p>

            <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From fiery Ambalangoda-inspired Raksha masks and royal Kandyan painted elephants to cheerful three-wheeler Tuk-Tuk and coastal sea turtle magnets — explore vibrant island keepsakes curated for travellers and culture lovers.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="px-7 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-glow-coral hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#featured-categories"
                className="px-7 py-4 rounded-full bg-charcoal-900 hover:bg-tropical-700 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-sunshine-300" />
                <span>Explore Collection</span>
              </a>
            </div>

            {/* Quick Highlights Row */}
            <div className="pt-5 border-t border-cream-300/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-serif text-2xl font-extrabold text-charcoal-900">8+</p>
                <p className="text-xs text-charcoal-500 font-medium">Curated Craft Categories</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-extrabold text-coral-600">100%</p>
                <p className="text-xs text-charcoal-500 font-medium">Sri Lankan Island Motifs</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-extrabold text-tropical-600">LKR</p>
                <p className="text-xs text-charcoal-500 font-medium">Transparent Local Pricing</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Sri Lankan Handicraft Lifestyle Photography Collage (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Lifestyle Photograph Card */}
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-tropical-lg bg-charcoal-900 aspect-[16/11] sm:aspect-[16/10]">
              <img
                src="/images/hero-crafts.jpg"
                alt="Sri Lankan Handicrafts — Raksha Yaka Mask, Painted Ceylon Elephant, Tuk-Tuk, and Sea Turtle on Woven Reed Mat"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/65 via-transparent to-transparent" />

              {/* Bottom Caption Inside Main Hero Photo */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sunshine-400 text-charcoal-900 text-[11px] font-extrabold uppercase tracking-wider mb-1.5">
                    Signature Island Showcase
                  </span>
                  <p className="font-serif text-base sm:text-xl font-bold">
                    Ambalangoda Masks, Kandyan Elephants &amp; Coastal Keepsakes
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Mini Feature Card 1: Sea Turtle Magnet (Bottom-Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="hidden sm:flex items-center gap-3.5 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-tropical-lg border border-cream-300 absolute -bottom-6 -left-4 max-w-[260px]"
            >
              <img
                src="/images/turtle-magnet.jpg"
                alt="Sri Lankan Turtle Fridge Magnet"
                className="w-14 h-14 rounded-xl object-cover shrink-0 border border-cream-200"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-600 block">
                  Coastal Favourite
                </span>
                <Link
                  to="/product/sl-turtle-magnet-01"
                  className="text-xs font-bold text-charcoal-900 hover:text-coral-600 truncate block"
                >
                  Turtle Fridge Magnet
                </Link>
                <span className="text-xs font-extrabold text-coral-600">LKR 1,250</span>
              </div>
            </motion.div>

            {/* Floating Mini Feature Card 2: Tuk-Tuk Magnet (Top-Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="hidden sm:flex items-center gap-3.5 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-tropical-lg border border-cream-300 absolute -top-5 -right-4 max-w-[260px]"
            >
              <img
                src="/images/tuktuk-magnet.jpg"
                alt="Sri Lankan Tuk-Tuk Fridge Magnet"
                className="w-14 h-14 rounded-xl object-cover shrink-0 border border-cream-200"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-sunshine-500 text-[10px] font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Top Travel Souvenir</span>
                </div>
                <Link
                  to="/product/sl-tuktuk-magnet-02"
                  className="text-xs font-bold text-charcoal-900 hover:text-coral-600 truncate block"
                >
                  Tuk-Tuk 3D Magnet
                </Link>
                <span className="text-xs font-extrabold text-tropical-700">LKR 1,450</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

