import { textures } from "../data/textures"
import { Geometry } from "./Geometry"

export const Frames = () => {
  return (
    <>
      {textures.map((frame, i) => (
        <Geometry key={i} frame={frame} position={[i, 0, 0]}/>
      ))}
    </>
  )
}
