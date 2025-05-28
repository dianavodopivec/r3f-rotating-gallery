import { Canvas } from "@react-three/fiber";
import { Frames } from "./Frames";
import { OrbitControls } from "@react-three/drei";

export const Gallery = () => {
  return (
    <Canvas camera={{ position: [0, 10, 25], fov: 28 }} flat>
      <Frames />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};
