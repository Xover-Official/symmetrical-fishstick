'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, useGLTF, Environment, ContactShadows, AdaptiveDpr } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'
import * as THREE from 'three'
import { Group } from 'three'
import { useMotionSettings } from '@/lib/useMotionSettings'

function FloatingiPhone() {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  const modelRef = useRef<Group>(null)
  const [active, setActive] = useState(false)
  const { disable3D } = useMotionSettings()

  const { scrollYProgress } = useScroll()

  // Define movement through sections
  // Hero: 0.0 - 0.1 (Stay Right)
  // Services: 0.3 - 0.5 (Move Left)
  // Accessories: 0.5 - 0.6 (Move Right)
  // ValueReveal: 0.6 - 0.8 (Move Left)
  // WhyUs: 0.8 - 0.9 (Center)
  // Footer: 0.9 - 1.0 (Down)

  const posX = useTransform(scrollYProgress, 
    [0, 0.1, 0.3, 0.5, 0.6, 0.8, 0.9, 1], 
    [1.8, 1.8, -2.2, 2.2, -2.2, 0, 0, 0]
  )
  const posY = useTransform(scrollYProgress, 
    [0, 0.3, 0.5, 0.6, 0.8, 1], 
    [0, 0, 0, 0, 0, -8]
  )
  const rotY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  const scale = useTransform(scrollYProgress, 
    [0, 0.1, 0.8, 0.9, 1], 
    [3.2, 2.8, 2.8, 2.2, 0]
  )

  const springX = useSpring(posX, { stiffness: 50, damping: 20 })
  const springY = useSpring(posY, { stiffness: 50, damping: 20 })
  const springRotY = useSpring(rotY, { stiffness: 50, damping: 20 })
  const springScale = useSpring(scale, { stiffness: 50, damping: 20 })

  useFrame((state) => {
    if (!modelRef.current) return
    modelRef.current.position.x = springX.get()
    modelRef.current.position.y = springY.get() + Math.sin(state.clock.elapsedTime) * 0.1
    modelRef.current.rotation.y = springRotY.get() + (active ? Math.sin(state.clock.elapsedTime * 10) * 0.1 : 0)
    modelRef.current.scale.setScalar(springScale.get() * (active ? 1.2 : 1))

    if (active) {
      modelRef.current.traverse((child) => {
        if ((child as any).isMesh) {
          child.position.z = THREE.MathUtils.lerp(child.position.z, 0.5, 0.1)
        }
      })
    } else {
      modelRef.current.traverse((child) => {
        if ((child as any).isMesh) {
          child.position.z = THREE.MathUtils.lerp(child.position.z, 0, 0.1)
        }
      })
    }
  })

  if (disable3D) return null

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      onClick={() => setActive(!active)}
      onPointerOver={() => { if (!disable3D) document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { if (!disable3D) document.body.style.cursor = 'auto' }}
    />
  )
}

export default function CanvasContainer() {
  const { disable3D } = useMotionSettings()

  if (disable3D) return null

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <Canvas
        eventSource={typeof document !== 'undefined' ? document.body : undefined}
        gl={{ antialias: true, alpha: true }}
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FF6B35" />
          <FloatingiPhone />
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={10} />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
