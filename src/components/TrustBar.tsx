'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

const trustItems = [
  { icon: '⭐', text: '4.9/5 Rating', subtext: '2,500+ Reviews' },
  { icon: '⚡', text: 'Same-Day Service', subtext: 'Most repairs' },
  { icon: '🛡️', text: '1-Year Warranty', subtext: 'All repairs' },
  { icon: '💎', text: 'Premium Parts', subtext: 'Apple-certified' },
  { icon: '🚀', text: '10,000+ iPhones', subtext: 'Restored to perfection' },
]

export default function TrustBar() {
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event if needed in the future
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-r from-space-black via-[#0A0A0A] to-space-black border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl mb-3 group-hover:text-specialist-orange transition-colors duration-300"
              >
                {item.icon}
              </motion.div>
              <div className="text-white font-semibold text-sm mb-1">{item.text}</div>
              <div className="text-white/40 text-xs">{item.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}