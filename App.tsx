import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Background from './components/Background';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import FadeIn from './components/FadeIn';
import CartDrawer from './components/CartDrawer';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import RefundPage from './components/RefundPage';
import ShippingPage from './components/ShippingPage';
import { Product } from './types';
import { PRODUCTS } from './constants';
import { ShoppingBag, User } from 'lucide-react';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productTitle: string) => {
    const product = PRODUCTS.find(p => p.title === productTitle);
    if (product) {
      setCartItems(prev => [...prev, product]);
      setToastMessage(`${productTitle} added to cart!`);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    const index = cartItems.findIndex(item => item.id === id);
    if (index > -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

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

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cyan-500 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
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
                <ShopSection onAddToCart={handleAddToCart} />
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

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={handleRemoveFromCart}
        />
      </div>
    </Router>
  );
};

export default App;