import { useContext } from 'react'
import { IPhoneContext } from './IPhoneContext'

export const useIPhoneContext = () => {
  const iphoneContext = useContext(IPhoneContext)

  if (!iphoneContext) {
    throw new Error('useIPhoneContext must be used within its provider')
  }

  return iphoneContext
}
