import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-cream-300 card-editorial-shadow space-y-6">
        <div className="space-y-3 pb-6 border-b border-cream-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tropical-50 text-tropical-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Data Protection &amp; Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-400">
            Editable Privacy Policy Template • Vish Collection
          </p>
        </div>

        <div className="space-y-5 text-sm text-charcoal-700 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you browse or place an order on Vish Collection, we collect only the details necessary to fulfill your request — such as your name, delivery address, email address, and phone number. Cart and wishlist selections are stored locally in your browser via <code>localStorage</code>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact and delivery details are used solely to process orders, coordinate courier dispatch, and respond to customer service inquiries. If you opt into our newsletter, we may send occasional updates about new Sri Lankan handicraft collections.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
              3. Payment Security
            </h2>
            <p>
              We do not store raw payment card numbers on our servers. Online payment integrations (when activated) are processed through encrypted third-party payment gateways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

