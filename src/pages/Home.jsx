import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Flame,
  Palette,
  Award,
  Quote,
  ExternalLink,
  Gift,
  HeartHandshake,
} from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import { categories } from '../data/categories';
import { products } from '../data/products';
import vishLogo from '../assets/logo/vish-logo.png';

const sampleTestimonials = [
  {
    id: 1,
    quote:
      '[Sample Review Template — Replace with verified customer feedback] "The colours on the Turtle and Tuk-Tuk magnets remind us every morning of our coastal trip down to Mirissa and Galle Fort."',
    author: 'Sample Traveller Feedback #1',
    location: 'Editable Reviewer Location Placeholder',
    item: 'Sri Lankan Turtle & Tuk-Tuk Magnets',
  },
  {
    id: 2,
    quote:
      '[Sample Review Template — Replace with verified customer feedback] "We displayed the Gini Raksha Yaka Mask and painted wooden elephant in our study. The packaging kept everything safe in our luggage."',
    author: 'Sample Collector Feedback #2',
    location: 'Editable Reviewer Location Placeholder',
    item: 'Traditional Sri Lankan Yaka Mask',
  },
  {
    id: 3,
    quote:
      '[Sample Review Template — Replace with verified customer feedback] "Ordered the Cultural Souvenir Collection as event gifts. Everyone loved the vibrant Sri Lankan motifs and storytelling cards."',
    author: 'Sample Gift Buyer Feedback #3',
    location: 'Editable Reviewer Location Placeholder',
    item: 'Sri Lankan Cultural Souvenir Collection',
  },
];

