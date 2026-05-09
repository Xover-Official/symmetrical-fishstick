'use client'

import { useState, useEffect } from 'react'
import ScrambleText from './ScrambleText'
import AnimatedDivider from './AnimatedDivider'

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
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-prices" className="py-32 md:py-64 px-8 md:px-16 bg-charcoal-deep text-gold-champagne overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
        <div className="mono-text text-[15vw] leading-none">DATA_FEED</div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mono-text mb-4 text-gold-champagne/40">MARKET_VALUATION</div>
            <h2 className="text-5xl md:text-7xl font-display">Live Indices</h2>
          </div>
          <div className="flex items-center gap-3 mono-text text-[10px] text-green-500/60 bg-green-500/5 px-4 py-2 rounded-full border border-green-500/20">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            REAL_TIME_STREAM_ACTIVE
          </div>
        </div>

        <div className="grid gap-1 py-8 relative">
          <AnimatedDivider className="absolute top-0 left-0 opacity-20" />
          <AnimatedDivider className="absolute bottom-0 left-0 opacity-20" />
          <div className="grid grid-cols-3 pb-8 mono-text text-[10px] text-gold-champagne/30">
            <div>ASSET_MODEL</div>
            <div className="text-right">NEW_VALUATION (PKR)</div>
            <div className="text-right">RESTORED_VALUATION (PKR)</div>
          </div>
          
          {prices.map((phone) => (
            <div key={phone.model} className="grid grid-cols-3 items-center group py-6 border-b border-gold-champagne/5 last:border-0">
              <div className="text-lg md:text-2xl font-display group-hover:pl-4 transition-all duration-500">
                <ScrambleText text={phone.model} />
              </div>
              <div className="text-right mono-text text-xl md:text-2xl font-bold">
                {phone.newPrice.toLocaleString()}
              </div>
              <div className="text-right mono-text text-xl md:text-2xl text-gold-champagne/40">
                {phone.usedPrice.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 mono-text text-[9px] text-gold-champagne/30">
           <span>DISCLAIMER: VALUATIONS SUBJECT TO PHYSICAL HARDWARE AUDIT.</span>
           <span>UPDATE_INTERVAL: 5000MS</span>
        </div>
      </div>
    </section>
  )
}
