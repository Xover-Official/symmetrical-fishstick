'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import PageWrapper from '@/components/PageWrapper'
import ScrambleText from '@/components/ScrambleText'

const labSections = [
  {
    id: 'diagnostic',
    title: 'Diagnostic Protocol',
    subtitle: 'Phase 01',
    description: 'Every device entering our laboratory undergoes comprehensive biometric scanning. Our proprietary algorithms analyze 847 data points across hardware architecture, software fidelity, and structural integrity.',
    metrics: [
      { label: 'SCAN_DEPTH', value: '847', unit: 'data points' },
      { label: 'ANALYSIS_TIME', value: '12', unit: 'minutes' },
      { label: 'ACCURACY', value: '99.7', unit: '%' },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    imageAlt: 'Circuit board macro photography',
  },
  {
    id: 'surgical',
    title: 'Surgical Intervention',
    subtitle: 'Phase 02',
    description: 'Board-level restoration demands micron-precision. Our technical surgeons operate in ISO-5 cleanroom conditions, wielding surgical-grade instruments to repair trace fractures, replace components, and reball graphics processors.',
    metrics: [
      { label: 'CLEANROOM_CLASS', value: 'ISO-5', unit: 'class 100' },
      { label: 'PRECISION', value: '0.01', unit: 'mm tolerance' },
      { label: 'SUCCESS_RATE', value: '97.3', unit: '%' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    imageAlt: 'Precision surgery tools and microscope',
  },
  {
    id: 'calibration',
    title: 'Post-Op Calibration',
    subtitle: 'Phase 03',
    description: 'Restoration is only complete when performance matches factory specifications. We run 48-hour stress protocols, validate sensor accuracy, and ensure thermal management operates within design parameters.',
    metrics: [
      { label: 'STRESS_DURATION', value: '48', unit: 'hours' },
      { label: 'VALIDATION_TESTS', value: '234', unit: 'checks' },
      { label: 'THERMAL_RANGE', value: '35-42', unit: 'celsius' },
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
    imageAlt: 'Technical calibration equipment',
  },
]

const equipment = [
  { name: 'Thermal Reballing Station', ref: 'TR-4700X', precision: '±0.5°C' },
  { name: 'Microscope Array', ref: 'MX-PRO 12K', precision: '0.001mm' },
  { name: 'Ultrasonic Cleaner', ref: 'UC-NANO', precision: '40kHz' },
  { name: 'Programmer Suite', ref: 'PGM-V9', precision: 'Native' },
  { name: 'Power Supply Unit', ref: 'PSU-3000', precision: '0.01V' },
  { name: 'Soldering Arsenal', ref: 'SA-TECH', precision: 'JBC Grade' },
]

export default function Lab() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <SmoothScroll>
      <PageWrapper>
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-specialist-orange z-[10002] origin-left"
          style={{ scaleX }}
        />

        {/* Hero Section */}
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-fib-9 px-fib-4 md:px-fib-7 overflow-hidden">
          {/* Background Parallax Layer */}
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
            alt="Abstract technical visualization"
            className="absolute inset-0 z-0"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-space-black/60 via-space-black/40 to-space-black z-10" />
          
          <div className="absolute top-24 left-6 tech-label">
            SURGICAL_RESTORATION_V4
          </div>
          <div className="absolute top-24 right-6 tech-label">
            OPERATING_ROOM_ACTIVE
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 max-w-[1440px] mx-auto w-full"
          >
            <div className="grid lg:grid-cols-2 gap-fib-8 items-center">
              <div>
                <span className="mono-text text-specialist-orange mb-fib-4 block">TECHNICAL_LABORATORY</span>
                <ScrambleText 
                  as="h1" 
                  text="Surgical Restoration" 
                  className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter mb-fib-6"
                />
                <p className="text-base md:text-lg text-titanium/60 font-body max-w-lg leading-relaxed mb-fib-7">
                  Where precision meets artistry. Our laboratory operates at the intersection of clinical science 
                  and technical excellence, restoring devices to their original architectural intent.
                </p>
                <div className="flex flex-wrap gap-fib-4">
                  <div className="glassmorphism px-fib-5 py-fib-3">
                    <span className="mono-text text-[8px] text-specialist-orange block">ACTIVE_CASES</span>
                    <span className="font-mono text-2xl text-titanium">23</span>
                  </div>
                  <div className="glassmorphism px-fib-5 py-fib-3">
                    <span className="mono-text text-[8px] text-live-green block">SUCCESS_RATE</span>
                    <span className="font-mono text-2xl text-titanium">97.3%</span>
                  </div>
                  <div className="glassmorphism px-fib-5 py-fib-3">
                    <span className="mono-text text-[8px] text-titanium/40 block">AVG_TURNAROUND</span>
                    <span className="font-mono text-2xl text-titanium">72h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-fib-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-fib-3 z-20">
            <span className="mono-text text-[8px] text-titanium/30">PROTOCOL_SECTIONS</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-fib-5 bg-specialist-orange/50"
            />
          </div>
        </section>

        {/* Lab Sections */}
        {labSections.map((section, index) => (
          <LabSection key={section.id} section={section} index={index} />
        ))}

        {/* Equipment Arsenal */}
        <section className="relative py-fib-9 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="absolute top-12 left-6 tech-label">
            EQUIPMENT_REGISTRY
          </div>
          <div className="absolute top-12 right-6 tech-label">
            CALIBRATION_STATUS: NOMINAL
          </div>
          
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-fib-7"
            >
              <span className="mono-text text-specialist-orange mb-fib-3 block">TECHNICAL_ARSENAL</span>
              <h2 className="text-5xl md:text-7xl font-display tracking-tighter">Equipment Registry</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-fib-4">
              {equipment.map((item, index) => (
                <motion.div
                  key={item.ref}
                  initial={{ opacity: 0, y: 21 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism p-fib-5 border border-white/5 hover:border-specialist-orange/30 transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-fib-3">
                    <div className="w-8 h-8 border border-specialist-orange/30 flex items-center justify-center group-hover:bg-specialist-orange/10 transition-colors duration-500">
                      <span className="mono-text text-[8px] text-specialist-orange">{index + 1}</span>
                    </div>
                    <span className="mono-text text-[8px] text-titanium/30">{item.ref}</span>
                  </div>
                  <h3 className="text-base font-display uppercase tracking-wide mb-fib-2">{item.name}</h3>
                  <div className="flex items-center gap-fib-2">
                    <span className="mono-text text-[8px] text-titanium/40">PRECISION</span>
                    <span className="mono-text text-[9px] text-live-green">{item.precision}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="relative py-fib-7 px-fib-4 md:px-fib-7 bg-white/[0.01]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-fib-8"
            >
              <span className="mono-text text-specialist-orange mb-fib-3 block">WORKFLOW_ARCHITECTURE</span>
              <h2 className="text-4xl md:text-6xl font-display tracking-tighter">Restoration Pipeline</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row items-stretch gap-fib-2">
              {['INTAKE', 'ANALYSIS', 'REPAIR', 'CALIBRATE', 'CERTIFY'].map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, x: -21 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1 glassmorphism p-fib-4 text-center relative group"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-space-black border border-specialist-orange flex items-center justify-center">
                    <span className="mono-text text-[8px] text-specialist-orange">{index + 1}</span>
                  </div>
                  <div className="pt-fib-2">
                    <span className="mono-text text-[10px] text-titanium/60">{stage}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-fib-1 w-fib-2 h-[1px] bg-white/10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-fib-9 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mono-text text-specialist-orange mb-fib-4 block">CASE_SUBMISSION</span>
              <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-fib-6">Submit Your Device</h2>
              <p className="text-titanium/50 max-w-xl mx-auto mb-fib-7">
                Our technical team will conduct a preliminary assessment and provide 
                a detailed restoration proposal within 24 hours.
              </p>
              <a 
                href="https://wa.me/923231459121?text=Hi, I need to submit a device for surgical restoration"
                className="inline-block px-fib-7 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all duration-700"
              >
                Initiate Case
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Session Info */}
        <div className="fixed bottom-12 left-6 z-50 pointer-events-none hidden md:block">
          <p className="mono-text text-[8px] text-white/20 mb-1">SESSION_ID</p>
          <p className="font-mono text-[10px] text-white/40">GILL-8839-LAB</p>
        </div>
        <div className="fixed bottom-12 right-6 z-50 pointer-events-none hidden md:block text-right">
          <p className="mono-text text-[8px] text-white/20 mb-1">LAB_STATUS</p>
          <p className="font-mono text-[10px] text-live-green">OPERATIONAL</p>
        </div>
      </PageWrapper>
    </SmoothScroll>
  )
}

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <motion.div className={className} style={{ y }}>
      <div 
        className="w-full h-full bg-cover bg-center grayscale contrast-110 opacity-20"
        style={{ backgroundImage: `url("${src}")` }}
      />
    </motion.div>
  )
}

function LabSection({ section, index }: { section: typeof labSections[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [21, -21])

  return (
    <section ref={sectionRef} className="relative py-fib-9">
      {/* Full-width Parallax Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-[120%]"
          style={{ y: imageY }}
        >
          <Image
            src={section.image}
            alt={section.imageAlt}
            fill
            className="object-cover grayscale contrast-125 opacity-15"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 via-space-black/60 to-space-black" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-[1440px] mx-auto px-fib-4 md:px-fib-7"
        style={{ y: contentY }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`grid lg:grid-cols-2 gap-fib-8 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
        >
          {/* Text Content */}
          <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
            <div className="mono-text text-specialist-orange mb-fib-2">{section.subtitle}</div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-fib-5">{section.title}</h2>
            <p className="text-titanium/60 font-body leading-relaxed mb-fib-7 max-w-lg">
              {section.description}
            </p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-fib-4">
              {section.metrics.map((metric) => (
                <div key={metric.label} className="glassmorphism p-fib-4 border border-white/5">
                  <span className="mono-text text-[7px] text-titanium/30 block mb-fib-1">{metric.label}</span>
                  <div className="font-mono text-2xl text-specialist-orange">{metric.value}</div>
                  <span className="mono-text text-[8px] text-titanium/40">{metric.unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
            <div className="relative aspect-[4/3] glassmorphism overflow-hidden border border-white/5">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                className="object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/40 to-transparent" />
              <div className="absolute bottom-fib-4 left-fib-4">
                <span className="mono-text text-[8px] text-titanium/40">{section.id.toUpperCase()}_VISUALIZATION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}