import React, { useEffect } from 'react';
import { RotateCcw, Info } from 'lucide-react';

const Returns = () => {
  useEffect(() => {
    document.title = 'Return & Exchange Policy | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-cream-300 card-editorial-shadow space-y-6">
        <div className="space-y-3 pb-6 border-b border-cream-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-600 text-xs font-bold uppercase tracking-wider">
            <RotateCcw className="w-4 h-4" />
            <span>Returns &amp; Exchanges</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Return Policy
          </h1>
          <div className="p-4 rounded-2xl bg-sunshine-50 border border-sunshine-200 text-xs text-sunshine-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-sunshine-700 shrink-0 mt-0.5" />
            <span>
              <strong>Editable Policy Template:</strong> Customize the return window and conditions below to match your official store policy.
            </span>
          </div>
        </div>

        <div className="space-y-5 text-sm text-charcoal-700 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              1. Return Window (Placeholder)
            </h2>
            <p>
              We accept return or exchange requests within <strong>[X Days — e.g., 7 or 14 days]</strong> of delivery for unused, undamaged items in their original packaging with receipt or order reference.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              2. Damaged or Defective Items on Arrival
            </h2>
            <p>
              If a wooden carving, mask, or souvenir arrives damaged in transit, please contact us within 48 hours of receipt with photographs of the item and outer box so we can arrange a replacement or refund.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              3. Natural Variations in Wood &amp; Paintwork
            </h2>
            <p>
              Please note that natural timber grain, minor brushwork variations, and slight colour differences are inherent characteristics of decorative handicrafts and are not considered manufacturing defects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;

