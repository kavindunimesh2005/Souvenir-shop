import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';

const CategoryCard = ({ category, index = 0 }) => {
  const count = products.filter(
    (p) => p.category === category.slug || (p.categories && p.categories.includes(category.slug))
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
    >
      <Link
        to={`/shop?category=${encodeURIComponent(category.slug)}`}
        className="group relative block rounded-3xl overflow-hidden bg-charcoal-900 aspect-[4/4.4] shadow-tropical hover:shadow-tropical-lg transition-all duration-300"
      >
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90"
        />

        {/* Multi-Stop Tropical Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/35 to-transparent" />

        {/* Top Count Pill & Arrow */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-xs text-charcoal-900 shadow-xs">
            {count} {count === 1 ? 'Item' : 'Items'}
          </span>
          <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs text-white group-hover:bg-coral-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        {/* Bottom Category Title & Description */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${category.accentColor} mb-2.5 group-hover:w-16 transition-all duration-300`} />
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-sunshine-300 transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="mt-1.5 text-xs text-cream-200/90 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;

