import { Canvas } from "@react-three/fiber";
import { Frames } from "./Frames";

export const Gallery = () => {
  return (
    <Canvas camera={{ position: [0, 10, 25], fov: 28 }} flat>
      <Frames />
    </Canvas>
  );
};