const instagramGallery = [
  {
    id: 'ig-1',
    image: '/images/hero-crafts.jpg',
    caption: 'Morning light across our Ambalangoda mask & Kandyan elephant table #VishCollectionLK',
    tag: '@vishcollection.lk (Placeholder)',
  },
  {
    id: 'ig-2',
    image: '/images/turtle-magnet.jpg',
    caption: 'Coastal turquoise & coral dot work on our Sea Turtle keepsake magnet',
    tag: 'Southern Coast Motifs',
  },
  {
    id: 'ig-3',
    image: '/images/tuktuk-magnet.jpg',
    caption: 'Sunshine yellow three-wheeler vibes — Sri Lanka’s favourite street icon!',
    tag: 'Tuk-Tuk Souvenir',
  },
  {
    id: 'ig-4',
    image: '/images/yaka-mask.jpg',
    caption: 'Fiery petals of the Gini Raksha motif — a bold statement piece for any wall',
    tag: 'Traditional Masks',
  },
  {
    id: 'ig-5',
    image: '/images/wooden-elephant.jpg',
    caption: 'Royal Esala Perahera filigree in gold, sapphire blue, and crimson',
    tag: 'Wooden Handicrafts',
  },
  {
    id: 'ig-6',
    image: '/images/tote-bag.svg',
    caption: 'Pack your beach essentials in our heavyweight Paradise Island cotton tote',
    tag: 'Island Lifestyle',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'Vish Collection | Discover the Colours of Sri Lanka — Handicrafts & Souvenirs';
  }, []);

  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* 3–6. Hero Section with Headline, Subtitle & CTAs */}
      <Hero />

      {/* 7. Featured Categories Section (All 8 Categories) */}
      <section
        id="featured-categories"
        className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coral-600 mb-2">
              <Compass className="w-4 h-4" />
              <span>Curated Island Departments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
              Explore Our 8 Souvenir Categories
            </h2>
          </div>
          <p className="text-sm text-charcoal-600 max-w-md">
            From pocket-sized coastal fridge magnets to statement traditional masks and carved timber figurines, browse by your favourite Sri Lankan theme.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* 8. Best Selling Products Section */}
      <section className="py-16 lg:py-24 bg-cream-200/60 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tropical-700 mb-2">
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span>Traveller Favourites</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                Best Selling Sri Lankan Keepsakes
              </h2>
            </div>
            <Link
              to="/shop?sort=popularity"
              className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-900 hover:text-coral-600 transition-colors"
            >
              <span>View All Best Sellers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* 10. Sri Lankan Craftsmanship Storytelling Section */}
      <section className="py-16 lg:py-24 bg-charcoal-900 text-cream-100 relative overflow-hidden">
        <div className="sri-lanka-border h-1.5 w-full absolute top-0 left-0" />
        <div className="pointer-events-none absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-coral-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -right-24 w-96 h-96 rounded-full bg-tropical-400/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Visual Collage (6 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-7 rounded-3xl overflow-hidden border-2 border-charcoal-700 shadow-2xl aspect-[4/5]">
                <img
                  src="/images/yaka-mask.jpg"
                  alt="Traditional Sri Lankan Gini Raksha Yaka Mask"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-charcoal-700 shadow-xl aspect-square">
                  <img
                    src="/images/wooden-elephant.jpg"
                    alt="Kandyan Painted Wooden Elephant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-coral-500 to-sunshine-500 p-5 text-charcoal-950 shadow-xl">
                  <img
                    src={vishLogo}
                    alt="Vish Collection Logo"
                    className="w-12 h-12 rounded-full object-contain mb-3 shadow-md"
                  />
                  <p className="font-serif font-extrabold text-lg leading-snug">
                    Centuries of Island Colour &amp; Folklore
                  </p>
                  <p className="text-xs font-semibold mt-1 opacity-90">
                    Kandy • Ambalangoda • Galle • Mirissa
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Storytelling Copy (6 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-sunshine-300 text-xs font-bold uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 text-coral-400" />
                <span>The Story Behind the Colours</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Where Traditional Sri Lankan Art Meets Modern Keepsakes
              </h2>

              <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
                Sri Lanka’s artistic heritage is written in bold brushstrokes — from the fiery solar petals of southern <em>Raksha</em> masks and the golden lotus caparisons of Kandy’s <em>Esala Perahera</em> elephants, to the joyful street graphics of island Tuk-Tuks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-charcoal-800/90 border border-charcoal-700">
                  <Palette className="w-6 h-6 text-coral-400 mb-2" />
                  <h3 className="font-serif font-bold text-white text-base">Vibrant Pigments</h3>
                  <p className="text-xs text-cream-300 mt-1 leading-relaxed">
                    Coral reds, saffron yellows, and Indian Ocean blues inspired by traditional temple murals.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-charcoal-800/90 border border-charcoal-700">
                  <Award className="w-6 h-6 text-sunshine-400 mb-2" />
                  <h3 className="font-serif font-bold text-white text-base">Cultural Motifs</h3>
                  <p className="text-xs text-cream-300 mt-1 leading-relaxed">
                    Every piece honours authentic island symbols — from sea turtles to Kandyan Ves dancers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-charcoal-800/90 border border-charcoal-700">
                  <HeartHandshake className="w-6 h-6 text-tropical-400 mb-2" />
                  <h3 className="font-serif font-bold text-white text-base">Honest Curation</h3>
                  <p className="text-xs text-cream-300 mt-1 leading-relaxed">
                    Transparent material specs and origin notes on every item in our catalog.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-7 py-3.5 rounded-full bg-sunshine-400 hover:bg-sunshine-300 text-charcoal-950 font-bold text-sm inline-flex items-center gap-2 transition-all"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/shop"
                  className="px-7 py-3.5 rounded-full border border-white/25 hover:bg-white/10 text-white font-bold text-sm inline-flex items-center gap-2 transition-all"
                >
                  <span>Browse Full Catalog</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. New Arrivals Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean-600 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Fresh in the Showroom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              New Arrivals &amp; Collector Editions
            </h2>
          </div>
          <Link
            to="/shop?sort=newest"
            className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-900 hover:text-coral-600 transition-colors"
          >
            <span>See All New Arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ProductGrid products={newArrivals} />
      </section>

      {/* 11. Promotional Banner */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-coral-600 via-coral-500 to-sunshine-500 text-white shadow-tropical-lg relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-charcoal-900/25 backdrop-blur-xs text-xs font-extrabold uppercase tracking-wider text-sunshine-100">
                <Gift className="w-3.5 h-3.5" />
                Curated Gift Box Bundle
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                The Complete Sri Lankan Cultural Souvenir Collection
              </h2>
              <p className="text-sm sm:text-base text-white/95 max-w-xl leading-relaxed">
                Can’t choose just one keepsake? Bring home our signature 4-piece heritage gift bundle pairing the Yaka mask, painted Ceylon elephant, miniature Tuk-Tuk, and coastal turtle.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/product/sl-cultural-collection-08"
                  className="px-7 py-4 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-sm inline-flex items-center gap-2 shadow-xl transition-all"
                >
                  <span>Explore Gift Bundle — LKR 12,500</span>
                  <ArrowRight className="w-4 h-4 text-sunshine-300" />
                </Link>
                <Link
                  to="/shop?category=Sri%20Lankan%20Cultural%20Gifts"
                  className="px-6 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition-all"
                >
                  View Cultural Gifts
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 h-full">
              <div className="h-72 lg:h-96 w-full overflow-hidden">
                <img
                  src="/images/cultural-collection.jpg"
                  alt="Sri Lankan Cultural Souvenir Collection"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 12. Customer Testimonials Section (Editable Sample Placeholders) */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunshine-100 text-sunshine-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Traveller Impressions (Sample Placeholders)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Loved by Island Visitors &amp; Gift Collectors
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-2">
            Note: The cards below are editable testimonial layout placeholders ready for verified customer reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 border border-cream-300 card-editorial-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5" />
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-charcoal-900">{item.author}</p>
                  <p className="text-xs text-charcoal-400">{item.location}</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-tropical-50 text-tropical-700">
                  {item.item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13. Instagram-Inspired Gallery Section */}
      <section className="py-16 bg-white border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coral-600 mb-2">
                <InstagramIcon className="w-4 h-4" />
                <span>#VishCollectionSriLanka</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                Island Lifestyle &amp; Souvenir Gallery
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full bg-cream-100 hover:bg-coral-500 hover:text-white text-charcoal-800 transition-colors"
            >
              <span>Shop the Feed</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramGallery.map((post) => (
              <Link
                key={post.id}
                to="/shop"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-cream-100 border border-cream-200 block"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                  <span className="text-[10px] font-bold text-sunshine-300 uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <p className="text-xs line-clamp-3 leading-snug">{post.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Newsletter Subscription Section */}
      <Newsletter />
    </div>
  );
};

export default Home;

