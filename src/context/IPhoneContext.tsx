import { ReactNode, createContext, useState } from 'react'
import { IPhoneContextType } from '@/types'
import { models } from '@/models'

type Props = {
  children: ReactNode
}

export const IPhoneContext = createContext<IPhoneContextType | null>(null)

export const IPhoneContextProvider = ({ children }: Props) => {
  const [currentModel, setCurrentModel] = useState(models[0])

  const value = { currentModel, setCurrentModel }

  return (
    <IPhoneContext.Provider value={value}>{children}</IPhoneContext.Provider>
  )
}
