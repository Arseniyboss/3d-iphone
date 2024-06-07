import { useIPhoneContext } from '@/context/useIPhoneContext'
import { ColorWrapper, ColorContainer, Color } from './styles'
import { models } from '@/models'

const Colors = () => {
  const { currentModel, setCurrentModel } = useIPhoneContext()
  return (
    <ColorWrapper>
      <ColorContainer>
        {models.map((model, index) => (
          <Color
            key={index}
            color={model.color}
            $isActive={model.color === currentModel.color}
            onClick={() => setCurrentModel(model)}
            aria-label='change color'
          />
        ))}
      </ColorContainer>
    </ColorWrapper>
  )
}

export default Colors
