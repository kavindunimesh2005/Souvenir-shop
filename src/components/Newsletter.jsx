import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import vishLogo from '../assets/logo/vish-logo.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
    setName('');
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-charcoal-900 via-tropical-900 to-ocean-900 text-white p-8 sm:p-12 lg:p-16 shadow-tropical-lg border border-charcoal-800"
        >
          {/* Decorative Top Accent Bar */}
          <div className="sri-lanka-border h-2 w-full absolute top-0 left-0" />

          {/* Glowing Orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-coral-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sunshine-400/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15">
                <img
                  src={vishLogo}
                  alt="Vish Collection"
                  className="w-5 h-5 rounded-full object-contain"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-sunshine-300">
                  Vish Collection Island Dispatch
                </span>
                <Sparkles className="w-3.5 h-3.5 text-coral-400" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Stay Connected to the Colours of Sri Lanka
              </h2>

              <p className="text-sm sm:text-base text-cream-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Subscribe to our cultural postcard for stories behind Sri Lankan masks and woodcarvings, new souvenir releases, and seasonal collector editions.
              </p>
            </div>

            <div className="lg:col-span-5">
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-md border border-tropical-400/40 rounded-3xl p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-tropical-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Ayubowan &amp; Welcome!
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
                    You’ve been added to the Vish Collection newsletter list. Keep an eye on your inbox for colourful island stories.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-sunshine-300 underline underline-offset-4 pt-2"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-7 space-y-3.5"
                >
                  <div>
                    <label htmlFor="newsletter-name" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                      Your Name (Optional)
                    </label>
                    <input
                      id="newsletter-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Kasun / Maya"
                      className="w-full px-4 py-3 rounded-2xl bg-charcoal-900/80 border border-white/15 text-sm text-white placeholder:text-charcoal-400 focus:outline-none focus:border-sunshine-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="newsletter-email" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="you@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-charcoal-900/80 border border-white/15 text-sm text-white placeholder:text-charcoal-400 focus:outline-none focus:border-sunshine-400"
                      />
                    </div>
                    {error && <p className="text-xs text-coral-300 mt-1.5 font-medium">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-coral transition-all"
                  >
                    <span>Subscribe to Island Updates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-cream-300/80 text-center">
                    No spam, ever. Unsubscribe anytime with one click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

