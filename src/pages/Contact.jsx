import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  Info,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons';
import vishLogo from '../assets/logo/vish-logo.png';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Vish Collection — Sri Lankan Handicrafts';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Product Inquiry',
      message: '',
    });
  };

  return (
    <div className="pb-20">
      {/* Header Banner */}
      <section className="bg-charcoal-900 text-white py-14 sm:py-20 relative overflow-hidden border-b border-charcoal-800">
        <div className="sri-lanka-border h-1.5 w-full absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <img src={vishLogo} alt="Vish Collection" className="w-6 h-6 rounded-full object-contain" />
            <span className="text-xs font-bold uppercase tracking-widest text-sunshine-300">
              Ayubowan • Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            Contact Vish Collection
          </h1>
          <p className="mt-3 text-sm sm:text-base text-cream-200 leading-relaxed">
            Have a question about our Sri Lankan handicrafts, bulk corporate gift boxes, or custom souvenir orders? Send us a message or connect via WhatsApp.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Contact Info, WhatsApp Button & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 card-editorial-shadow space-y-6">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sunshine-50 border border-sunshine-200 text-xs text-sunshine-900">
                <Info className="w-4 h-4 text-sunshine-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Editable Business Placeholders:</strong> Replace the placeholder phone, WhatsApp number, email, and address below with your verified business details.
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-charcoal-900">
                Business Contact Information
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-coral-50 text-coral-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal-900">Showroom &amp; Studio Location</p>
                    <p className="text-charcoal-600 text-xs sm:text-sm mt-0.5">
                      [Store Street Address, Colombo / Galle, Sri Lanka — Editable Placeholder]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-tropical-50 text-tropical-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal-900">Telephone / Hotline</p>
                    <p className="text-charcoal-600 text-xs sm:text-sm mt-0.5">
                      [+94 XX XXX XXXX — Editable Phone Placeholder]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal-900">Email Inquiries</p>
                    <p className="text-charcoal-600 text-xs sm:text-sm mt-0.5">
                      [hello@vishcollection-placeholder.lk — Editable Email]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sunshine-50 text-sunshine-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal-900">Showroom Hours</p>
                    <p className="text-charcoal-600 text-xs sm:text-sm mt-0.5">
                      [Monday – Saturday: 9:00 AM – 7:00 PM IST — Editable Placeholder]
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated WhatsApp Contact Button */}
              <div className="pt-4 border-t border-cream-200">
                <a
                  href="https://wa.me/?text=Ayubowan%20Vish%20Collection!%20I%20would%20like%20to%20inquire%20about%20your%20Sri%20Lankan%20handicrafts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp (Placeholder Link)</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-cream-200">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3">
                  Follow Vish Collection (Social Placeholders)
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: InstagramIcon, label: 'Instagram', bg: 'hover:bg-coral-500' },
                    { icon: FacebookIcon, label: 'Facebook', bg: 'hover:bg-ocean-600' },
                    { icon: YoutubeIcon, label: 'YouTube', bg: 'hover:bg-red-600' },
                    { icon: Globe, label: 'Website', bg: 'hover:bg-tropical-600' },
                  ].map((s) => {
                    const IconComp = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={`#${s.label.toLowerCase()}`}
                        onClick={(e) => e.preventDefault()}
                        className={`w-11 h-11 rounded-2xl bg-cream-100 text-charcoal-700 hover:text-white ${s.bg} flex items-center justify-center transition-colors`}
                        aria-label={s.label}
                      >
                        <IconComp className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 card-editorial-shadow">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mb-6">
                Fill out the form below and our team will respond to your inquiry as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-3xl bg-tropical-50 border border-tropical-200 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-tropical-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                    Bohoma Isthuthi! Message Received
                  </h3>
                  <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                    Thank you for contacting Vish Collection. Your message has been recorded in this frontend demo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-charcoal-900 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 XX XXX XXXX"
                        className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                      >
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Custom / Corporate Gift Order">Custom / Corporate Gift Order</option>
                        <option value="Order & Shipping Status">Order &amp; Shipping Status</option>
                        <option value="Wholesale Partnership">Wholesale Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us which Sri Lankan handicrafts or souvenirs you are interested in..."
                      className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-cream-300 text-sm focus:outline-none focus:border-coral-500"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps Section (Sri Lanka Map Embed Placeholder) */}
        <div className="mt-12 bg-white rounded-3xl p-4 sm:p-6 border border-cream-300 card-editorial-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-2">
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                Interactive Map — Sri Lanka (Editable Location Pin Placeholder)
              </h3>
              <p className="text-xs text-charcoal-500">
                Update the map coordinates once your physical showroom address is finalized.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-cream-100 text-charcoal-700 text-xs font-bold">
              Colombo / Galle Coast, Sri Lanka
            </span>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-cream-200 border border-cream-300">
            <iframe
              title="Sri Lanka Map Location Placeholder"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.7500%2C5.9500%2C80.8500%2C7.3500&amp;layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

