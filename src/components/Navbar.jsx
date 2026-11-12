import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Compass,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { categories } from '../data/categories';
import vishLogo from '../assets/logo/vish-logo.png';

const Navbar = () => {
  const { totalItems, openCartDrawer, openSearch } = useCart();
  const { wishlistCount } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location.pathname, location.search]);

  const handleCategorySelect = (categorySlug) => {
    setCategoriesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/shop?category=${encodeURIComponent(categorySlug)}`);
  };

  return (
    <>
      {/* 1. Announcement Bar */}
      <div className="bg-charcoal-900 text-cream-100 text-xs sm:text-sm py-2.5 px-4 border-b border-charcoal-800 relative overflow-hidden">
        <div className="sri-lanka-border h-0.5 w-full absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-sunshine-400 shrink-0" />
            <p className="font-medium tracking-wide text-center sm:text-left">
              <span className="text-sunshine-300 font-semibold">Ayubowan!</span> Welcome to{' '}
              <span className="text-tropical-400 font-semibold">Vish Collection</span> — Colourful Sri Lankan Handicrafts &amp; Island Keepsakes
            </p>
          </div>
          <div className="hidden md:flex items-center gap-5 text-xs text-cream-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-coral-400" />
              Islandwide &amp; International Souvenir Dispatch (Placeholder)
            </span>
            <Link
              to="/shop"
              className="text-sunshine-300 hover:text-white font-semibold underline underline-offset-4 transition-colors"
            >
              Explore Collection &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Responsive Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-tropical py-2.5 border-b border-cream-300'
            : 'bg-cream-100/90 backdrop-blur-sm py-3.5 border-b border-cream-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl text-charcoal-800 hover:bg-cream-200 hover:text-coral-600 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Official Vish Collection Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Vish Collection Home"
            >
              <div className="relative flex items-center justify-center shrink-0">
                <img
                  src={vishLogo}
                  alt="Vish Collection Official Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-coral-600 transition-colors leading-none">
                  Vish <span className="text-tropical-600">Collection</span>
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-charcoal-500 font-semibold mt-1">
                  Colours of Sri Lanka
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/70'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive && !location.search.includes('category=')
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/70'
                  }`
                }
              >
                Shop
              </NavLink>

              {/* Categories Mega-Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                onMouseLeave={() => setCategoriesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCategoriesDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    location.search.includes('category=')
                      ? 'bg-coral-500 text-white shadow-sm'
                      : 'text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/70'
                  }`}
                  aria-expanded={categoriesDropdownOpen}
                >
                  <span>Categories</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      categoriesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {categoriesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50"
                    >
                      <div className="bg-white rounded-3xl shadow-tropical-lg border border-cream-300 p-5 overflow-hidden">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-cream-200">
                          <div>
                            <h3 className="font-serif font-bold text-charcoal-900 text-base">
                              Sri Lankan Souvenir &amp; Craft Categories
                            </h3>
                            <p className="text-xs text-charcoal-500">
                              Browse all 8 curated island handicraft collections
                            </p>
                          </div>
                          <Link
                            to="/shop"
                            className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1"
                          >
                            View All Products <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => handleCategorySelect(cat.slug)}
                              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-cream-100 text-left transition-colors group"
                            >
                              <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-12 h-12 rounded-xl object-cover border border-cream-300 group-hover:scale-105 transition-transform shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-charcoal-900 group-hover:text-coral-600 transition-colors truncate">
                                  {cat.name}
                                </p>
                                <p className="text-xs text-charcoal-500 line-clamp-1">
                                  {cat.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/70'
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/70'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Right Side Actions: Search, Wishlist, Shopping Cart */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                className="p-2.5 rounded-full text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/80 transition-colors"
                aria-label="Search products"
                title="Search Sri Lankan handicrafts"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="relative p-2.5 rounded-full text-charcoal-800 hover:text-coral-600 hover:bg-cream-200/80 transition-colors"
                aria-label="Wishlist"
                title="Your Saved Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-tropical-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Cart Button with Quantity Indicator */}
              <button
                type="button"
                onClick={openCartDrawer}
                className="flex items-center gap-2 bg-charcoal-900 hover:bg-coral-600 text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-glow-coral group"
                aria-label="Open shopping cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-sunshine-300 group-hover:text-white transition-colors" />
                </div>
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                  Bag
                </span>
                <span className="min-w-[22px] h-[22px] px-1.5 rounded-full bg-coral-500 group-hover:bg-charcoal-900 text-white text-xs font-extrabold flex items-center justify-center transition-colors">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-xs z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 left-0 bottom-0 w-[86%] max-w-sm bg-cream-50 z-50 lg:hidden flex flex-col shadow-2xl overflow-y-auto"
              aria-label="Mobile Navigation Drawer"
            >
              <div className="sri-lanka-border h-1.5 w-full shrink-0" />
              <div className="p-5 flex items-center justify-between border-b border-cream-200 bg-white">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img
                    src={vishLogo}
                    alt="Vish Collection Logo"
                    className="w-11 h-11 object-contain rounded-full"
                  />
                  <div>
                    <span className="font-serif font-bold text-lg text-charcoal-900 block leading-none">
                      Vish Collection
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-tropical-600 font-bold">
                      Sri Lankan Handicrafts
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-charcoal-600 hover:bg-cream-200"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Trigger */}
              <div className="p-4 border-b border-cream-200">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSearch();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-cream-300 text-charcoal-500 text-sm hover:border-coral-400 transition-colors"
                >
                  <Search className="w-4 h-4 text-coral-500" />
                  <span>Search masks, magnets, elephants...</span>
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 p-4 space-y-1.5">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-800 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>Home</span>
                </NavLink>

                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-800 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>Shop All Products</span>
                </NavLink>

                {/* Mobile Categories Accordion */}
                <div className="rounded-2xl bg-white border border-cream-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileCategoriesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-charcoal-800 hover:bg-cream-100"
                  >
                    <span className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-coral-500" />
                      Product Categories (8)
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileCategoriesOpen ? 'rotate-180 text-coral-600' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileCategoriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-cream-200 bg-cream-50/70 px-2 py-2 space-y-1"
                      >
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleCategorySelect(cat.slug)}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm font-medium text-charcoal-700 hover:bg-white hover:text-coral-600 transition-colors"
                          >
                            <img
                              src={cat.image}
                              alt={cat.name}
                              className="w-8 h-8 rounded-lg object-cover shrink-0"
                            />
                            <span className="truncate">{cat.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-800 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>About Us &amp; Craftsmanship</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-800 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>Contact Us</span>
                </NavLink>

                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-800 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>Saved Wishlist</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs bg-tropical-100 text-tropical-800 font-bold">
                    {wishlistCount}
                  </span>
                </NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-600 hover:bg-cream-200'
                    }`
                  }
                >
                  <span>FAQ &amp; Help</span>
                </NavLink>
              </nav>

              {/* Mobile Bottom Cart CTA */}
              <div className="p-4 border-t border-cream-200 bg-white space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCartDrawer();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Shopping Bag ({totalItems} items)</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

