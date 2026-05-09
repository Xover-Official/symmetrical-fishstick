'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import SmoothScroll from '@/components/SmoothScroll'
import PageWrapper from '@/components/PageWrapper'
import ScrambleText from '@/components/ScrambleText'

const statusLogs = [
  'ENCRYPTING_LINK...',
  'SECURE_TUNNEL_ESTABLISHED',
  'UPLINK_NODE_ACTIVE',
  'GEO_LOCATION_VERIFIED',
  'COORDINATES_LOCKED: 31.5204°N, 74.3587°E',
  'BANDWIDTH_OPTIMAL',
  'LATENCY: 12ms',
  'PACKET_INTEGRITY: 100%',
  'PROTOCOL_HANDSHAKE_COMPLETE',
  'AWAITING_TRANSMISSION...',
]

const contactMethods = [
  { 
    icon: 'PHONE', 
    label: 'DIRECT_LINE', 
    value: '+92 323 1459121', 
    href: 'tel:+923231459121',
    status: 'ONLINE'
  },
  { 
    icon: 'WHATSAPP', 
    label: 'SECURE_MESSENGER', 
    value: '+92 323 1459121', 
    href: 'https://wa.me/923231459121',
    status: 'MONITORED'
  },
  { 
    icon: 'LOCATION', 
    label: 'PHYSICAL_NODE', 
    value: 'Shop #24, Abrar Market, Lahore', 
    href: 'https://maps.google.com/?q=Abrar+Market+Lahore',
    status: 'ACTIVE'
  },
  { 
    icon: 'HOURS', 
    label: 'OPERATING_WINDOW', 
    value: 'Mon-Sat: 11:00 - 21:00 PKT', 
    href: null,
    status: 'OPERATIONAL'
  },
]

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [currentLogIndex, setCurrentLogIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setShowCursor(true)
      setTimeout(() => {
        setCurrentLogIndex((prev) => (prev + 1) % statusLogs.length)
        setShowCursor(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  if (!mounted) return null

  return (
    <SmoothScroll>
      <PageWrapper>
        {/* Header with Parallax */}
        <section ref={containerRef} className="relative min-h-[70vh] flex items-center pt-fib-9 px-fib-4 md:px-fib-7 overflow-hidden">
          <motion.div 
            style={{ y: headerY }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-black/95 to-space-black" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.03) 0%, transparent 50%)`
            }} />
          </motion.div>

          <div className="absolute top-24 left-6 tech-label">
            UPLINK_INTERFACE_V2
          </div>
          <div className="absolute top-24 right-6 tech-label">
            CHANNEL_SECURE
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1440px] mx-auto w-full"
          >
            <div className="max-w-3xl">
              <span className="mono-text text-specialist-orange mb-fib-4 block">COMMUNICATION_PORTAL</span>
              <ScrambleText 
                as="h1" 
                text="Establish Uplink" 
                className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter mb-fib-6"
              />
              <p className="text-base md:text-lg text-titanium/60 font-body max-w-xl leading-relaxed">
                Direct communication channel to NODE_LAHORE. All transmissions are encrypted 
                and logged for reference. Response time: &lt; 4 hours during operational hours.
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-fib-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-fib-3 z-10">
            <span className="mono-text text-[8px] text-titanium/30">INITIATE_CONTACT</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-fib-4 bg-specialist-orange/50"
            />
          </div>
        </section>

        {/* GPS Coordinates Section */}
        <section className="relative py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="absolute top-12 left-6 tech-label">
            GEOGRAPHIC_POSITION
          </div>
          <div className="absolute top-12 right-6 tech-label">
            ACCURACY: ±3m
          </div>
          
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-fib-8">
              {/* Status Log */}
              <motion.div 
                initial={{ opacity: 0, x: -34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glassmorphism p-fib-6 border border-white/5"
              >
                <div className="flex items-center justify-between mb-fib-5">
                  <span className="mono-text text-specialist-orange">STATUS_LOG</span>
                  <div className="flex items-center gap-fib-2">
                    <span className="w-1.5 h-1.5 bg-live-green rounded-full animate-pulse" />
                    <span className="mono-text text-[8px] text-live-green">LIVE</span>
                  </div>
                </div>

                <div className="h-[200px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-black/80 z-10 pointer-events-none" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLogIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-sm text-titanium/80"
                    >
                      <span className="text-specialist-orange mr-fib-3">&gt;</span>
                      {statusLogs[currentLogIndex]}
                      {showCursor && <span className="animate-pulse">_</span>}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-fib-5 pt-fib-4 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-fib-4">
                    <div>
                      <span className="mono-text text-[8px] text-titanium/30 block mb-1">LATITUDE</span>
                      <span className="font-mono text-titanium">31.5204° N</span>
                    </div>
                    <div>
                      <span className="mono-text text-[8px] text-titanium/30 block mb-1">LONGITUDE</span>
                      <span className="font-mono text-titanium">74.3587° E</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Methods */}
              <motion.div 
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-fib-4"
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.icon}
                    href={method.href || undefined}
                    target={method.href?.startsWith('http') ? '_blank' : undefined}
                    rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 21 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`glassmorphism p-fib-5 border border-white/5 hover:border-specialist-orange/30 transition-all duration-500 group ${!method.href ? 'cursor-default' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-fib-3">
                      <span className="mono-text text-[8px] text-titanium/30">{method.icon}</span>
                      <span className={`mono-text text-[7px] ${method.status === 'OPERATIONAL' ? 'text-live-green' : 'text-specialist-orange'}`}>
                        {method.status}
                      </span>
                    </div>
                    <div className="text-[9px] mono-text text-titanium/40 mb-1">{method.label}</div>
                    <div className="text-sm text-titanium group-hover:text-specialist-orange transition-colors duration-500">
                      {method.value}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative py-fib-8 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-2xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-fib-7"
              >
                <span className="mono-text text-specialist-orange mb-fib-3 block">TRANSMISSION_FORM</span>
                <h2 className="text-4xl md:text-5xl font-display tracking-tighter">Send Transmission</h2>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 21 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-fib-5"
              >
                <div className="grid md:grid-cols-2 gap-fib-5">
                  <div className="space-y-fib-2">
                    <label className="mono-text text-[8px] text-titanium/30 block">IDENTIFIER (NAME)</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 px-fib-4 py-fib-3 font-mono text-sm text-titanium placeholder:text-titanium/20 focus:border-specialist-orange/50 focus:outline-none transition-colors duration-500"
                      placeholder="Enter your designation"
                    />
                  </div>
                  <div className="space-y-fib-2">
                    <label className="mono-text text-[8px] text-titanium/30 block">SIGNAL_POINT (EMAIL)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 px-fib-4 py-fib-3 font-mono text-sm text-titanium placeholder:text-titanium/20 focus:border-specialist-orange/50 focus:outline-none transition-colors duration-500"
                      placeholder="signal@point.domain"
                    />
                  </div>
                </div>

                <div className="space-y-fib-2">
                  <label className="mono-text text-[8px] text-titanium/30 block">TRANSMISSION_SUBJECT</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 px-fib-4 py-fib-3 font-mono text-sm text-titanium placeholder:text-titanium/20 focus:border-specialist-orange/50 focus:outline-none transition-colors duration-500"
                    placeholder="Brief description of inquiry type"
                  />
                </div>

                <div className="space-y-fib-2">
                  <label className="mono-text text-[8px] text-titanium/30 block">PAYLOAD (MESSAGE)</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 px-fib-4 py-fib-3 font-mono text-sm text-titanium placeholder:text-titanium/20 focus:border-specialist-orange/50 focus:outline-none transition-colors duration-500 resize-none"
                    placeholder="Detailed information regarding your inquiry..."
                  />
                </div>

                <div className="flex items-center justify-between pt-fib-3">
                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-fib-2"
                      >
                        <span className="w-1.5 h-1.5 bg-live-green rounded-full animate-pulse" />
                        <span className="mono-text text-[9px] text-live-green">TRANSMISSION_SENT</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-fib-7 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-fib-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">TRANSMITTING</span>
                        <span className="w-3 h-3 border border-space-black/30 border-t-space-black rounded-full animate-spin" />
                      </>
                    ) : (
                      'TRANSMIT'
                    )}
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="relative py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glassmorphism aspect-[21/9] relative overflow-hidden border border-white/5 group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-[2000ms]"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1600")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 via-transparent to-transparent" />
              
              {/* Grid Overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />

              {/* Coordinates Display */}
              <div className="absolute top-fib-5 left-fib-5 z-10">
                <span className="mono-text text-[8px] text-specialist-orange block mb-1">TARGET_COORDINATES</span>
                <span className="font-mono text-lg text-titanium">31.5204°N, 74.3587°E</span>
              </div>

              {/* Center Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 border border-specialist-orange rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-specialist-orange rounded-full" />
                  </div>
                </div>
              </div>

              {/* Location Label */}
              <div className="absolute bottom-fib-5 left-fib-5 z-10">
                <span className="mono-text text-[8px] text-titanium/30 block">NODE_LAHORE</span>
                <span className="text-xs text-titanium/60">Abrar Market, Mall Road</span>
              </div>

              {/* Navigate Button */}
              <a 
                href="https://maps.google.com/?q=31.5204,74.3587"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-fib-5 right-fib-5 z-10 px-fib-4 py-fib-2 border border-specialist-orange/50 text-specialist-orange mono-text text-[9px] hover:bg-specialist-orange hover:text-space-black transition-all duration-500"
              >
                OPEN_NAVIGATOR
              </a>
            </motion.div>
          </div>
        </section>

        {/* Session Info */}
        <div className="fixed bottom-12 left-6 z-50 pointer-events-none hidden md:block">
          <p className="mono-text text-[8px] text-white/20 mb-1">SESSION_ID</p>
          <p className="font-mono text-[10px] text-white/40">GILL-8839-UPLINK</p>
        </div>
        <div className="fixed bottom-12 right-6 z-50 pointer-events-none hidden md:block text-right">
          <p className="mono-text text-[8px] text-white/20 mb-1">LINK_STATUS</p>
          <p className="font-mono text-[10px] text-white/40">ENCRYPTED</p>
        </div>
      </PageWrapper>
    </SmoothScroll>
  )
}