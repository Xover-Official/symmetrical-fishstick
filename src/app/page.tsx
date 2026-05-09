'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Lenis from 'lenis'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Accessories from '@/components/Accessories'
import LivePrices from '@/components/LivePrices'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-charcoal-deep text-gold-champagne selection:bg-gold-champagne selection:text-charcoal-deep">
      {/* Global Technical Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] border border-gold-champagne/5 m-4 box-border hidden md:block" />
      
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="mono-text text-[8px] text-gold-champagne/20 vertical-text flex flex-col gap-8 h-64 justify-between">
          <span>HARDWARE_AUDIT_LOG_00129</span>
          <span className="h-12 w-[1px] bg-gold-champagne/20 mx-auto" />
          <span>COORDS_31.5204_74.3587</span>
        </div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <LivePrices />
      <Accessories />
      <Testimonials />
      <Footer />
    </main>
  )
}
