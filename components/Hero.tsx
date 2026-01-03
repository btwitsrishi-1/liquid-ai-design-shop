import React from 'react';
import LiquidButton from './LiquidButton';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="text-center max-w-5xl mx-auto space-y-10 z-10">
        <FadeIn direction="down">
          <div className="inline-block px-6 py-2 rounded-full glass-panel border border-cyan-400/30 text-cyan-200 text-sm font-semibold tracking-wide mb-6 animate-float shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            ✨ The Future of Design is Liquid
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.05]">
            <span className="text-white drop-shadow-xl block mb-2">Designing at</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 text-glow filter drop-shadow-lg italic pr-4">
              Speed of Thought
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            Fuse human creativity with raw AI horsepower. Unlock rapid ideation, generative textures, and infinite possibilities with our liquid ecosystem.
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <LiquidButton onClick={scrollToShop} className="scale-110">
              Explore the Shop <ArrowRight className="w-5 h-5" />
            </LiquidButton>
            <a href="#features" className="group text-white/70 hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span className="border-b border-transparent group-hover:border-cyan-300 transition-colors">Learn how it works</span>
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative gradient flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;