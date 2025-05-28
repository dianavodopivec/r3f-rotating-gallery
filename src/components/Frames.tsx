import { textures } from "../data/textures"
import { Geometry } from "./Geometry"

const mappingFrames = (number: number) => Array(number).fill(textures).flat()

export const Frames = () => {
  const newFrames = mappingFrames(5)

  return (
    <>
      {newFrames.map((frame, i) => (
        <Geometry key={i} frame={frame} index={i} total={newFrames.length}/>
      ))}
    </>
  )
}
