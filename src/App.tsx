import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './components/light/Lights'
import Loader from './components/Loader'
import IPhone from './components/IPhone'
import Colors from './components/colors/Colors'

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.7} />
      <Lights />
      <Suspense fallback={<Loader />}>
        <IPhone />
      </Suspense>
      <Colors />
    </Canvas>
  )
}

export default App
