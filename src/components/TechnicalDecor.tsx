'use client';

import React, { useEffect, useState } from 'react';

export const TechnicalDecor: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const plusPositions = [
    { top: '10%', left: '5%', rot: 45 },
    { top: '40%', left: '90%', rot: 0 },
    { top: '80%', left: '15%', rot: 90 },
    { top: '20%', left: '45%', rot: 15 },
    { top: '70%', left: '65%', rot: 30 },
    { top: '5%', left: '85%', rot: 120 },
    { top: '95%', left: '50%', rot: 60 },
    { top: '35%', left: '25%', rot: 200 },
    { top: '55%', left: '10%', rot: 10 },
    { top: '15%', left: '75%', rot: 75 },
    { top: '65%', left: '35%', rot: 45 },
    { top: '85%', left: '80%', rot: 180 },
    { top: '25%', left: '95%', rot: 270 },
    { top: '45%', left: '55%', rot: 330 },
    { top: '75%', left: '5%', rot: 15 },
  ];

  const dotPositions = [
    { top: '15%', left: '50%', op: 0.2 },
    { top: '60%', left: '20%', op: 0.1 },
    { top: '30%', left: '40%', op: 0.2 },
    { top: '10%', left: '10%', op: 0.15 },
    { top: '80%', left: '80%', op: 0.25 },
    { top: '50%', left: '50%', op: 0.05 },
    { top: '5%', left: '95%', op: 0.1 },
    { top: '95%', left: '5%', op: 0.1 },
    { top: '45%', left: '15%', op: 0.2 },
    { top: '25%', left: '85%', op: 0.15 },
    { top: '75%', left: '45%', op: 0.2 },
    { top: '12%', left: '30%', op: 0.1 },
    { top: '88%', left: '70%', op: 0.2 },
    { top: '33%', left: '77%', op: 0.15 },
    { top: '66%', left: '11%', op: 0.1 },
    { top: '22%', left: '66%', op: 0.2 },
    { top: '44%', left: '88%', op: 0.1 },
    { top: '77%', left: '22%', op: 0.25 },
    { top: '99%', left: '44%', op: 0.15 },
    { top: '11%', left: '99%', op: 0.1 },
    { top: '55%', left: '5%', op: 0.2 },
    { top: '5%', left: '55%', op: 0.1 },
    { top: '40%', left: '40%', op: 0.05 },
    { top: '60%', left: '60%', op: 0.1 },
    { top: '20%', left: '20%', op: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Scanning Lines */}
      <div className="scanning-line-h" style={{ animationDelay: '0s' }} />
      <div className="scanning-line-h" style={{ animationDelay: '3.5s', opacity: 0.3 }} />
      <div className="scanning-line-h" style={{ animationDelay: '7s', opacity: 0.15 }} />
      <div className="scanning-line-v" style={{ animationDelay: '1.2s' }} />
      <div className="scanning-line-v" style={{ animationDelay: '5.8s', opacity: 0.3 }} />
      <div className="scanning-line-v" style={{ animationDelay: '9.4s', opacity: 0.15 }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #E5E5E7 1px, transparent 1px), linear-gradient(to bottom, #E5E5E7 1px, transparent 1px)`,
             backgroundSize: '8.333% 8.333%' // 12x12 grid
           }} 
      />

      {/* Floating Markers - Plus Icons */}
      {plusPositions.map((pos, i) => (
        <div 
          key={`plus-${i}`}
          className="absolute opacity-[0.08]"
          style={{ 
            top: pos.top, 
            left: pos.left,
            transform: `rotate(${pos.rot}deg)`
          }}
        >
          <PlusIcon />
        </div>
      ))}

      {/* Micro Dots */}
      {dotPositions.map((pos, i) => (
        <div 
          key={`dot-${i}`}
          className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
          style={{ 
            top: pos.top, 
            left: pos.left,
            opacity: pos.op
          }}
        />
      ))}

      {/* Strategic Technical Labels */}
      <div className="absolute top-[20%] left-4 vertical-text tech-label opacity-10">COORD_REF_0349</div>
      <div className="absolute bottom-[20%] right-4 vertical-text tech-label opacity-10">SYS_AUTH_VERIFIED</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/[0.02] rounded-full" />
      
      {/* Background Depth - Radial Shifting */}
      <div className="mesh-gradient" />
      <div className="film-grain" />
    </div>
  );
};

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);
