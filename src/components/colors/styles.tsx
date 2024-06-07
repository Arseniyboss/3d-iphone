import styled from 'styled-components'
import { Container } from '@/styles'

type ColorProps = {
  $isActive: boolean
}

export const ColorWrapper = styled(Container)`
  height: 50dvh;
`

export const ColorContainer = styled.div`
  background: #1d1d1e;
  display: flex;
  position: absolute;
  gap: 1rem;
  bottom: 1rem;
  padding: 1rem 2rem;
  border-radius: 5rem;
`

export const Color = styled.button<ColorProps>`
  background: ${({ color }) => color};
  outline: ${({ $isActive }) => $isActive && '2px solid white'};
  border: none;
  list-style-type: none;
  padding: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
`
