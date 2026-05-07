'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🔐',
    title: 'Genuine Parts',
    desc: 'We use only Apple-original or OEM-grade components. Never compromised. Your iPhone deserves authenticity.',
  },
  {
    icon: '🎖️',
    title: 'Certified Specialists',
    desc: 'Our technicians live and breathe iPhone architecture. Years of board-level expertise you can trust.',
  },
  {
    icon: '🛡️',
    title: '90-Day Warranty',
    desc: 'We don\'t just fix it and forget it. 90 days of complete peace of mind. If anything fails, we own it.',
  },
  {
    icon: '⚡',
    title: 'Same Day Service',
    desc: 'Most restorations completed in under 45 minutes. Wait in our lounge with a coffee, or come back later.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-specialist-orange/80 uppercase font-display">
            Why Gill Mobile
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            THE <span className="gradient-text">iPHONE DIFFERENCE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 md:p-10 flex gap-6 items-start group cursor-default"
            >
              <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-500">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-specialist-orange transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}