import type { Categorycharacters } from '../../models/character'

export type Props = {
  onClick?: () => void
  Categorycharacters?: Categorycharacters
  isProfile?: boolean
  name?: string
  image?: string
  onLogout?: () => void
   isFavorite?: boolean; 
}
