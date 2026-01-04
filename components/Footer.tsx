import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-tight text-white">
          Arre<span className="text-blue-500">X</span>ar
        </div>

        <div className="flex gap-8 text-sm text-white/50">
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/refund" className="hover:text-white transition-colors">Refunds</Link>
          <Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link>
        </div>

        <div className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} ArreXar Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;