import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loading from './components/Loading'
import Lights from './components/Lights'
import IPhone from './components/IPhone'

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <Lights />
      <Suspense fallback={<Loading />}>
        <IPhone />
      </Suspense>
    </Canvas>
  )
}

export default App
