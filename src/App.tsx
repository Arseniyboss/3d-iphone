import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './components/Lights'
import IPhone from './components/IPhone'

const App = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={5}
        rotateSpeed={0.5}
      />
      <Lights />
      <IPhone scale={[30, 30, 30]} />
    </Canvas>
  )
}

export default App
