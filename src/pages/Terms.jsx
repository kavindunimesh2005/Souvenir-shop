import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-cream-300 card-editorial-shadow space-y-6">
        <div className="space-y-3 pb-6 border-b border-cream-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-100 text-charcoal-800 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Storefront Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-charcoal-400">
            Editable Terms &amp; Conditions Template • Vish Collection Sri Lanka
          </p>
        </div>

        <div className="space-y-5 text-sm text-charcoal-700 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              1. General Use of Storefront
            </h2>
            <p>
              Welcome to Vish Collection. By accessing our website and placing orders, you agree to these Terms &amp; Conditions. Product descriptions, sample prices in LKR, and availability are subject to update without prior notice.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              2. Product Representation &amp; Craft Verification
            </h2>
            <p>
              We strive to display the colours and textures of our Sri Lankan handicrafts as accurately as possible. Sample catalog products are not claimed to be genuinely handmade unless verified on the physical item’s documentation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              3. Pricing &amp; Payment
            </h2>
            <p>
              All prices are listed in Sri Lankan Rupees (LKR) unless stated otherwise. Orders placed via Cash on Delivery or online payment placeholders are subject to verification before dispatch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

