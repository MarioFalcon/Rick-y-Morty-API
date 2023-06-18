import type { Categorycharacters } from '../../models/character'

type NewType = {
  onClick?: () => void
  Categorycharacters?: Categorycharacters
  isProfile?: boolean
  name: string
  image: string
  onLogout: () => void
}

export type Props = NewType
