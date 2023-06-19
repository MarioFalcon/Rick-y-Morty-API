import { Categorycharacters } from '../../models/character'
import { CategoryEpisodes } from '../../models/episodes'

const CHAPTERS_CATEGORY = 'chaptersLists'
const EPISODES_CATEGORY = 'episodesLists'
const USER_FAV_CHARACTERS = 'userFavCharacters'
const USER_FAV_EPISODES = 'userFavEpisodes'

export const getCachedChapters = (): Categorycharacters[] => {
  const response = window.localStorage.getItem(CHAPTERS_CATEGORY)
  return response ? JSON.parse(response) : []
}

export const setCachedChapters = (categories: Categorycharacters[]) => {
  window.localStorage.setItem(CHAPTERS_CATEGORY, JSON.stringify(categories))
}

export const removeCachedChapters = async (id: string) => {
  const currentCachedChapters = getCachedChapters()
  const existingIndex = currentCachedChapters.findIndex(
    (item) => item.id === id
  )
  if (existingIndex !== -1) {
    currentCachedChapters.splice(existingIndex, 1)
  }
  setCachedChapters(currentCachedChapters)
  return currentCachedChapters
}

export const getCachedEpisodes = (): CategoryEpisodes[] => {
  const response = window.localStorage.getItem(EPISODES_CATEGORY)
  return response ? JSON.parse(response) : []
}

export const setCachedEpisodes = (categories: CategoryEpisodes[]) => {
  window.localStorage.setItem(EPISODES_CATEGORY, JSON.stringify(categories))
}

export const resetCache = () => {
  window.localStorage.removeItem(CHAPTERS_CATEGORY)
  window.localStorage.removeItem(EPISODES_CATEGORY)
  window.localStorage.removeItem(USER_FAV_CHARACTERS)
  window.localStorage.removeItem(USER_FAV_EPISODES)
}


export const toggleFavoritesCharacter = (character: Categorycharacters) => {
  const favoritesCharacters = getFavoritesCharacters()

  const index = favoritesCharacters.findIndex((item) => item.id === character.id)

  if (index !== -1) {
    favoritesCharacters.splice(index, 1)
  } else {
    favoritesCharacters.push(character)
  }

  setFavoritesCharacters(favoritesCharacters)
}

export const getFavoritesCharacters = (): Categorycharacters[] => {
  const response = window.localStorage.getItem(USER_FAV_CHARACTERS)
  return response ? JSON.parse(response) : []
}

export const setFavoritesCharacters = (favoritesCharacters: Categorycharacters[]) => {
  window.localStorage.setItem(USER_FAV_CHARACTERS, JSON.stringify(favoritesCharacters))
}






export const toggleFavoritesEpisode = (episode: CategoryEpisodes) => {
  const favoritesEpisodes = getFavoritesEpisodes()

  const index = favoritesEpisodes.findIndex((item) => item.id === episode.id)

  if (index !== -1) {
    favoritesEpisodes.splice(index, 1)
  } else {
    favoritesEpisodes.push(episode)
  }

  setFavoritesEpisodes(favoritesEpisodes)
}

export const getFavoritesEpisodes = (): CategoryEpisodes[] => {
  const response = window.localStorage.getItem(USER_FAV_EPISODES)
  return response ? JSON.parse(response) : []
}

export const setFavoritesEpisodes = (favoritesEpisodes: CategoryEpisodes[]) => {
  window.localStorage.setItem(USER_FAV_EPISODES, JSON.stringify(favoritesEpisodes))
}