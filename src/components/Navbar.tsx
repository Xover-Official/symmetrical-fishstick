'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Laboratory', href: '#services' },
  { name: 'Market Data', href: '#live-prices' },
  { name: 'Components', href: '#accessories' },
  { name: 'Consultation', href: 'https://wa.me/923231459121' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'py-fib-2 bg-space-black/90 backdrop-blur-xl border-b border-white/5' : 'py-fib-6 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-fib-4 md:px-fib-7 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#" className="text-xl md:text-2xl font-display tracking-widest-plus uppercase text-titanium">
            Gill Boutique
          </a>
          <span className="mono-text text-[7px] text-specialist-orange tracking-[0.4em] -mt-1">TECHNICAL_LAB_LHR</span>
        </div>

        <div className="hidden md:flex items-center gap-fib-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-ultra-wide text-titanium/50 hover:text-titanium transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-fib-4">
           <div className="hidden lg:block mono-text text-[8px] text-titanium/30 text-right">
             SRVR_LHR_01
             <br />
             v4.0.0_STORY
           </div>
           <button className="md:hidden text-[10px] uppercase tracking-ultra-wide text-titanium">
             [ MENU ]
           </button>
        </div>
      </div>
    </nav>
  )
}
