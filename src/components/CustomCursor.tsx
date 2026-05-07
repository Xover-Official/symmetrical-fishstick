'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor({
  enabled,
}: {
  enabled: boolean
}) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)


  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [isMobile, cursorX, cursorY])

  const canShow = !isMobile && enabled
  if (!canShow) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      {/* Ferrari-like cursor: small core + ring */}
      <motion.div
        animate={{
          width: isHovering ? 28 : 18,
          height: isHovering ? 28 : 18,
          borderRadius: '9999px',
          borderColor: isHovering ? '#FF6B35' : 'rgba(255,255,255,0.75)',
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className="-translate-x-1/2 -translate-y-1/2 border"
      />
      <motion.div
        animate={{
          opacity: isHovering ? 1 : 0.85,
          scale: isHovering ? 1.1 : 1,
          backgroundColor: isHovering ? '#FF6B35' : '#FFFFFF',
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
      />
    </motion.div>
  )
}
