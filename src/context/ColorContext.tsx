import { ReactNode, createContext, useState } from 'react'
import { ColorContextType } from '@/types'
import { colors } from '@/colors'

type Props = {
  children: ReactNode
}

export const ColorContext = createContext<ColorContextType | null>(null)

export const ColorContextProvider = ({ children }: Props) => {
  const [activeColor, setActiveColor] = useState(colors[0])

  const value = { activeColor, setActiveColor }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}
