import React, { useEffect } from 'react';
import { Truck, Globe, PackageCheck, Info } from 'lucide-react';

const Shipping = () => {
  useEffect(() => {
    document.title = 'Shipping Information | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-cream-300 card-editorial-shadow space-y-8">
        <div className="space-y-3 pb-6 border-b border-cream-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-50 text-ocean-700 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Delivery &amp; Dispatch Policy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900">
            Shipping Information
          </h1>
          <div className="p-4 rounded-2xl bg-sunshine-50 border border-sunshine-200 text-xs text-sunshine-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-sunshine-700 shrink-0 mt-0.5" />
            <span>
              <strong>Editable Shipping Template:</strong> Delivery timeframes, courier partners, and rate tables below are structured placeholders to be customized with your verified logistics provider.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
            <PackageCheck className="w-6 h-6 text-coral-500" />
            <h2 className="font-serif text-xl font-bold text-charcoal-900">
              Domestic Sri Lanka Delivery (Placeholder)
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              [Editable Domestic Timeline: e.g., X–Y business days within Colombo &amp; suburbs; X–Y business days islandwide via local courier partner.]
            </p>
            <p className="text-xs font-bold text-tropical-700 pt-1">
              Sample Rate Placeholder: LKR 650 flat rate (Complimentary above LKR 10,000)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
            <Globe className="w-6 h-6 text-ocean-600" />
            <h2 className="font-serif text-xl font-bold text-charcoal-900">
              International Souvenir Shipping (Placeholder)
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              [Editable International Policy: Calculated by parcel weight and destination zone via EMS / DHL / FedEx placeholder.]
            </p>
            <p className="text-xs font-bold text-ocean-700 pt-1">
              Custom export wrapping available for fragile wooden masks and statues.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <h3 className="font-serif text-xl font-bold text-charcoal-900">
            Protective Souvenir Packaging
          </h3>
          <p>
            Every wooden mask, painted elephant statue, and magnet set is cushioned with protective wrapping to help prevent chipping or moisture exposure during transit.
          </p>
          <h3 className="font-serif text-xl font-bold text-charcoal-900">
            Hotel &amp; Airport Drop-Off Inquiries (Placeholder)
          </h3>
          <p>
            Travelling through Sri Lanka on a tight itinerary? Contact our support team to arrange custom delivery coordination to your hotel or guesthouse (subject to verified courier availability).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

