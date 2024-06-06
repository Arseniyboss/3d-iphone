import { useTexture } from '@react-three/drei'
import { Model } from './types'
import lightgreyTexture from '/textures/lightgrey.jpg'
import darkgreyTexture from '/textures/darkgrey.jpg'
import goldenTexture from '/textures/golden.jpg'
import blueTexture from '/textures/blue.jpg'

const { preload } = useTexture

preload(lightgreyTexture)
preload(darkgreyTexture)
preload(goldenTexture)
preload(blueTexture)

export const models: Model[] = [
  { color: '#888', texture: lightgreyTexture },
  { color: '#666', texture: darkgreyTexture },
  { color: '#837a6e', texture: goldenTexture },
  { color: '#374c5a', texture: blueTexture },
]
