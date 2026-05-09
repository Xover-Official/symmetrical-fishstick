'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Repairs', href: '#services' },
  { name: 'Prices', href: '#live-prices' },
  { name: 'Accessories', href: '#accessories' },
  { name: 'Contact', href: '#contact' },
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
      scrolled ? 'py-4 bg-brand-bg/80 backdrop-blur-md' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="text-xl font-display tracking-widest-plus uppercase text-brand-text">
          Gill Mobile
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-ultra-wide text-brand-text/60 hover:text-brand-text transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-[11px] uppercase tracking-ultra-wide">
          Menu
        </button>
      </div>
    </nav>
  )
}
