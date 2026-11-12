import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import SearchBar from '../components/SearchBar';
import QuickViewModal from '../components/QuickViewModal';
import { useCart } from '../context/CartContext';

const MainLayout = () => {
  const { pathname, search } = useLocation();
  const { toast } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-900">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Interactive Global Modals & Drawers */}
      <CartDrawer />
      <SearchBar />
      <QuickViewModal />

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-charcoal-900 text-white px-4 py-3.5 rounded-2xl shadow-tropical-lg border border-charcoal-700 flex items-center gap-3"
          >
            {toast.type === 'info' ? (
              <Info className="w-5 h-5 text-sunshine-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-tropical-400 shrink-0" />
            )}
            <span className="text-xs sm:text-sm font-semibold">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;

