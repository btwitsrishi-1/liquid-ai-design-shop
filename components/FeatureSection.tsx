import React from 'react';
import TiltCard from './TiltCard';
import { FEATURES } from '../constants';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The AI Advantage</h2>
          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
            Traditional workflows are rigid. Liquid design adapts, evolves, and accelerates your creative process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <TiltCard key={feature.id} className="min-h-[300px] flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                 <span className="text-sm font-mono text-cyan-400/80 flex items-center gap-2">
                   0{FEATURES.indexOf(feature) + 1} // SYS.INIT
                 </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;