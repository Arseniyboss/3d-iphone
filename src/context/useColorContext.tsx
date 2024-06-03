import { useContext } from 'react'
import { ColorContext } from './ColorContext'

export const useColorContext = () => {
  const colorContext = useContext(ColorContext)

  if (!colorContext) {
    throw new Error('useColorContext must be used within ColorContextProvider')
  }

  return colorContext
}
