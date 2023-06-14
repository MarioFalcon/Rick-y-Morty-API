import {
  Categorycharacters,
  RYMNormalizeCaracter,
  RYMResultCharacter,
} from '../../models/character'


import {
  CategoryEpisodes,
  RYMNormalizeEpisodes,
  RYMResultEpisodes,
} from '../../models/episodes'


import {
  getCachedChapters,
  getCachedEpisodes,
  setCachedChapters,
  setCachedEpisodes,
} from '../storage/storage'


export const RYMChapters = async (): Promise<Categorycharacters[]> => {
  const savedChapters = getCachedChapters()

  if (!savedChapters || savedChapters.length <= 0) {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data: RYMResultCharacter = await response.json()

    const normalizedData = data.results.map(RYMNormalizeCaracter);
    setCachedChapters(normalizedData)

    return normalizedData
  }

  return savedChapters
}

export const RYMEpisodes = async (): Promise<CategoryEpisodes[]> => {
  const savedEpisodes = getCachedEpisodes()

  if (!savedEpisodes || savedEpisodes.length <= 0) {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`)
    const data: RYMResultEpisodes = await response.json()

    const normalizedData = data.results.map(RYMNormalizeEpisodes)
    setCachedEpisodes(normalizedData)

    return normalizedData
  }

  return savedEpisodes
}
