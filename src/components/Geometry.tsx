import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

interface GeometryProps {
  frame: string
  index: number
  total: number
}

export const Geometry = ({frame, index, total}: GeometryProps) => {
  const meshRef = useRef<THREE.Mesh | null>(null)
  const [visible, setVisible] = useState(false)
  const texture = useTexture(frame)
  const accumulatedTime = useRef(0)

  //✨ Syntax -> x = Math.cos(angle) * radius -> I need to use the radius to make a complete circle! so ...
  const radius = 8
  const angle = (index * Math.PI * 2) / total

  //✨ Trigonometry (basic) -> the circle rotate 360 degrees
  const axisX = Math.cos(angle) * radius
  const axisZ = Math.sin(angle) * radius
  //✨ Negative angle to make the images face the center of the circle
  const axisY = -angle

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setVisible(true)
    }, index * 150)
    return () => clearInterval(timeOut)
  }, [])

  useFrame((_,delta) => {
    if(meshRef.current) {
      accumulatedTime.current += delta
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  const {scale, opacity} = useSpring({
    scale: visible ? 1 : 0.2,
    opacity: visible ? 1 : 0,
    config: { 
      mass: 1, 
      tension: 170, 
      friction: 20 
    }
  })

  return (
    <group ref={meshRef}>
      <a.mesh position={[axisX, 0, axisZ]} rotation={[0, axisY, 0]} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <a.meshBasicMaterial map={texture} transparent opacity={opacity} side={THREE.DoubleSide} />
      </a.mesh>
    </group>
  )
}