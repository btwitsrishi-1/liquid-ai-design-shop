import React from 'react';
import { PRODUCTS } from '../constants';
import TiltCard from './TiltCard';
import LiquidButton from './LiquidButton';
import { ShoppingBag } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (productTitle: string) => void;
}

const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="shop" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">The AI Toolkit Store</h2>
            <p className="text-blue-200/60">Supercharge your workflow with premium prompts and assets.</p>
          </div>
          <div className="glass-panel px-4 py-2 rounded-full text-sm text-white/80 border-white/10">
            {PRODUCTS.length} Products Available
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <TiltCard key={product.id} className="flex flex-col h-full group">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-black/20">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute top-3 left-3">
                   <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded border border-white/10 text-white">
                     {product.category}
                   </span>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{product.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-6">
                  <span className="text-2xl font-light text-cyan-300">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <LiquidButton 
                    variant="secondary" 
                    className="!px-4 !py-2 !rounded-lg"
                    onClick={() => onAddToCart(product.title)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </LiquidButton>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;