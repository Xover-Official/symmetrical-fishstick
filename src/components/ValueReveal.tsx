'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const valueSteps = [
  {
    title: 'Device Analysis',
    description: 'Our AI-powered diagnostic scans your iPhone in seconds, detecting every issue.',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Value Calculation',
    description: 'We calculate your iPhone\'s true market value based on condition, specs, and demand.',
    icon: '💎',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Repair Estimate',
    description: 'Get instant repair quotes for any issues found during the diagnostic.',
    icon: '🔧',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Final Decision',
    description: 'Choose to repair, sell, or trade-in. We handle everything with white-glove service.',
    icon: '✨',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function ValueReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const step = Math.floor(progress * valueSteps.length)
      setActiveStep(Math.min(step, valueSteps.length - 1))
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <section id="value" ref={containerRef} className="relative py-32 bg-gradient-to-b from-space-black to-[#0A0A0A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-specialist-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] text-specialist-orange/80 font-display uppercase">
            — Instant Value Reveal —
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-6 gradient-text">
            Know Your iPhone's Worth
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Upload photos or bring your device in. Our experts reveal your iPhone's true value in minutes.
          </p>
        </motion.div>

        {/* Sticky Progress Container */}
        <div className="sticky top-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Steps */}
            <div className="space-y-8">
              {valueSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    index === activeStep
                      ? 'bg-gradient-to-r from-specialist-orange/10 to-specialist-orange/5 border-specialist-orange/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        scale: index === activeStep ? 1.1 : 1,
                        backgroundColor: index === activeStep ? '#FF6B35' : '#FFFFFF'
                      }}
                      className="text-2xl p-3 rounded-xl"
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-white mb-2">iPhone Value Calculator</h3>
                  <div className="text-4xl font-bold gradient-text mb-4">$1,247</div>
                  <p className="text-white/60">Estimated Market Value</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Condition</span>
                    <span className="text-specialist-orange font-semibold">Excellent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Storage</span>
                    <span className="text-white">256GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Model</span>
                    <span className="text-white">iPhone 15 Pro</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 pill-button bg-specialist-orange hover:bg-[#E55A2B] text-white py-4 animate-pulse-glow"
                >
                  Get Exact Quote
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-4 -right-4 text-4xl"
              >
                💎
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 text-3xl"
              >
                ⭐
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}