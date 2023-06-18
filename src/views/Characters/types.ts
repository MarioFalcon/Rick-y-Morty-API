import type { Categorycharacters } from '../../models/character'

type NewType = {
  onClick?: () => void
  chapter?: Categorycharacters
  isProfile?: boolean
  name: string
  image: string
  onLogout: () => void
  onRemove?: (chapter: Categorycharacters) => void
}

export type Props = NewType
