import type { Categorycharacters } from '../../models/character'

export type Props = {
  onClick?: () => void
  chapter?: Categorycharacters
  isProfile?: boolean
  name?: string
  image?: string
  onLogout?: () => void
  isFavorite?: boolean
  onRemove?: (chapter: Categorycharacters) => void
}
