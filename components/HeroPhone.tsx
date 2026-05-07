'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

type HeroPhoneProps = {
  pointer: {
    x: number
    y: number
  }
  shakeTrigger: number
}

export default function HeroPhone({ pointer, shakeTrigger }: HeroPhoneProps) {
  const [cracked, setCracked] = useState(false)
  const [pulse, setPulse] = useState(false)
  const pulseRef = useRef<number | null>(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCracked(true)
      window.setTimeout(() => setCracked(false), 1700)
    }, 8200)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (shakeTrigger <= 0) return
    setCracked(true)
    setPulse(true)

    const timeout = window.setTimeout(() => {
      setCracked(false)
      setPulse(false)
    }, 1400)

    return () => window.clearTimeout(timeout)
  }, [shakeTrigger])

  useEffect(() => {
    if (!pulse) return
    pulseRef.current = window.setTimeout(() => setPulse(false), 1200)
    return () => {
      if (pulseRef.current) {
        window.clearTimeout(pulseRef.current)
      }
    }
  }, [pulse])

  return (
    <div className="hero-phone-canvas relative h-[520px] w-full overflow-hidden rounded-[48px] border border-white/10 bg-[#040404]/70 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 28 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffe7d4" />
        <directionalLight position={[-3, 2, 6]} intensity={0.65} color="#ffffff" />
        <Environment preset="city" />
        <Float floatIntensity={1.2} rotationIntensity={0.18} speed={2.6}>
          <PhoneModel pointer={pointer} cracked={cracked} pulse={pulse} />
        </Float>
        <ContactShadows position={[0, -3.3, 0]} opacity={0.75} width={10} height={6} blur={2.4} far={4} />
      </Canvas>
      <div className="absolute inset-x-0 bottom-10 mx-auto h-24 w-80 rounded-full bg-gradient-to-r from-orange-specialist/8 via-white/5 to-orange-specialist/8 blur-3xl opacity-80" />
    </div>
  )
}

function PhoneModel({ pointer, cracked, pulse }: { pointer: { x: number; y: number }; cracked: boolean; pulse: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const screen = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (group.current) {
      const targetX = pointer.y * 0.08
      const targetY = pointer.x * 0.12
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.08)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.08)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(state.clock.elapsedTime * 0.3) * 0.03, 0.06)
    }

    if (screen.current) {
      const material = screen.current.material as THREE.MeshStandardMaterial
      material.emissive = new THREE.Color(cracked ? '#ff7b3d' : '#040505')
      material.emissiveIntensity = cracked ? 1.4 : 0.16
      material.roughness = 0.11
    }
  })

  return (
    <group ref={group} rotation={[0.16, 0, 0]}>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[2.32, 5.35, 0.18]} />
        <meshPhysicalMaterial color="#0a0a0c" metalness={0.95} roughness={0.16} clearcoat={0.85} clearcoatRoughness={0.05} />
      </mesh>
      <mesh position={[0, -0.02, 0.103]} ref={screen}>
        <boxGeometry args={[2.16, 4.96, 0.016]} />
        <meshStandardMaterial color="#050507" emissive={'#040505'} emissiveIntensity={0.16} roughness={0.12} />
      </mesh>

      <mesh position={[0.86, 2.42, 0.119]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.095, 32]} />
        <meshStandardMaterial color="#050505" metalness={0.98} roughness={0.15} />
      </mesh>
      <mesh position={[0.86, 2.42, 0.16]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.155, 0.03, 16, 64]} />
        <meshStandardMaterial color="#E5E5E7" metalness={1} roughness={0.08} />
      </mesh>
      <mesh position={[-0.92, 2.05, 0.09]}>
        <boxGeometry args={[0.19, 0.06, 0.018]} />
        <meshStandardMaterial color="#101214" metalness={0.9} roughness={0.14} />
      </mesh>

      <mesh position={[0, -2.67, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.21, 0.21, 0.035, 32]} />
        <meshStandardMaterial color="#111418" metalness={0.92} roughness={0.12} />
      </mesh>

      {cracked && (
        <mesh position={[0, 0, 0.107]}>
          <planeGeometry args={[2.14, 4.93]} />
          <meshStandardMaterial color="#FF6B35" transparent opacity={0.14} />
        </mesh>
      )}

      {pulse && (
        <mesh position={[0, 0, 0.08]}>
          <ringGeometry args={[1.65, 1.9, 64]} />
          <meshStandardMaterial color="#FF6B35" transparent opacity={0.12} />
        </mesh>
      )}
    </group>
  )
}
