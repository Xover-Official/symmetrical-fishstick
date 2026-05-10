'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Laboratory', href: '/lab' },
  { name: 'Collection', href: '/collection' },
  { name: 'Uplink', href: '/uplink' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-fib-2 bg-space-black/95 backdrop-blur-xl border-b border-white/5' : 'py-fib-4 bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto px-fib-4 md:px-fib-7 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex flex-col group"
          aria-label="Gill Mobile Boutique - Home"
        >
          <span className="text-xl md:text-2xl font-display tracking-widest-plus uppercase text-titanium group-hover:text-specialist-orange transition-colors duration-500">
            Gill Boutique
          </span>
          <span className="mono-text text-[7px] text-specialist-orange tracking-[0.4em] -mt-1">TECHNICAL_LAB_LHR</span>
        </Link>

        <div className="hidden md:flex items-center gap-fib-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-ultra-wide text-titanium/50 hover:text-titanium transition-colors duration-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-fib-4">
          <Link 
            href="/services?action=estimate"
            className="hidden lg:flex items-center gap-fib-2 px-fib-5 py-fib-2 bg-specialist-orange text-space-black font-display text-[9px] uppercase tracking-widest hover:bg-titanium transition-all duration-500 min-w-[140px] justify-center"
            aria-label="Get a quote for repair services"
          >
            <span>Get a Quote</span>
            <svg 
              className="w-3 h-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <div className="hidden lg:block mono-text text-[8px] text-titanium/30 text-right">
            SRVR_LHR_01
            <br />
            v4.0.0_STORY
          </div>
          
          <button 
            className="md:hidden text-[10px] uppercase tracking-ultra-wide text-titanium p-fib-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-space-black/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-fib-4 py-fib-5 flex flex-col gap-fib-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-ultra-wide text-titanium/70 hover:text-titanium transition-colors duration-500 py-fib-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/services?action=estimate"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-fib-2 px-fib-5 py-fib-3 bg-specialist-orange text-space-black font-display text-[9px] uppercase tracking-widest hover:bg-titanium transition-all duration-500 min-h-[44px]"
              >
                <span>Get a Quote</span>
                <svg 
                  className="w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}