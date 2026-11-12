import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Info,
  Zap,
  Tag,
  Layers,
  Compass,
} from 'lucide-react';
import { products, formatLKR } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductGrid from '../components/ProductGrid';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = products.find((p) => p.id === id) || products[0];
  const wished = isInWishlist(product.id);
  const gallery = product.gallery || [product.image];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariations, setSelectedVariations] = useState({});
  const [activeTab, setActiveTab] = useState('specifications');

  useEffect(() => {
    document.title = `${product.name} | Vish Collection Sri Lanka`;
    setSelectedImage(product.image);
    setQuantity(1);
    const defaultVars = {};
    if (product.variations) {
      product.variations.forEach((v) => {
        defaultVars[v.name] = v.options[0];
      });
    }
    setSelectedVariations(defaultVars);
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariations, true);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariations, false);
    navigate('/checkout');
  };

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          (p.categories &&
            product.categories &&
            p.categories.some((cat) => product.categories.includes(cat))))
    )
    .slice(0, 4);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-charcoal-500 mb-8">
        <Link to="/" className="hover:text-coral-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/shop" className="hover:text-coral-600 transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          to={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-coral-600 transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-charcoal-900 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-cream-300 card-editorial-shadow">
        {/* Left: Large Product Image Gallery (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0.7, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="aspect-square rounded-3xl overflow-hidden bg-cream-100 border border-cream-300 relative"
          >
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold bg-coral-500 text-white shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {product.badge}
              </span>
            )}
          </motion.div>

          {/* Thumbnail Strip */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === imgUrl
                      ? 'border-coral-500 scale-105 shadow-md'
                      : 'border-cream-200 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info, Variations & Actions (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {(product.categories || [product.category]).map((cat) => (
                <Link
                  key={cat}
                  to={`/shop?category=${encodeURIComponent(cat)}`}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-tropical-50 text-tropical-700 border border-tropical-200 hover:bg-tropical-600 hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900 leading-tight">
              {product.name}
            </h1>

            {/* Price Block */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-cream-200">
              <span className="text-3xl font-extrabold text-coral-600">
                {formatLKR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-charcoal-400 line-through font-semibold">
                  {formatLKR(product.originalPrice)}
                </span>
              )}
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                In Stock • Ready for Dispatch
              </span>
            </div>

            {/* Full Description */}
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {product.description}
            </p>

            {/* Available Variations */}
            {product.variations && product.variations.length > 0 && (
              <div className="space-y-4 pt-2">
                {product.variations.map((variation) => (
                  <div key={variation.name}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2">
                      {variation.name}:{' '}
                      <span className="text-charcoal-900">{selectedVariations[variation.name]}</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {variation.options.map((opt) => {
                        const active = selectedVariations[variation.name] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setSelectedVariations((prev) => ({
                                ...prev,
                                [variation.name]: opt,
                              }))
                            }
                            className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all ${
                              active
                                ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-xs'
                                : 'bg-cream-50 text-charcoal-700 border-cream-300 hover:border-coral-400'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Selector & Primary Action Buttons */}
            <div className="pt-4 space-y-3.5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center rounded-2xl border-2 border-cream-300 bg-cream-50 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2.5 text-charcoal-700 hover:text-coral-600 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-base font-extrabold text-charcoal-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2.5 text-charcoal-700 hover:text-coral-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[180px] py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart — {formatLKR(product.price * quantity)}</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-2xl border-2 transition-colors ${
                    wished
                      ? 'bg-coral-50 border-coral-400 text-coral-600'
                      : 'bg-white border-cream-300 text-charcoal-700 hover:border-coral-400'
                  }`}
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wished ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-4 px-6 rounded-2xl bg-charcoal-900 hover:bg-tropical-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Zap className="w-4 h-4 text-sunshine-300" />
                <span>Buy Now — Express Checkout</span>
              </button>
            </div>
          </div>

          {/* Transparent Craft & Origin Verification Box */}
          <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 space-y-2 text-xs text-charcoal-700">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-tropical-600 shrink-0 mt-0.5" />
              <p>
                <strong className="text-charcoal-900">Craft &amp; Origin Transparency Note:</strong>{' '}
                {product.craftInfo?.verificationNote}
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
              <p>
                <strong className="text-charcoal-900">Care Guide:</strong>{' '}
                {product.craftInfo?.careInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications & Cultural Craft Information Tabs */}
      <div className="mt-12 bg-white rounded-3xl border border-cream-300 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap gap-2 border-b border-cream-200 pb-4 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('specifications')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors ${
              activeTab === 'specifications'
                ? 'bg-charcoal-900 text-white'
                : 'bg-cream-100 text-charcoal-700 hover:bg-cream-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Product Specifications</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('craft')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors ${
              activeTab === 'craft'
                ? 'bg-charcoal-900 text-white'
                : 'bg-cream-100 text-charcoal-700 hover:bg-cream-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Craft &amp; Cultural Story</span>
          </button>
        </div>

        {activeTab === 'specifications' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications?.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-cream-50 border border-cream-200 gap-1"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  {spec.label}
                </span>
                <span className="text-sm font-bold text-charcoal-900">{spec.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Sri Lankan Cultural Context &amp; Craft Information
            </h3>
            <p>{product.craftInfo?.culturalContext}</p>
            <div className="p-4 rounded-2xl bg-sunshine-50 border border-sunshine-200 text-xs text-sunshine-900">
              <strong>Verification Policy:</strong> In keeping with transparent merchandising standards, sample catalog products are not claimed to be individually handmade unless verified with a workshop certificate on physical stock.
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-6 pt-5 border-t border-cream-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-coral-500" />
          <span className="text-xs font-bold text-charcoal-500 mr-1">Product Tags:</span>
          {product.tags?.map((tag) => (
            <Link
              key={tag}
              to={`/shop?search=${encodeURIComponent(tag)}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-cream-100 hover:bg-coral-500 hover:text-white text-charcoal-700 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-coral-600 block mb-1">
              Complete Your Collection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              Related Sri Lankan Souvenirs
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs sm:text-sm font-bold text-charcoal-900 hover:text-coral-600 underline underline-offset-4"
          >
            View All &rarr;
          </Link>
        </div>

        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
};

export default ProductDetails;

