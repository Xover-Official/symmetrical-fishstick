'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedDivider from './AnimatedDivider'
import ScrambleText from './ScrambleText'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const pillars = [
  {
    id: '01',
    title: 'Curated Acquisition',
    desc: 'Expertly sourced, high-grade iPhones that meet our 45-point technical standard. We only deal in hardware of the highest integrity.',
    grid: 'md:col-span-8 md:row-span-1',
  },
  {
    id: '02',
    title: 'Strategic Buy-Back',
    desc: 'Fair market evaluation for your existing hardware. We provide a transparent bridge between generations.',
    grid: 'md:col-span-4 md:row-span-2',
  },
  {
    id: '03',
    title: 'Technical Restoration',
    desc: 'Clinical-grade repairs, micro-soldering, and performance optimization for the modern device. Bringing hardware back to its original intent.',
    grid: 'md:col-span-8 md:row-span-1',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-64 px-8 md:px-16 bg-charcoal-deep text-gold-champagne">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mono-text mb-4 text-gold-champagne/40">CORE_CAPABILITIES</div>
            <h2 className="text-5xl md:text-7xl font-display">Lab Services</h2>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="mono-text text-[9px] text-gold-champagne/40 leading-relaxed">
              OPERATING_WITHIN_MICRON_TOLERANCES
              <br />
              ESTABLISHED_TECHNICAL_STANDARDS_v2.0
            </p>
          </div>
        </div>

        <AnimatedDivider className="mb-12 opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className={`group relative p-8 md:p-12 border border-gold-champagne/10 hover:border-gold-champagne/30 transition-all duration-700 bg-charcoal-deep/50 backdrop-blur-sm flex flex-col justify-between min-h-[300px] ${pillar.grid}`}
            >
              <div className="flex justify-between items-start">
                <span className="mono-text text-xl text-gold-champagne/20">{pillar.id}</span>
                <div className="w-8 h-8 rounded-full border border-gold-champagne/20 flex items-center justify-center group-hover:bg-gold-champagne group-hover:text-charcoal-deep transition-all duration-500">
                  <span className="text-xs">→</span>
                </div>
              </div>
              
              <div>
                <ScrambleText 
                  as="h3" 
                  text={pillar.title} 
                  className="text-3xl md:text-4xl font-display mb-6 block"
                />
                <p className="text-gold-champagne/60 font-body text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {pillar.desc}
                </p>
              </div>

              {/* Decorative technical corner */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="mono-text text-[8px] text-gold-champagne/30 tracking-widest">
                  STATUS: VERIFIED_PROCESS
                </span>
              </div>
            </div>
          ))}
        </div>

        <AnimatedDivider className="mt-24 opacity-30" />
      </div>
    </section>
  )
}
