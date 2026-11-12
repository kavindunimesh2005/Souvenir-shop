import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Flame,
  Compass,
  Palette,
  HeartHandshake,
  Globe,
  ArrowRight,
  Award,
} from 'lucide-react';
import vishLogo from '../assets/logo/vish-logo.png';
import Newsletter from '../components/Newsletter';

const About = () => {
  useEffect(() => {
    document.title = 'About Us & Sri Lankan Craftsmanship | Vish Collection';
  }, []);

  const pillars = [
    {
      icon: Flame,
      title: 'Southern Mask Folklore',
      region: 'Ambalangoda Coastal Heritage',
      description:
        'Inspired by the dramatic Kolam and Raksha mask traditions of southern Sri Lanka, where vibrant pigments and expressive solar petals tell stories of protection, harmony, and good fortune.',
      color: 'bg-coral-50 text-coral-600 border-coral-200',
    },
    {
      icon: Award,
      title: 'Hill Country Royal Filigree',
      region: 'Kandyan Art & Perahera Pageantry',
      description:
        'Honouring the ceremonial splendour of Kandy’s Esala Perahera — where decorated elephants, Ves dancers, and Liya Vela floral scrolls shimmer in crimson, sapphire, and gold.',
      color: 'bg-sunshine-50 text-sunshine-700 border-sunshine-200',
    },
    {
      icon: Compass,
      title: 'Coastal & Street Icons',
      region: 'Mirissa, Galle & Colombo',
      description:
        'Celebrating contemporary island life through cheerful three-wheeler Tuk-Tuk miniatures, marine sea turtle keepsakes, and tropical cotton canvas totes.',
      color: 'bg-ocean-50 text-ocean-700 border-ocean-200',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Curation',
      region: 'Honest Souvenir Storytelling',
      description:
        'We believe in clear, honest product descriptions — distinguishing between verified artisan handcarvings and accessible travel keepsakes so every customer shops with confidence.',
      color: 'bg-tropical-50 text-tropical-700 border-tropical-200',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative bg-charcoal-900 text-white py-16 sm:py-24 border-b border-charcoal-800">
        <div className="sri-lanka-border h-1.5 w-full absolute top-0 left-0" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-coral-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-tropical-400/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15">
                <img
                  src={vishLogo}
                  alt="Vish Collection Official Logo"
                  className="w-7 h-7 rounded-full object-contain"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-sunshine-300">
                  Our Story • Vish Collection
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Sharing the Living Colours of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 via-sunshine-300 to-tropical-400">
                  Sri Lanka
                </span>{' '}
                with the World
              </h1>

              <p className="font-editorial italic text-2xl sm:text-3xl text-cream-200">
                “Every souvenir should carry the warmth of tropical sunlight and the soul of island storytelling.”
              </p>

              <p className="text-sm sm:text-base text-cream-300 leading-relaxed max-w-2xl">
                Founded with a passion for Sri Lanka’s rich visual culture, <strong className="text-white">Vish Collection</strong> curates vibrant handicrafts, traditional masks, painted elephant sculptures, and joyful travel keepsakes that let visitors and island lovers carry a meaningful piece of Ceylon home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-charcoal-700 shadow-2xl aspect-[4/3]">
                <img
                  src="/images/hero-crafts.jpg"
                  alt="Vish Collection Sri Lankan Handicrafts Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Story & Mission Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/yaka-mask.jpg"
                alt="Traditional Sri Lankan Yaka Mask"
                className="rounded-3xl w-full aspect-[4/5] object-cover shadow-md border border-cream-300"
              />
              <img
                src="/images/turtle-magnet.jpg"
                alt="Sea Turtle Keepsake Magnet"
                className="rounded-3xl w-full aspect-square object-cover shadow-md border border-cream-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/tuktuk-magnet.jpg"
                alt="Sri Lankan Tuk-Tuk Magnet"
                className="rounded-3xl w-full aspect-square object-cover shadow-md border border-cream-300"
              />
              <img
                src="/images/wooden-elephant.jpg"
                alt="Painted Wooden Elephant"
                className="rounded-3xl w-full aspect-[4/5] object-cover shadow-md border border-cream-300"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coral-600">
              <Palette className="w-4 h-4" />
              <span>An Island of Artistry</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              Why Sri Lankan Souvenirs Are Unlike Any Other in the World
            </h2>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              For over two millennia, Sri Lanka has stood at the crossroads of the Indian Ocean — developing distinct artistic traditions across its coastal villages, misty central highlands, and ancient temple cities.
            </p>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              At <strong>Vish Collection</strong>, our mission is to bring these regional inspirations together under one colourful roof. Whether you are searching for a pocket-sized Tuk-Tuk magnet that fits in your carry-on bag or a commanding Gini Raksha wall mask for your living room, our collection celebrates the unmistakable palette of coral orange, tropical emerald, ocean sapphire, and sunshine yellow.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-cream-300 card-editorial-shadow flex flex-col sm:flex-row items-center gap-5">
              <img
                src={vishLogo}
                alt="Vish Collection Logo"
                className="w-20 h-20 rounded-full object-contain shrink-0 shadow-md"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">
                  The Vish Collection Promise
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                  We pair joyful tropical aesthetics with clear product specifications, careful gift-ready packaging, and honest origin labeling across all 8 product categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Cultural Pillars */}
      <section className="py-16 lg:py-24 bg-white border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-tropical-600 block mb-2">
              Heritage &amp; Inspiration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Four Pillars of Our Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-3xl p-6 bg-cream-50 border border-cream-300 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${pillar.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                      {pillar.region}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm inline-flex items-center gap-2 shadow-glow-coral transition-all"
            >
              <span>Explore the Full Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default About;

