import './Colors.css'
import { Html } from '@react-three/drei'
import { useColorContext } from '@/context/useColorContext'
import { colors } from '@/colors'

const Colors = () => {
  const { activeColor, setActiveColor } = useColorContext()
  return (
    <Html className='color-wrapper'>
      <div className='center color-container'>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setActiveColor(color)}
            className={color === activeColor ? 'active' : ''}
            style={{ background: color.value }}
            aria-label='change color'
          />
        ))}
      </div>
    </Html>
  )
}

export default Colors
