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
      
      const targets = document.querySelectorAll('button, a, .cursor-pointer')
      let isOverTarget = false
      let targetRect: DOMRect | null = null

      targets.forEach(target => {
        const rect = target.getBoundingClientRect()
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          isOverTarget = true
          targetRect = rect
        }
      })

      if (isOverTarget && targetRect) {
        const { left, top, width, height } = targetRect as DOMRect
        const centerX = left + width / 2
        const centerY = top + height / 2
        
        gsap.to(cursorRingRef.current, {
          x: centerX - 30,
          y: centerY - 30,
          width: 60,
          height: 60,
          duration: 0.3,
          ease: "power2.out"
        })
      } else {
        gsap.to(cursorRingRef.current, {
          x: clientX - 20,
          y: clientY - 20,
          width: 40,
          height: 40,
          duration: 0.5,
          ease: "power2.out"
        })
      }
      
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
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-specialist-orange/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-apple-blue/5 blur-[180px] rounded-full"
        />
        <motion.div 
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-titanium/5 blur-[120px] rounded-full"
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

      {/* Technical Sidebars */}
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
