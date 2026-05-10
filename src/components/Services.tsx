'use client'

import React, { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Float, PerspectiveCamera } from '@react-three/drei'
import Image from 'next/image'

function PhoneModel() {
  return (
    <group scale={1.8}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <boxGeometry args={[1, 2, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.05} metalness={0.9} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[0.92, 1.92]} />
          <meshStandardMaterial color="#000" emissive="#050505" roughness={0.1} />
        </mesh>
        {/* Camera lenses */}
        <mesh position={[0.2, 0.7, 0.052]}>
          <circleGeometry args={[0.06, 32]} />
          <meshStandardMaterial color="#111" roughness={0} metalness={1} />
        </mesh>
        <mesh position={[0.2, 0.85, 0.052]}>
          <circleGeometry args={[0.06, 32]} />
          <meshStandardMaterial color="#111" roughness={0} metalness={1} />
        </mesh>
      </Float>
    </group>
  )
}

function Calculator() {
  const [value, setValue] = useState('1,240.00')
  const [stability, setStability] = useState('98.4%')

  const updateCalc = () => {
    const val = (Math.random() * 2000 + 500).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const stab = (Math.random() * 5 + 95).toFixed(1)
    setValue(val)
    setStability(`${stab}%`)
  }

  return (
    <div className="glassmorphism h-full p-fib-5 flex flex-col justify-between group cursor-pointer transition-all duration-700 hover:bg-white/[0.05]" onClick={updateCalc}>
      <div>
        <div className="mono-text text-specialist-orange mb-fib-3">ESTIMATION_ENGINE_v4</div>
        <div className="text-4xl font-mono text-titanium mb-fib-1 tracking-tight">${value}</div>
        <div className="text-[10px] mono-text text-titanium/40">CURRENT_MARKET_FIDELITY</div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-2xl font-mono text-live-green">{stability}</div>
          <div className="text-[8px] mono-text text-titanium/40">ALGORITHMIC_CONFIDENCE</div>
        </div>
        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[10px] mono-text group-hover:bg-titanium group-hover:text-space-black transition-all duration-500">
          EXEC
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-fib-8 md:py-fib-9 px-fib-4 md:px-fib-7 bg-transparent text-titanium">
      <div className="absolute top-0 left-6 tech-label">
        BENTO_GRID_V4
      </div>
      <div className="absolute bottom-0 right-6 tech-label">
        PHI_CONSTANT: 1.618
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-fib-7 flex flex-col md:flex-row md:items-end justify-between gap-fib-4">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mono-text mb-fib-3 text-specialist-orange"
            >
              SERVICE_HIERARCHY_v4.0
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-display tracking-tighter leading-none">Bento Architecture</h2>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="mono-text text-[10px] text-titanium/30 leading-relaxed">
              STRICT_ADHERENCE_TO_GOLDEN_RATIO_SPACING
              <br />
              PHI_CONSTANT_APPLIED: 1.618
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-fib-4 auto-rows-[240px]">
          {/* Sales Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <Link href="/collection" className="block w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200" 
                alt="Neon City Reflection"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/20 to-transparent" />
              <div className="absolute bottom-fib-5 left-fib-5">
                <span className="mono-text text-specialist-orange mb-fib-2 block">ACQUISITION_CHANNEL</span>
                <h3 className="text-5xl font-display uppercase tracking-tighter">Elite Sales</h3>
                <p className="text-xs text-titanium/50 mt-fib-3 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Sourcing the rarest Titanium configurations for the discerning collector.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Repairs Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <Link href="/services" className="block w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
                alt="Macro Laser Chip"
                fill
                className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-[1.02] transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black" />
              <div className="absolute bottom-fib-5 left-fib-5">
                <span className="mono-text text-specialist-orange mb-fib-2 block">RESTORATION_LAB</span>
                <h3 className="text-5xl font-display uppercase tracking-tighter">Clinical<br/>Repairs</h3>
                <p className="text-xs text-titanium/50 mt-fib-4 max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Micron-level precision in board-level restoration and component fidelity.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* 3D Interactive Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 glassmorphism relative overflow-hidden border border-white/5"
          >
            <div className="absolute top-fib-5 left-fib-5 z-10">
              <span className="mono-text text-specialist-orange mb-fib-2 block">INTERACTIVE_RENDER</span>
              <h3 className="text-2xl font-display uppercase tracking-tighter">Hardware<br/>Fidelity</h3>
            </div>
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                  <PresentationControls
                    global
                    snap
                    rotation={[0, 0.4, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                  >
                    <PhoneModel />
                  </PresentationControls>
                </Suspense>
              </Canvas>
            </div>
          </motion.div>

          {/* Purchasing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <Link href="/services" className="block w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800" 
                alt="Devices on Velvet"
                fill
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-space-black/40 group-hover:bg-space-black/10 transition-colors duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-fib-4">
                <span className="mono-text text-specialist-orange mb-fib-1 opacity-0 group-hover:opacity-100 transition-opacity">EXCHANGE_PROTOCOL</span>
                <h3 className="text-3xl font-display uppercase tracking-widest text-center">Bespoke<br/>Purchasing</h3>
              </div>
            </Link>
          </motion.div>

          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1"
          >
            <Calculator />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
