'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Live Prices', href: '#live-prices' },
  { name: 'Repair', href: '#services' },
  { name: 'Accessories', href: '#accessories' },
  { name: 'Sell Phone', href: '#value' },
  { name: 'Reviews', href: '#testimonials' },
]

import { useMotionSettings } from '@/lib/useMotionSettings'
import MotionControls from '@/components/MotionControls'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [optionsOpen, setOptionsOpen] = useState(false)
  const {
    reduceMotion,
    disable3D,
    cursorEnabled,
    setReduceMotion,
    setDisable3D,
    setCursorEnabled,
  } = useMotionSettings()


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold tracking-tight">
            GILL<span className="text-specialist-orange">.</span>MOBILE
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-specialist-orange/70 border border-specialist-orange/30 rounded-full px-2 py-0.5">
            iPhone Specialist
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/60 hover:text-specialist-orange transition-colors duration-300 tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="pill-button bg-specialist-orange hover:bg-[#E55A2B] text-white px-6 py-2.5 text-sm animate-pulse-glow"
          >
            Book Genius
          </a>

          {/* Options trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOptionsOpen((v) => !v)}
              className="w-10 h-10 rounded-full glass-card hover:bg-white/10 border border-white/10 flex items-center justify-center"
              aria-label="Display options"
              aria-expanded={optionsOpen}
            >
              <span className="text-lg">⚙️</span>
            </button>
            {optionsOpen ? (
              <div
                onMouseLeave={() => setOptionsOpen(false)}
                onBlur={() => setOptionsOpen(false)}
                tabIndex={-1}
              >
                <MotionControls
                  reduceMotion={reduceMotion}
                  disable3D={disable3D}
                  cursorEnabled={cursorEnabled}
                  onReduceMotionChange={setReduceMotion}
                  onDisable3DChange={setDisable3D}
                  onCursorEnabledChange={setCursorEnabled}
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/70 hover:text-specialist-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="pill-button bg-specialist-orange text-white px-6 py-3 text-center"
              >
                Book Genius
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}