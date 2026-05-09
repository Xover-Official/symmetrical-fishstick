'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

function GlobePoints() {
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos[i * 3] = 2 * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = 2 * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = 2 * Math.cos(phi);
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#E5E5E7"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Sphere args={[1.98, 32, 32]}>
        <meshBasicMaterial color="#E5E5E7" wireframe transparent opacity={0.05} />
      </Sphere>
    </group>
  );
}

function LahoreMarker() {
  const markerRef = useRef<THREE.Group>(null);
  
  // Lahore coordinates: 31.5204° N, 74.3587° E
  // Convert to 3D sphere coordinates
  const lat = (31.5204 * Math.PI) / 180;
  const lon = (74.3587 * Math.PI) / 180;
  const radius = 2;
  
  const x = radius * Math.cos(lat) * Math.cos(lon);
  const y = radius * Math.sin(lat);
  const z = radius * Math.cos(lat) * Math.sin(lon);

  useFrame((state) => {
    if (markerRef.current) {
      const s = 1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.2;
      markerRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[x, y, z]} ref={markerRef}>
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#FF6B35" />
      </mesh>
      <pointLight color="#FF6B35" intensity={2} distance={1} />
    </group>
  );
}

function Orbits() {
  return (
    <group rotation={[Math.PI / 4, 0, Math.PI / 6]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#E5E5E7" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#E5E5E7" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export const Globe: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group>
            <GlobePoints />
            <LahoreMarker />
            <Orbits />
          </group>
        </Float>
      </Canvas>
    </div>
  );
};
