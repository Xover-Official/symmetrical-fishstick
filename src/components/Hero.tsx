'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrambleText from './ScrambleText'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const textY = useTransform(scrollY, [0, 1000], [0, 400])
  const imageY = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-fib-4 md:px-fib-7 overflow-hidden bg-transparent pt-fib-9 pb-fib-8"
    >
      {/* Massive Background Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1 
          style={{ y: textY }}
          className="text-[25vw] font-display font-black text-white/[0.02] leading-none tracking-tighter"
        >
          PRECISION
        </motion.h1>
      </div>

      {/* Parallax Macro Visual */}
      <motion.div 
        style={{ y: imageY, opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 md:w-1/2 h-[80vh] z-10 hidden md:block"
      >
        <div 
          className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-30"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200")',
            maskImage: 'radial-gradient(circle, black, transparent 80%)'
          }}
        />
      </motion.div>

      <div className="absolute top-24 left-6 tech-label">
        CORE_TEMP: 32C
      </div>
      <div className="absolute top-24 right-6 tech-label">
        LINK_STRENGTH: 99%
      </div>
      <div className="relative z-20 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-fib-2 md:gap-fib-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mono-text text-specialist-orange mb-fib-3 block">HIGH_DEFINITION_VISUAL_STORY</span>
            <ScrambleText 
              as="h1" 
              text="THE ART OF" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] block tracking-tighter"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:pl-fib-7"
          >
            <ScrambleText 
              as="h1" 
              text="RESTORATION" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] block italic text-titanium tracking-tighter"
            />
          </motion.div>
        </div>
        
        <div className="mt-fib-8 grid md:grid-cols-2 gap-fib-7 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="max-w-md"
          >
            <p className="text-base md:text-lg text-titanium/60 leading-relaxed font-body">
              Engineered for those who demand absolute fidelity. We specialize in the clinical restoration of Apple hardware, where every micron matters and every detail tells a story.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start md:items-end gap-fib-4"
          >
             <div className="mono-text text-titanium/30 text-right">
               ESTABLISHED_IN_LAHORE
               <br />
               ABRAR_MARKET_STUDIO_24
             </div>
             <div className="flex gap-fib-4">
               <Link href="/lab" className="h-fib-5 px-fib-5 bg-titanium text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-specialist-orange hover:text-white transition-all duration-700 cursor-pointer flex items-center">
                 View Laboratory
               </Link>
               <Link href="/services" className="h-fib-5 px-fib-5 border border-titanium/20 text-titanium font-display text-[10px] uppercase tracking-widest hover:border-titanium transition-all duration-700 cursor-pointer flex items-center">
                 Technical Brief
               </Link>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Fibonacci Scroll Indicator */}
      <div className="absolute bottom-fib-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-fib-3">
        <span className="mono-text text-[8px] vertical-text opacity-40">STORY_SCROLL</span>
        <div className="w-[1px] h-fib-6 bg-titanium/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            className="absolute top-0 left-0 w-full h-full bg-specialist-orange" 
          />
        </div>
      </div>
    </section>
  )
}
