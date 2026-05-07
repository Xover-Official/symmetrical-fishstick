'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const services = [
  {
    icon: '🔧',
    title: 'Display Restoration',
    desc: 'OLED & Liquid Retina screen replacement with True Tone calibration. Your display, reborn.',
    price: '₹2,499',
  },
  {
    icon: '🔋',
    title: 'Battery Resurrection',
    desc: 'Genuine Apple-grade cells. Health back to 100%. No more 3pm anxiety.',
    price: '₹1,999',
  },
  {
    icon: '💧',
    title: 'Water Damage Recovery',
    desc: 'Ultrasonic cleaning. Logic board revival. We bring drowned iPhones back to life.',
    price: '₹1,499',
  },
  {
    icon: '🧬',
    title: 'Chip-Level Surgery',
    desc: 'Micro-soldering. Face ID restoration. Data recovery from dead boards.',
    price: '₹2,999',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 })

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set((mouseX / width) - 0.5)
    y.set((mouseY / height) - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="glass-card glass-card-hover p-8 md:p-10 cursor-pointer group perspective-1000"
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 translate-z-60 preserve-3d">
        {service.icon}
      </div>
      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-specialist-orange transition-colors translate-z-40">
        {service.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed mb-6 translate-z-20">
        {service.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-specialist-orange font-display font-bold text-lg">
          from {service.price}
        </span>
        <span className="text-white/0 group-hover:text-specialist-orange transition-all duration-300 text-sm font-medium flex items-center gap-1 -translate-x-4 group-hover:translate-x-0">
          Book Now →
        </span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-specialist-orange/80 uppercase font-display">
            Restoration Programs
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            PRECISION CARE FOR<br />
            <span className="gradient-text">EVERY GENERATION.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}