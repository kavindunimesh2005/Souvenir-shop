import React from 'react';
import ProductCard from './ProductCard';
import { PackageSearch } from 'lucide-react';

const ProductGrid = ({
  products,
  columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  emptyTitle = 'No Sri Lankan handicrafts match your current filters',
  emptySubtitle = 'Try clearing a category or adjusting the price range to explore more island treasures.',
  onResetFilters,
}) => {
  if (!products || products.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-cream-300 p-12 text-center my-6 shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center mx-auto mb-4">
          <PackageSearch className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">{emptyTitle}</h3>
        <p className="text-sm text-charcoal-500 max-w-md mx-auto mb-6">{emptySubtitle}</p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-6 py-3 rounded-full bg-charcoal-900 hover:bg-coral-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`grid ${columns} gap-6 sm:gap-7`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;

