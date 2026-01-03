import React, { useRef, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Accessibility check
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!cardRef.current || !glowRef.current) return;

    // Use current requestAnimationFrame to prevent stacking updates if needed, 
    // though usually browsers handle this. canceling previous ensures latest data is used.
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const card = cardRef.current;
    const glow = glowRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rafRef.current = requestAnimationFrame(() => {
      const rotateX = ((y - centerY) / centerY) * -10; // Invert for natural tilt
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Update specular reflection
      // Using opacity 1 when active, but gradient moves
      glow.style.background = `radial-gradient(circle at ${50 - rotateY * 5}% ${50 - rotateX * 5}%, rgba(255,255,255,0.15), transparent 60%)`;
      glow.style.opacity = '1';
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel rounded-2xl p-6 transition-transform duration-200 ease-out transform-gpu relative overflow-hidden ${className}`}
    >
      {/* Specular reflection gradient */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 60%)`,
          opacity: 0
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;