export type RYMResultEpisodes = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Array<{}>
  results: RYMResultEpisodes[]
}




export const RYMNormalizeEpisodes = (input: RYMResultEpisodes) => ({
  id: input?.id || '',
  name: input?.name || '',
  air_date: input?.air_date || '',
  episode: input?.episode || '',
  characters: input?.characters || '',
})

export type CategoryEpisodes = ReturnType<typeof RYMNormalizeEpisodes>
