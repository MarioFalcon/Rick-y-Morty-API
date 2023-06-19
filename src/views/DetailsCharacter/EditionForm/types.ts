import type { Character } from '../../../models/character'

export type Props = {
  onCancel: () => void
  character: Character
}
