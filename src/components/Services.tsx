'use client'

import React, { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Float, PerspectiveCamera } from '@react-three/drei'
import Image from 'next/image'

function PhoneModel() {
  return (
    <group scale={1.5}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <boxGeometry args={[1, 2, 0.1]} />
          <meshStandardMaterial color="#222" roughness={0.1} metalness={0.8} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[0.9, 1.9]} />
          <meshStandardMaterial color="#000" emissive="#111" roughness={0} />
        </mesh>
        {/* Camera */}
        <mesh position={[0.2, 0.8, 0.052]}>
          <circleGeometry args={[0.05, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </Float>
    </group>
  )
}

function Calculator() {
  const [value, setValue] = useState('0.00')
  const [profit, setProfit] = useState('0%')

  const updateCalc = () => {
    const val = (Math.random() * 1000 + 500).toFixed(2)
    const prof = (Math.random() * 15 + 5).toFixed(1)
    setValue(val)
    setProfit(`${prof}%`)
  }

  return (
    <div className="glassmorphism h-full p-fib-4 flex flex-col justify-between" onClick={updateCalc}>
      <div>
        <div className="mono-text text-[10px] text-specialist-orange mb-fib-2 underline">ESTIMATION_ENGINE_v1</div>
        <div className="text-3xl font-mono text-titanium mb-fib-1">${value}</div>
        <div className="text-[10px] mono-text text-titanium/40">EST_MARKET_VALUE</div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-xl font-mono text-live-green">{profit}</div>
          <div className="text-[8px] mono-text text-titanium/40">MARGIN_STABILITY</div>
        </div>
        <div className="w-12 h-12 rounded-full border border-titanium/10 flex items-center justify-center text-[10px] mono-text hover:bg-titanium hover:text-space-black transition-colors cursor-pointer">
          CALC
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-fib-8 md:py-fib-9 px-fib-4 md:px-fib-7 bg-transparent text-titanium">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-fib-7 flex flex-col md:flex-row md:items-end justify-between gap-fib-4">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mono-text mb-fib-2 text-specialist-orange"
            >
              SERVICE_HIERARCHY
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter">Bento Capabilities</h2>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="mono-text text-[10px] text-titanium/30 leading-relaxed">
              STRICT_ADHERENCE_TO_GOLDEN_RATIO_SPACING
              <br />
              VISUAL_STORY_ACTIVE_001
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-fib-4 auto-rows-[200px]">
          {/* Sales Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-8 md:row-span-2 relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <Image 
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200" 
              alt="Neon City"
              fill
              className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/20 to-transparent" />
            <div className="absolute bottom-fib-4 left-fib-4">
              <span className="mono-text text-[10px] text-specialist-orange mb-fib-1 block">ACQUISITION</span>
              <h3 className="text-4xl font-display uppercase tracking-tighter">Elite Sales</h3>
            </div>
          </motion.div>

          {/* Repairs Card */}
          <motion.div 
             whileHover={{ scale: 1.01 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-4 md:row-span-3 relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <Image 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
              alt="Macro Chip"
              fill
              className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black" />
            <div className="absolute bottom-fib-4 left-fib-4">
              <span className="mono-text text-[10px] text-specialist-orange mb-fib-1 block">TECHNICAL_LAB</span>
              <h3 className="text-4xl font-display uppercase tracking-tighter">Clinical Repairs</h3>
              <p className="text-xs text-titanium/50 mt-fib-2 max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Operating within micron tolerances for the ultimate device longevity.
              </p>
            </div>
          </motion.div>

          {/* 3D Interactive Card */}
          <div className="md:col-span-4 md:row-span-2 glassmorphism relative overflow-hidden border border-white/5">
            <div className="absolute top-fib-4 left-fib-4 z-10">
              <span className="mono-text text-[10px] text-specialist-orange mb-fib-1 block">INTERACTIVE_3D</span>
              <h3 className="text-xl font-display uppercase">Hardware Preview</h3>
            </div>
            <div className="w-full h-full">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                  <PresentationControls
                    global
                    snap
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                  >
                    <PhoneModel />
                  </PresentationControls>
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* Purchasing Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-4 md:row-span-1 relative overflow-hidden group cursor-pointer border border-white/5"
          >
             <Image 
              src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800" 
              alt="Velvet Marble"
              fill
              className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-space-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-display uppercase tracking-widest text-center">Bespoke<br/>Purchasing</h3>
            </div>
          </motion.div>

          {/* Calculator Card */}
          <div className="md:col-span-4 md:row-span-1">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}
