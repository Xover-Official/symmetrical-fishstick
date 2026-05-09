'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Jamshed Jutt',
    location: 'Ichhra, Lahore',
    quote: 'Superior restoration on my iPhone 15. The technical precision exceeded all expectations.',
  },
  {
    name: 'Ahmed Raza',
    location: 'Johar Town, Lahore',
    quote: 'Fair valuation and immediate acquisition. A transparent bridge between hardware generations.',
  },
  {
    name: 'Fatima Siddiqui',
    location: 'Model Town, Lahore',
    quote: 'Technical lab services recovered data I thought was lost forever. Truly a medical-grade operation.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
        setOpacity(1)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-32 md:py-64 px-8 md:px-16 bg-charcoal-deep text-gold-champagne">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="mono-text mb-4 text-gold-champagne/40">CLIENT_AUDIT</div>
            <h2 className="text-5xl md:text-7xl font-display">Testimonials</h2>
          </div>
        </div>

        <div className="min-h-[400px] flex flex-col justify-center border border-gold-champagne/10 p-12 relative overflow-hidden">
          {/* Decorative marks */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-champagne/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-champagne/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-champagne/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-champagne/40" />

          <p className={`text-3xl md:text-5xl font-display italic leading-relaxed mb-16 transition-all duration-700 ${opacity === 0 ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            "{testimonials[current].quote}"
          </p>
          <div className={`transition-all duration-700 ${opacity === 0 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-xl font-body tracking-wider uppercase">{testimonials[current].name}</p>
            <p className="mono-text text-[10px] text-gold-champagne/40 mt-2">{testimonials[current].location}</p>
          </div>

          <div className="absolute bottom-12 right-12 flex gap-2">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`h-[2px] transition-all duration-500 ${i === current ? 'w-12 bg-gold-champagne' : 'w-4 bg-gold-champagne/20'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
