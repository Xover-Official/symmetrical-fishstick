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
    <main className="relative min-h-screen bg-brand-bg text-brand-text">
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
