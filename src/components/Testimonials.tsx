'use client'

import { useState, useEffect } from 'react'
import TextReveal from './TextReveal'

const testimonials = [
  {
    name: 'Jamshed Jutt',
    location: 'Ichhra, Lahore',
    quote: 'Bhai mera iPhone 14 Pro Max ka screen toot gaya tha. Gill Mobile ne 45 minute mein aisi changing ki ke phone bilkul naya lag raha hai.',
  },
  {
    name: 'Ahmed Raza',
    location: 'Johar Town, Lahore',
    quote: 'Maine apna purana iPhone 13 bechna tha. Gill Mobile ne 95 hazar ka rate diya. FULL CASH diya. Ye log sach mein best hain.',
  },
  {
    name: 'Fatima Siddiqui',
    location: 'Model Town, Lahore',
    quote: 'Mera iPhone pani mein gir gaya tha. Gill Mobile ne 2 din mein sahi kar diya, sara data bhi safe tha. Magicians hain ye log!',
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
    <section id="testimonials" className="py-32 md:py-64 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-display mb-8">
            Voices.
          </TextReveal>
          <div className="horizontal-divider" />
        </div>

        <div className="min-h-[300px] flex flex-col justify-center">
          <p className={`text-3xl md:text-5xl font-display italic leading-relaxed mb-12 transition-opacity duration-500 ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}>
            "{testimonials[current].quote}"
          </p>
          <div className={`transition-opacity duration-500 ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg font-body tracking-wide">{testimonials[current].name}</p>
            <p className="text-[11px] uppercase tracking-ultra-wide text-brand-text/40">{testimonials[current].location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
