import { useTexture } from "@react-three/drei"

interface GeometryProps {
  frame: string
  position: [number, number, number]
}

export const Geometry = ({frame, position}: GeometryProps) => {
  const texture = useTexture(frame)

  return (
    <group>
      <mesh position={position}>
        <planeGeometry args={[1, 1]}/>
        <meshBasicMaterial map={texture}/>
      </mesh>
    </group>
  )
}
