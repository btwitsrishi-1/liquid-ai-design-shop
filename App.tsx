import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Background from './components/Background';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import FadeIn from './components/FadeIn';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import RefundPage from './components/RefundPage';
import ShippingPage from './components/ShippingPage';
import { User, ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <Router>
      <div className="relative w-full min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-100 cursor-default">
        <Background />

        {/* Floating Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-float" style={{ animationDuration: '8s' }}>
          <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl border border-white/20">
            <Link to="/" className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
              Arre<span className="text-blue-500 text-glow">X</span>ar
            </Link>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-xs font-mono text-cyan-200/80 tracking-widest uppercase hidden sm:block">
              BETA v1.0
            </div>

            <div className="flex items-center gap-4">
              <Link to="/shop" className="text-xs font-bold text-white/80 hover:text-white transition-colors uppercase tracking-wider hidden sm:block">
                Shop
              </Link>
              <Link to="/contact" className="text-xs font-bold text-white/80 hover:text-white transition-colors uppercase tracking-wider hidden sm:block">
                Contact
              </Link>
              <Link to="/login" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>

        <main className="relative z-10 flex flex-col pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FadeIn className="w-full">
                  <FeatureSection />
                </FadeIn>
              </>
            } />
            <Route path="/shop" element={
              <FadeIn className="w-full">
                <ShopSection />
              </FadeIn>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
          </Routes>

          <Footer />
        </main>

        {toastMessage && (
          <Toast
            key={Date.now()}
            message={toastMessage}
            onClose={() => setToastMessage(null)}
          />
        )}
      </div>
    </Router>
  );
};

export default App;