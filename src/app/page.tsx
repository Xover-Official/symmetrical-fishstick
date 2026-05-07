'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Lenis from '@studio-freight/lenis'
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Environment3D = dynamic(() => import('@/components/Environment3D'), { ssr: false })
const CanvasContainer = dynamic(() => import('@/components/CanvasContainer'), { ssr: false })
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import ValueReveal from '@/components/ValueReveal'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { useMotionSettings } from '@/lib/useMotionSettings'
import WhatsAppButton from '@/components/WhatsAppButton'

import LivePrices from '@/components/LivePrices'
import Accessories from '@/components/Accessories'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { reduceMotion, cursorEnabled } = useMotionSettings()


  useEffect(() => {
    setMounted(true)
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
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
    <main className="relative min-h-screen bg-space-black text-titanium">
      <CanvasContainer />
      <Environment3D />
      <CustomCursor enabled={cursorEnabled && !reduceMotion} />
      <Navbar />
      <Hero />
      <TrustBar />
      <LivePrices />
      <Services />
      <Accessories />
      <ValueReveal />
      <WhyUs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />

    </main>
  )
}