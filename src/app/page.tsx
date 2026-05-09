'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Accessories from '@/components/Accessories'
import LivePrices from '@/components/LivePrices'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { GlobalOperations } from '@/components/GlobalOperations'
import SmoothScroll from '@/components/SmoothScroll'
import PageWrapper from '@/components/PageWrapper'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  if (!mounted) return null

  return (
    <SmoothScroll>
      <PageWrapper>
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-white/40 z-[10002] origin-left"
          style={{ scaleX }}
        />

        {/* Floating Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <motion.div 
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-white/[0.03] blur-[150px] rounded-full"
          />
          <motion.div 
            animate={{
              x: [0, -150, 100, 0],
              y: [0, 150, -100, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-white/[0.02] blur-[180px] rounded-full"
          />
        </div>

        <Navbar />
        <Hero />
        <Services />
        <GlobalOperations />
        <LivePrices />
        <Accessories />
        <Testimonials />
        <Footer />
        
        {/* Global Metadata */}
        <div className="fixed bottom-12 left-6 z-50 pointer-events-none hidden md:block">
          <p className="mono-text text-[8px] text-white/20 mb-1">SESSION_ID</p>
          <p className="font-mono text-[10px] text-white/40">GILL-8839-X2</p>
        </div>
        <div className="fixed bottom-12 right-6 z-50 pointer-events-none hidden md:block text-right">
          <p className="mono-text text-[8px] text-white/20 mb-1">LOCAL_TIME</p>
          <p className="font-mono text-[10px] text-white/40">{new Date().toLocaleTimeString('en-US', { hour12: false })} PKT</p>
        </div>
      </PageWrapper>
    </SmoothScroll>
  )
}