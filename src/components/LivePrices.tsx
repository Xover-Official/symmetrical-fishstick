'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PhonePrice {
  model: string
  brand: string
  newPrice: number
  usedPrice: number
  lastUpdated: string
}

const livePrices: PhonePrice[] = [
  { model: 'iPhone 15 Pro Max', brand: 'Apple', newPrice: 580000, usedPrice: 350000, lastUpdated: '2 mins ago' },
  { model: 'iPhone 15 Pro', brand: 'Apple', newPrice: 480000, usedPrice: 290000, lastUpdated: '5 mins ago' },
  { model: 'iPhone 15', brand: 'Apple', newPrice: 380000, usedPrice: 230000, lastUpdated: '1 min ago' },
  { model: 'iPhone 14 Pro Max', brand: 'Apple', newPrice: 450000, usedPrice: 270000, lastUpdated: '3 mins ago' },
  { model: 'iPhone 14 Pro', brand: 'Apple', newPrice: 370000, usedPrice: 220000, lastUpdated: '4 mins ago' },
  { model: 'Samsung S24 Ultra', brand: 'Samsung', newPrice: 480000, usedPrice: 300000, lastUpdated: '6 mins ago' },
  { model: 'Samsung S23 Ultra', brand: 'Samsung', newPrice: 350000, usedPrice: 210000, lastUpdated: '2 mins ago' },
  { model: 'Google Pixel 8 Pro', brand: 'Google', newPrice: 320000, usedPrice: 190000, lastUpdated: '8 mins ago' },
  { model: 'OnePlus 12', brand: 'OnePlus', newPrice: 240000, usedPrice: 150000, lastUpdated: '10 mins ago' },
  { model: 'Xiaomi 14 Pro', brand: 'Xiaomi', newPrice: 220000, usedPrice: 130000, lastUpdated: '7 mins ago' },
]

export default function LivePrices() {
  const [prices, setPrices] = useState(livePrices)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'model' | 'newPrice' | 'usedPrice'>('model')

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        newPrice: p.newPrice + Math.floor(Math.random() * 2000 - 1000),
        usedPrice: p.usedPrice + Math.floor(Math.random() * 1500 - 750),
        lastUpdated: 'Just now',
      })))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const filtered = prices
    .filter(p => p.model.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'model') return a.model.localeCompare(b.model)
      return b[sortBy] - a[sortBy]
    })

  return (
    <section id="live-prices" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-live-green rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-live-green uppercase font-display">
              Live Market Prices
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            TODAY'S<br />
            <span className="gradient-text">PHONE RATES.</span>
          </h2>
          <p className="text-white/40 mt-4">Real-time updated prices. Rates change every 10 seconds based on market.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search any phone model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/20 focus:border-specialist-orange outline-none transition-colors"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'model' | 'newPrice' | 'usedPrice')}
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-specialist-orange outline-none cursor-pointer"
          >
            <option value="model">Sort by Name</option>
            <option value="newPrice">Sort by New Price ↓</option>
            <option value="usedPrice">Sort by Used Price ↓</option>
          </select>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-5 gap-4 p-5 bg-white/5 text-xs text-white/40 uppercase tracking-wider font-display">
            <div>Brand</div>
            <div>Model</div>
            <div className="text-right">New (PKR)</div>
            <div className="text-right">Used (PKR)</div>
            <div className="text-right">Updated</div>
          </div>

          <div className="divide-y divide-white/5">
            {filtered.map((phone, i) => (
              <motion.div
                key={phone.model}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-5 gap-4 p-5 hover:bg-white/5 transition-colors items-center"
              >
                <div className="text-white/40 text-sm">{phone.brand}</div>
                <div className="text-white font-medium text-sm">{phone.model}</div>
                <div className="text-right">
                  <span className="text-live-green font-display font-bold">
                    {phone.newPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-specialist-orange font-display font-bold">
                    {phone.usedPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-right text-white/20 text-xs">{phone.lastUpdated}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          * Prices are approximate and updated live. Contact us for exact buyback rates.
        </p>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/923231459121?text=Assalam-o-Alaikum!%20I%20want%20to%20sell%20my%20phone"
            target="_blank"
            className="inline-flex items-center gap-2 pill-button bg-[#25D366] hover:bg-[#1EA952] text-white px-8 py-4 font-bold"
          >
            💬 Get Exact Price on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
