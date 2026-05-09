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
    <section id="live-prices" className="py-fib-8 md:py-fib-9 px-fib-4 md:px-fib-7 bg-transparent text-titanium overflow-hidden relative">
      <div className="absolute top-12 left-6 tech-label">
        MARKET_NODE: LAHORE_01
      </div>
      <div className="absolute top-12 right-6 tech-label">
        DATA_SYNERGY: 100%
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-fib-7 opacity-5 pointer-events-none">
        <div className="mono-text text-[15vw] leading-none">DATA_FEED</div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-fib-7 flex flex-col md:flex-row md:items-end justify-between gap-fib-4">
          <div>
            <div className="mono-text mb-fib-2 text-specialist-orange">MARKET_VALUATION</div>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter">Live Indices</h2>
          </div>
          <div className="flex items-center gap-fib-2 mono-text text-[10px] text-live-green/60 bg-live-green/5 px-fib-4 py-fib-1 rounded-full border border-live-green/20">
            <span className="w-1.5 h-1.5 bg-live-green rounded-full animate-pulse" />
            REAL_TIME_STREAM_ACTIVE
          </div>
        </div>

        <div className="grid gap-1 py-fib-4 relative">
          <AnimatedDivider className="absolute top-0 left-0 opacity-20" />
          <AnimatedDivider className="absolute bottom-0 left-0 opacity-20" />
          <div className="grid grid-cols-3 pb-fib-4 mono-text text-[10px] text-titanium/30">
            <div>ASSET_MODEL</div>
            <div className="text-right">NEW_VALUATION (PKR)</div>
            <div className="text-right">RESTORED_VALUATION (PKR)</div>
          </div>
          
          {prices.map((phone) => (
            <div key={phone.model} className="grid grid-cols-3 items-center group py-fib-4 border-b border-titanium/5 last:border-0 hover:bg-white/[0.02] transition-colors">
              <div className="text-lg md:text-2xl font-display group-hover:pl-fib-2 transition-all duration-500">
                <ScrambleText text={phone.model} />
              </div>
              <div className="text-right mono-text text-xl md:text-2xl font-bold">
                {phone.newPrice.toLocaleString()}
              </div>
              <div className="text-right mono-text text-xl md:text-2xl text-titanium/40">
                {phone.usedPrice.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-fib-7 flex flex-col md:flex-row justify-between items-center gap-fib-4 mono-text text-[9px] text-titanium/30">
           <span>DISCLAIMER: VALUATIONS SUBJECT TO PHYSICAL HARDWARE AUDIT.</span>
           <span>UPDATE_INTERVAL: 5000MS</span>
        </div>
      </div>
    </section>
  )
}
