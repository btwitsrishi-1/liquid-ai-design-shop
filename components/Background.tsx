import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (interactiveRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        // Using animate() for smooth hardware accelerated movement with a delay (heavy liquid feel)
        interactiveRef.current.animate({
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
        }, {
          duration: 4000,
          fill: "forwards",
          easing: "cubic-bezier(0.2, 0.8, 0.2, 1)"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-slate-950">
      {/* SVG Filter for Gooey Effect */}
      <svg className="hidden">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div 
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'url(#goo)' }}
      >
        {/* Static animated background blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/60 rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-500/60 rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[45rem] h-[45rem] bg-purple-600/60 rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-blue-600/60 rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-blob animation-delay-6000"></div>
        
        {/* Interactive Mouse Blob */}
        <div 
          ref={interactiveRef}
          className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-fuchsia-500/40 rounded-full mix-blend-screen filter blur-2xl opacity-50 pointer-events-none transition-transform will-change-transform"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></div>
      </div>
      
      {/* Overlay noise texture for glass feel */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default Background;