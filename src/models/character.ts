export type RYMResult = {
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
}

export type RYMResponse = {
  info: {
    count: number
    next: string | null
    pages: number
    prev: string | null
  }

  results: RYMResult[]
}

export const RYMNormalize = (input: RYMResult) => ({
  name: input?.name || '',
  image: input?.image || '',
  id: input?.id || '',
  species: input?.species || '',
  status: input?.status || '',
})

export type Category = ReturnType<typeof RYMNormalize>
