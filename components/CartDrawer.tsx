import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import LiquidButton from './LiquidButton';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: Product[];
    onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md glass-panel border-l border-white/20 z-50 transform transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                            <ShoppingBag className="w-6 h-6 text-cyan-400" />
                            Your Cart
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        {items.length === 0 ? (
                            <div className="text-center text-white/50 mt-10">
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            items.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm line-clamp-1 text-white">{item.title}</h4>
                                        <span className="text-cyan-300 text-sm">₹{item.price.toLocaleString('en-IN')}</span>
                                    </div>
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="p-2 text-white/60 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                        <div className="flex items-center justify-between text-lg font-bold text-white">
                            <span>Total</span>
                            <span className="text-cyan-400 text-glow">₹{total.toLocaleString('en-IN')}</span>
                        </div>
                        <LiquidButton className="w-full !rounded-xl" onClick={() => alert('Checkout not implemented')}>
                            Checkout Now
                        </LiquidButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
