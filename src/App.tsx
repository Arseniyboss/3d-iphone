import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from './components/Loader'
import Lights from './components/Lights'
import IPhone from './components/IPhone'

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.7} />
      <Lights />
      <Suspense fallback={<Loader />}>
        <IPhone />
      </Suspense>
    </Canvas>
  )
}

export default App
