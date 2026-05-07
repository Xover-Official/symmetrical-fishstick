'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Cases', 'Chargers', 'Screen Guards', 'Cables', 'Audio', 'Power Banks']

const products = [
  { name: 'iPhone 15 Pro Max Clear Case', category: 'Cases', price: 1500, originalPrice: 2500, image: '📱', badge: 'Hot' },
  { name: 'Original Apple 20W Charger', category: 'Chargers', price: 3500, originalPrice: 5000, image: '🔌', badge: 'Genuine' },
  { name: 'Spigen Tempered Glass', category: 'Screen Guards', price: 800, originalPrice: 1200, image: '🛡️', badge: 'Best' },
  { name: 'Type-C to Lightning Cable', category: 'Cables', price: 1200, originalPrice: 2000, image: '🔗', badge: 'MFi' },
  { name: 'AirPods Pro 2 Silicone Case', category: 'Audio', price: 600, originalPrice: 1000, image: '🎧', badge: 'New' },
  { name: 'Baseus 20000mAh Power Bank', category: 'Power Banks', price: 4500, originalPrice: 6500, image: '🔋', badge: 'Hot' },
  { name: 'iPhone Leather Wallet Case', category: 'Cases', price: 2200, originalPrice: 3500, image: '👝', badge: 'Premium' },
  { name: 'Wireless Charger 15W', category: 'Chargers', price: 2800, originalPrice: 4000, image: '⚡', badge: 'Fast' },
  { name: 'Privacy Screen Protector', category: 'Screen Guards', price: 1000, originalPrice: 1500, image: '🔒', badge: 'New' },
  { name: 'Braided USB-C Cable', category: 'Cables', price: 900, originalPrice: 1500, image: '🧵', badge: 'Sale' },
  { name: 'Bluetooth Neckband', category: 'Audio', price: 2500, originalPrice: 3800, image: '🎵', badge: 'Popular' },
  { name: 'Anker Compact Power Bank', category: 'Power Banks', price: 3200, originalPrice: 4800, image: '📦', badge: 'Trusted' },
]

export default function Accessories() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="accessories" className="py-24 md:py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-specialist-orange/80 uppercase font-display">
            Premium Accessories
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            GEAR UP YOUR<br />
            <span className="gradient-text">iPHONE.</span>
          </h2>
          <p className="text-white/40 mt-4">100% original accessories. All products with warranty.</p>
          
          {/* Marquee Deal */}
          <div className="mt-8 bg-specialist-orange/10 border border-specialist-orange/20 rounded-full py-3 px-6 inline-block">
            <span className="text-specialist-orange text-sm font-medium">
              🔥 FLAT 20% OFF on all back covers! Use code: <strong>GILL20</strong>
            </span>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-specialist-orange text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-specialist-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
              
              {/* Image */}
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {product.image}
              </div>
              
              {/* Info */}
              <h3 className="text-white font-medium text-sm mb-2 group-hover:text-specialist-orange transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-specialist-orange font-display font-bold text-lg">
                  Rs. {product.price.toLocaleString()}
                </span>
                <span className="text-white/30 text-xs line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              </div>
              
              <button className="w-full py-2.5 bg-white/10 hover:bg-specialist-orange text-white text-sm font-medium rounded-lg transition-all duration-300 group/btn">
                <span className="group-hover/btn:hidden">Add to Cart</span>
                <span className="hidden group-hover/btn:inline">🛒 Buy Now</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Visit Shop CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-6">100+ more accessories available in store</p>
          <a
            href="https://maps.google.com/?q=Abrar+Market+Lahore"
            target="_blank"
            className="inline-flex items-center gap-2 pill-button border-2 border-white/20 hover:border-specialist-orange text-white px-8 py-4 text-lg"
          >
            📍 Visit Our Shop in Abrar Market, Lahore
          </a>
        </motion.div>
      </div>
    </section>
  )
}
