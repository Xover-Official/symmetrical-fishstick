'use client';

import React from "react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-[#0A0A0A] to-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-specialist-orange/5 rounded-full blur-[120px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm tracking-[0.3em] text-specialist-orange/80 font-display uppercase"
            >
              — iPhone Specialists —
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mt-6 leading-[0.95]"
            >
              YOUR
              <br />
              <span className="gradient-text">iPhone.</span>
              <br />
              PERFECTED.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-lg mt-8 max-w-md leading-relaxed"
            >
              From a shattered screen to a brand-new battery — Gill Mobile doesn't just fix iPhones. We elevate them with surgical care.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a href="#value" className="pill-button bg-specialist-orange hover:bg-[#E55A2B] text-white px-8 py-4 text-lg animate-pulse-glow">
                Diagnose My iPhone
              </a>
              <a href="#services" className="pill-button border-2 border-white/20 hover:border-specialist-orange hover:text-specialist-orange text-white px-8 py-4 text-lg transition-all duration-300">
                Explore Services
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              {["10,000+ iPhones Revived", "Same-Day Service", "Apple-Certified Parts"].map((badge) => (
                <span key={badge} className="text-xs text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
                  ✓ {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
            {/* Right - 3D iPhone Space */}
            <div className="h-[500px] md:h-[600px] lg:h-[700px] relative pointer-events-none">
              {/* The actual model is rendered by CanvasContainer for scrollytelling */}
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-specialist-orange to-transparent"
        />
      </motion.div>
    </section>
  )
}

