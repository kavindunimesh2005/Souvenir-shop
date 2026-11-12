import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What types of Sri Lankan souvenirs does Vish Collection offer?',
    a: 'We curate 8 signature departments: Sri Lankan Animal Souvenirs, Fridge Magnets (Turtle, Tuk-Tuk, Fire Dancer, Elephant), Wooden Handicrafts, Traditional Masks (Yaka/Raksha motifs), Tote Bags, Sri Lankan Cultural Gifts, Handmade Decorations, and Travel Souvenirs.',
  },
  {
    q: 'Are all products in the sample catalog individually handmade?',
    a: 'Each product page includes a transparent Craft & Origin note. While many designs draw from traditional Sri Lankan woodcarving and mask-painting heritage, sample catalog items are not claimed to be individually handmade unless verified on the physical item’s workshop certificate.',
  },
  {
    q: 'What currency are prices displayed in?',
    a: 'All prices across the website are displayed in Sri Lankan Rupees (LKR). Sample prices in the current catalog are realistic editable placeholders.',
  },
  {
    q: 'Are the wooden masks and elephant statues safe to pack in checked luggage?',
    a: 'Yes! Items are designed to be wrapped in protective eco-bubble and kraft packaging suitable for travel suitcases. Specific dimensions and weights are listed on every individual product page.',
  },
  {
    q: 'Which payment methods are supported at checkout?',
    a: 'Our checkout supports Cash on Delivery (LKR) and includes an Online Payment Gateway placeholder ready to connect to your preferred Sri Lankan or international payment processor.',
  },
  {
    q: 'Can I request bulk corporate gifts or wedding keepsake bundles?',
    a: 'Absolutely. Visit our Contact Us page to send a custom or corporate gift inquiry, and our team will assist with tailored gift box options.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    document.title = 'Frequently Asked Questions | Vish Collection Sri Lanka';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 text-coral-600 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Customer Support Center</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto">
          Everything you need to know about our Sri Lankan handicrafts, packaging, pricing, and policies.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-cream-300 overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-cream-50 transition-colors"
              >
                <span className="font-serif text-lg font-bold text-charcoal-900">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-coral-500 shrink-0 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-charcoal-600 leading-relaxed border-t border-cream-200 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-charcoal-900 text-white rounded-3xl p-8 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold">Still Have a Question?</h2>
        <p className="text-xs sm:text-sm text-cream-300 max-w-md mx-auto">
          Reach out to our team via our contact form or WhatsApp support placeholder.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Contact Support</span>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;

