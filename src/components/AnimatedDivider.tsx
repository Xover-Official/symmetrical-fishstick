'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedDividerProps {
  className?: string
}

export default function AnimatedDivider({ className = '' }: AnimatedDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dividerRef.current) return

    gsap.fromTo(dividerRef.current, 
      { scaleX: 0 },
      { 
        scaleX: 1, 
        duration: 1.5, 
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 95%',
        }
      }
    )
  }, [])

  return (
    <div 
      ref={dividerRef}
      className={`h-[1px] bg-gold-champagne/20 w-full origin-left ${className}`}
    />
  )
}
