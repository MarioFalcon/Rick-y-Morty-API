import type { CategoryEpisodes } from '../../models/episodes'

export type Props = {
  onClick?: () => void
  CategoryEpisodes?: CategoryEpisodes
  isProfile?: boolean
  name?: string
  onLogout?: () => void
  isFav?: boolean
}
