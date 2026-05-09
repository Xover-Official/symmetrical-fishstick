'use client'

import TextReveal from './TextReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col gap-8">
          <TextReveal as="h1" className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05]">
            Precision.
          </TextReveal>
          <TextReveal as="h1" delay={0.2} className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05] pl-0 md:pl-24 lg:pl-48 italic">
            Care.
          </TextReveal>
          <TextReveal as="h1" delay={0.4} className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.05]">
            Revival.
          </TextReveal>
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-end">
          <div className="max-w-md">
            <TextReveal as="p" delay={0.8} className="text-lg md:text-xl text-brand-text/70 leading-relaxed font-body tracking-wide">
              Specialized iPhone restoration and premium accessories. Located in the heart of Abrar Market, Lahore.
            </TextReveal>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
             <a href="#services" className="text-[11px] uppercase tracking-ultra-wide group flex items-center gap-4 border-b border-brand-text/20 pb-2 hover:border-brand-text transition-colors duration-500">
               View Services
               <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
             </a>
             <a href="https://wa.me/923231459121" className="text-[11px] uppercase tracking-ultra-wide group flex items-center gap-4 border-b border-brand-text/20 pb-2 hover:border-brand-text transition-colors duration-500">
               Get in touch
               <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
             </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-brand-text/40">
        <span>Abrar Market, Lahore</span>
        <span>Est. 2018</span>
      </div>
    </section>
  )
}
