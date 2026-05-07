'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
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
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-space-black text-titanium">
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