export type RYMResultCharacter = {
  created: string
  episode: Array<{}>
  gender: string
  id: number
  image: string
  name: string
  species: string
  status: string
  type: string
  url: string
  results: RYMResultCharacter[]
}

export type RYMResultCharacterGeneral = {
  info: {
    count: number
    next: string | null
    pages: number
    prev: string | null
  }

}

export const RYMNormalizeCaracter = (input: RYMResultCharacter) => ({
  name: input?.name || '',
  image: input?.image || '',
  id: input?.id || '',
  species: input?.species || '',
  status: input?.status || '',
  created: input?.created || '',
  gender: input?.gender || '',
  type: input?.type || '',
  
})

export type Categorycharacters = ReturnType<typeof RYMNormalizeCaracter>
