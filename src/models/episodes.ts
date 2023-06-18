export type RYMCharacter = {
  name: string
  species: string
  status: string
  gender: string
  image: string
}

export type RYMResultEpisodes = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: RYMCharacter[]
  results: RYMResultEpisodes[]
  isFavorite?: boolean
  
}

export const RYMNormalizeEpisodes = (input: RYMResultEpisodes) => ({
  id: input?.id || '',
  name: input?.name || '',
  air_date: input?.air_date || '',
  episode: input?.episode || '',
  characters: input?.characters || [],
  isFav: false,
  
})

export type CategoryEpisodes = ReturnType<typeof RYMNormalizeEpisodes>
