import { Canvas } from "@react-three/fiber"
import { Frames } from "./Frames"
import { OrbitControls } from "@react-three/drei"

export const Gallery = () => {
  return (
    <Canvas>
      <Frames/>
      <OrbitControls/>
    </Canvas>
  )
}
