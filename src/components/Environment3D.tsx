'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, PerspectiveCamera, AdaptiveDpr } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useMotionSettings } from '@/lib/useMotionSettings'

function FloatingBubbles() {
  const count = 20
  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      pos.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        speed: 0.1 + Math.random() * 0.5,
        size: 0.05 + Math.random() * 0.1
      })
    }
    return pos
  }, [])

  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={p.speed} rotationIntensity={2} floatIntensity={2}>
          <mesh position={p.position}>
            <sphereGeometry args={[p.size, 16, 16]} />
            <meshStandardMaterial 
              color="#FF6B35" 
              transparent 
              opacity={0.2} 
              emissive="#FF6B35"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const scroll = window.scrollY
    groupRef.current.rotation.y = scroll * 0.0005
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingBubbles />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#FF6B35" />
    </group>
  )
}

export default function Environment3D() {
  const { disable3D } = useMotionSettings()

  if (disable3D) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Scene />
      </Canvas>
    </div>
  )
}
