'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Lenis from 'lenis'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Accessories from '@/components/Accessories'
import LivePrices from '@/components/LivePrices'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'
import gsap from 'gsap'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Magnetic Cursor Implementation
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      gsap.to(cursorRingRef.current, {
        x: clientX - 20,
        y: clientY - 20,
        duration: 0.5,
        ease: "power2.out"
      })
      
      gsap.to(cursorDotRef.current, {
        x: clientX - 2,
        y: clientY - 2,
        duration: 0.1,
        ease: "power2.out"
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      lenis.destroy()
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-space-black text-titanium selection:bg-titanium selection:text-space-black">
      {/* Background elements */}
      <div className="mesh-gradient" />
      <div className="film-grain" />
      
      {/* Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-specialist-orange/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-apple-blue/5 blur-[150px] rounded-full"
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-specialist-orange z-[10002] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <div ref={cursorRingRef} className="cursor-ring hidden md:block" />
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />

      {/* Technical Sidebars (Updated with Fibonacci spacing) */}
      <div className="fixed top-1/2 left-fib-4 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="mono-text text-[8px] text-titanium/20 vertical-text flex flex-col gap-fib-5 h-64 justify-between">
          <span>VISUAL_STORY_ENGINE_v4.0</span>
          <span className="h-fib-5 w-[1px] bg-titanium/20 mx-auto" />
          <span>PHI_RATIO_ACTIVE</span>
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
