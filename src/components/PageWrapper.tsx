'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen bg-brand-bg text-brand-text selection:bg-brand-text selection:text-brand-bg">
      {children}
    </div>
  )
}