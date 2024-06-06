import './Colors.css'
import { Html } from '@react-three/drei'
import { useIPhoneContext } from '@/context/useIPhoneContext'
import { models } from '@/models'

const Colors = () => {
  const { currentModel, setCurrentModel } = useIPhoneContext()
  return (
    <Html className='center color-wrapper'>
      <div className='color-container'>
        {models.map((model, index) => (
          <button
            key={index}
            onClick={() => setCurrentModel(model)}
            className={model.color === currentModel.color ? 'active' : ''}
            style={{ background: model.color }}
            aria-label='change color'
          />
        ))}
      </div>
    </Html>
  )
}

export default Colors
