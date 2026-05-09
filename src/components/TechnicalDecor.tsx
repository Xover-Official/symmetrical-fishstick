'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TechnicalDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Scanning Lines */}
      <div className="scanning-line-h" style={{ animationDelay: '0s' }} />
      <div className="scanning-line-h" style={{ animationDelay: '5s', opacity: 0.5 }} />
      <div className="scanning-line-v" style={{ animationDelay: '2s' }} />
      <div className="scanning-line-v" style={{ animationDelay: '8s', opacity: 0.5 }} />

      {/* Floating Markers */}
      <div className="absolute top-[10%] left-[5%] opacity-20">
        <PlusIcon />
      </div>
      <div className="absolute top-[40%] right-[10%] opacity-10">
        <PlusIcon />
      </div>
      <div className="absolute bottom-[20%] left-[15%] opacity-15">
        <PlusIcon />
      </div>
      <div className="absolute top-[80%] right-[5%] opacity-20">
        <PlusIcon />
      </div>

      {/* Micro Dots */}
      <div className="absolute top-[15%] left-[50%] w-1 h-1 bg-white/20 rounded-full" />
      <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-white/10 rounded-full" />
      <div className="absolute bottom-[30%] right-[40%] w-1 h-1 bg-white/20 rounded-full" />
      
      {/* Background Depth - Radial Shifting */}
      <div className="mesh-gradient" />
      <div className="film-grain" />
    </div>
  );
};

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" />
  </svg>
);
