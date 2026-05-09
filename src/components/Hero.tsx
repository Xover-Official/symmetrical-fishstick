'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrambleText from './ScrambleText'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        height: '100%',
        duration: 1.5,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden bg-charcoal-deep">
      {/* Ken Burns Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns opacity-40 grayscale"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070")' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/80 via-transparent to-charcoal-deep" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-20">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="overflow-hidden">
             <ScrambleText 
              as="h1" 
              text="PRECISION" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05] block"
            />
          </div>
          <div className="overflow-hidden md:pl-24 lg:pl-48">
            <ScrambleText 
              as="h1" 
              text="CRAFT" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05] block italic text-gold-champagne"
            />
          </div>
          <div className="overflow-hidden">
            <ScrambleText 
              as="h1" 
              text="RESTORATION" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05] block"
            />
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-16 items-end">
          <div className="max-w-md">
            <p className="text-sm md:text-base text-gold-champagne/70 leading-relaxed font-body tracking-wider uppercase">
              Gill Mobile Boutique & Technical Lab. 
              <br />
              High-end iPhone restoration and curated acquisition. 
              <br />
              Clinical precision. Bespoke service.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
             <div className="mono-text text-gold-champagne/40">
               SYSTEM_STATE: OPERATIONAL
               <br />
               LOCATION: 31.5204° N, 74.3587° E
             </div>
             <div className="flex gap-8">
               <a href="#services" className="text-[10px] uppercase tracking-ultra-wide group flex items-center gap-4 border-b border-gold-champagne/20 pb-2 hover:border-gold-champagne transition-colors duration-500">
                 Explore Services
                 <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
               </a>
               <a href="https://wa.me/923231459121" className="text-[10px] uppercase tracking-ultra-wide group flex items-center gap-4 border-b border-gold-champagne/20 pb-2 hover:border-gold-champagne transition-colors duration-500">
                 Consultation
                 <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
               </a>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="mono-text text-[8px] vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-gold-champagne/20 relative overflow-hidden">
          <div ref={lineRef} className="absolute top-0 left-0 w-full h-0 bg-gold-champagne" />
        </div>
      </div>

      {/* Floating coordinates corner */}
      <div className="absolute bottom-12 left-8 md:left-16 hidden md:block">
        <div className="mono-text text-[9px] text-gold-champagne/30 leading-loose">
          REF: GMB-TL-2024
          <br />
          LAB_ID: 024-ABRAR
        </div>
      </div>
    </section>
  )
}
