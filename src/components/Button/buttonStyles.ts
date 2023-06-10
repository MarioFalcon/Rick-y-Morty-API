import styled from 'styled-components'
import type { Props } from './buttonTypes'

export const CustomButton = styled.button<{ $variant: Props['variant'] }>`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`
