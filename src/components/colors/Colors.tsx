import { useIPhoneContext } from '@/context/useIPhoneContext'
import { ColorContainer, ColorWrapper, Color } from './styles'
import { models } from '@/models'

const Colors = () => {
  const { currentModel, setCurrentModel } = useIPhoneContext()
  return (
    <ColorContainer>
      <ColorWrapper>
        {models.map((model, index) => (
          <Color
            key={index}
            color={model.color}
            $isActive={model.color === currentModel.color}
            onClick={() => setCurrentModel(model)}
            aria-label="change color"
          />
        ))}
      </ColorWrapper>
    </ColorContainer>
  )
}

export default Colors
