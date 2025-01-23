"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import * as THREE from "three"

function GlowingSquare({
  position,
  rotation,
  scale,
  speed,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current && glowRef.current) {
      // Rotate the square
      meshRef.current.rotation.z = clock.getElapsedTime() * speed
      glowRef.current.rotation.z = clock.getElapsedTime() * speed

      // Add subtle floating motion
      const floatY = Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.3
      const floatX = Math.cos(clock.getElapsedTime() * 0.3 + position[1]) * 0.3

      meshRef.current.position.y = position[1] + floatY
      meshRef.current.position.x = position[0] + floatX
      glowRef.current.position.y = position[1] + floatY
      glowRef.current.position.x = position[0] + floatX
    }
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Main square */}
      <mesh ref={meshRef} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="black" />
      </mesh>
      {/* Glow effect */}
      <mesh ref={glowRef} scale={scale * 1.2}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.5} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

function FloatingSquares() {
  const squares = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [Math.random() * 20 - 10, Math.random() * 20 - 10, -5] as [number, number, number],
      rotation: [0, 0, Math.random() * Math.PI] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.2 + 0.1,
    }))
  }, [])

  return (
    <>
      {squares.map((square, i) => (
        <GlowingSquare key={i} {...square} />
      ))}
    </>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <FloatingSquares />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} radius={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

