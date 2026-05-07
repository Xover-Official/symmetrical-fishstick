'use client';

import React, { forwardRef, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import type { Group, Mesh, Points } from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    iPhoneModel: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

// 3D iPhone Model Component - Typed imperative approach
type IPhoneModelProps = React.ComponentProps<'group'> & { ref?: React.Ref<Group> }
const IPhoneModel = forwardRef<Group, IPhoneModelProps>((props, ref) => {
  const screenRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)
  
  // Memoized geometries - avoid recreation every render (fixes perf/strict issues)
  const geometries = useMemo(() => ({
    body: new THREE.BoxGeometry(1.6, 3.2, 0.15, 20, 20, 2),
    screen: new THREE.PlaneGeometry(1.35, 2.85),
    cameraBump: new THREE.CylinderGeometry(0.2, 0.2, 0.06, 32),
    smallCamera: new THREE.CylinderGeometry(0.08, 0.08, 0.04, 32),
    button: new THREE.BoxGeometry(0.02, 0.25, 0.03),
    dynamicIsland: new THREE.CylinderGeometry(0.06, 0.12, 0.08, 8, 16, true)
  }), [])
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  React.useImperativeHandle(ref, () => groupRef.current!)

  return (
    <group ref={groupRef} {...props}>
      {/* Body - Titanium Frame */}
      <mesh geometry={geometries.body}>
        <meshStandardMaterial 
          color="#C5C5C7" 
          metalness={0.9} 
          roughness={0.15}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} geometry={geometries.screen} position={[0, 0, 0.08]}>
        <meshStandardMaterial color="#0A0A0A" roughness={0.1} metalness={0.2} />
      </mesh>
      
      {/* Dynamic Island */}
      <mesh position={[0, 1.25, 0.085]} geometry={geometries.dynamicIsland}>
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Camera Bump */}
      <mesh geometry={geometries.cameraBump} position={[-0.35, 1.0, 0.12]}>
        <meshStandardMaterial color="#C5C5C7" metalness={0.9} roughness={0.15} />
      </mesh>
      
      {/* Small Camera Lenses */}
      <mesh geometry={geometries.smallCamera} position={[-0.35, 1.0, 0.16]}>
        <meshStandardMaterial color="#1A1A2E" roughness={0.1} metalness={0.5} />
      </mesh>
      <mesh geometry={geometries.smallCamera} position={[-0.48, 1.0, 0.16]}>
        <meshStandardMaterial color="#1A1A2E" roughness={0.1} metalness={0.5} />
      </mesh>
      
      {/* Side Buttons */}
      <mesh position={[0.81, 0.5, 0]} geometry={geometries.button}>
        <meshStandardMaterial color="#C5C5C7" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0.81, 0.1, 0]} geometry={geometries.button}>
        <meshStandardMaterial color="#C5C5C7" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  )
})

IPhoneModel.displayName = 'IPhoneModel'

// Floating particles
function Particles() {
  const count = 50
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])
  
  const particlesRef = useRef<Points>(null)
  
  useFrame(() => {
    const particles = particlesRef.current
    if (particles) {
      particles.rotation.y += 0.0002
      particles.rotation.x += 0.0001
    }
  })
  
  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial size={0.02} color="#FF6B35" transparent opacity={0.6} />
    </points>
  )
}

// 3D Scene
function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-3, -2, 3]} intensity={0.8} color="#FF6B35" />
      
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <IPhoneModel />
      </Float>
      
      <Particles />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
        rotateSpeed={0.5}
      />
      <Environment preset="city" />
    </Canvas>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-[#0A0A0A] to-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-specialist-orange/5 rounded-full blur-[120px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm tracking-[0.3em] text-specialist-orange/80 font-display uppercase"
            >
              — iPhone Specialists —
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mt-6 leading-[0.95]"
            >
              YOUR
              <br />
              <span className="gradient-text">iPhone.</span>
              <br />
              PERFECTED.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-lg mt-8 max-w-md leading-relaxed"
            >
              From a shattered screen to a brand-new battery — Gill Mobile doesn't just fix iPhones. We elevate them with surgical care.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a href="#value" className="pill-button bg-specialist-orange hover:bg-[#E55A2B] text-white px-8 py-4 text-lg animate-pulse-glow">
                Diagnose My iPhone
              </a>
              <a href="#services" className="pill-button border-2 border-white/20 hover:border-specialist-orange hover:text-specialist-orange text-white px-8 py-4 text-lg transition-all duration-300">
                Explore Services
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              {["10,000+ iPhones Revived", "Same-Day Service", "Apple-Certified Parts"].map((badge) => (
                <span key={badge} className="text-xs text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
                  ✓ {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right - 3D iPhone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-[500px] md:h-[600px] lg:h-[700px]"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-specialist-orange to-transparent"
        />
      </motion.div>
    </section>
  )
}

