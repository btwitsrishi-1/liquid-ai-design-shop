import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '50px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
        switch(direction) {
            case 'up': return 'translateY(40px)';
            case 'down': return 'translateY(-40px)';
            case 'left': return 'translateX(40px)';
            case 'right': return 'translateX(-40px)';
            default: return 'none';
        }
    }
    return 'translate(0) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;