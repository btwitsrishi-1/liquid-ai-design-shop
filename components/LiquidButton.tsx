import React, { useState, MouseEvent } from 'react';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    
    if (onClick) onClick();
  };

  const baseClasses = "relative overflow-hidden transition-all duration-300 transform active:scale-95 font-semibold tracking-wide rounded-xl px-8 py-4 group";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)] border border-cyan-200/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
    : "glass-panel text-white hover:bg-white/10 border-white/20";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {isAnimating && (
        <span
          className="absolute rounded-full bg-white/40 pointer-events-none animate-splash"
          style={{
            left: coords.x,
            top: coords.y,
            width: '20px',
            height: '20px',
            marginLeft: '-10px',
            marginTop: '-10px',
          }}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </button>
  );
};

export default LiquidButton;