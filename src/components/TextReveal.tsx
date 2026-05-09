'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

export default function TextReveal({ children, className = '', as: Tag = 'h1', delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const split = new SplitType(textRef.current, { types: 'lines,words' })
    
    gsap.from(split.words, {
      y: '100%',
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      split.revert()
    }
  }, [delay])

  return (
    <Tag ref={textRef} className={`text-reveal ${className}`}>
      {children}
    </Tag>
  )
}
