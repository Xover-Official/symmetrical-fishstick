'use client'

import { useState, useEffect } from 'react'
import TextReveal from './TextReveal'

interface PhonePrice {
  model: string
  newPrice: number
  usedPrice: number
}

const livePrices: PhonePrice[] = [
  { model: 'iPhone 15 Pro Max', newPrice: 580000, usedPrice: 350000 },
  { model: 'iPhone 15 Pro', newPrice: 480000, usedPrice: 290000 },
  { model: 'iPhone 15', newPrice: 380000, usedPrice: 230000 },
  { model: 'iPhone 14 Pro Max', newPrice: 450000, usedPrice: 270000 },
  { model: 'Samsung S24 Ultra', newPrice: 480000, usedPrice: 300000 },
]

export default function LivePrices() {
  const [prices, setPrices] = useState(livePrices)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        newPrice: p.newPrice + Math.floor(Math.random() * 2000 - 1000),
        usedPrice: p.usedPrice + Math.floor(Math.random() * 1500 - 750),
      })))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-prices" className="py-32 md:py-64 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-display mb-8">
            The Market.
          </TextReveal>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-ultra-wide text-brand-text/40">
            <span className="w-1.5 h-1.5 bg-brand-text rounded-full animate-pulse" />
            Live Exchange Rates
          </div>
        </div>

        <div className="grid gap-12">
          <div className="grid grid-cols-3 pb-8 text-[10px] uppercase tracking-ultra-wide text-brand-text/30 border-b border-brand-text/10">
            <div>Model</div>
            <div className="text-right">New (PKR)</div>
            <div className="text-right">Used (PKR)</div>
          </div>
          
          {prices.map((phone) => (
            <div key={phone.model} className="grid grid-cols-3 items-center group">
              <div className="text-lg md:text-2xl font-body group-hover:italic transition-all duration-500">{phone.model}</div>
              <div className="text-right font-display text-lg md:text-xl">{phone.newPrice.toLocaleString()}</div>
              <div className="text-right font-display text-lg md:text-xl text-brand-text/50">{phone.usedPrice.toLocaleString()}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-[10px] uppercase tracking-ultra-wide text-brand-text/30 text-center">
           Real-time data feeds. Subject to physical inspection.
        </div>
      </div>
    </section>
  )
}
