import { Categorycharacters } from '../../models/character'
import { CategoryEpisodes } from '../../models/episodes'

const CHAPTERS_CATEGORY = 'chaptersLists'
const EPISODES_CATEGORY = 'episodesLists'
const USER_TOKEN = 'userToken'

export const getToken = () => {
  const response = window.localStorage.getItem(USER_TOKEN)
  return response
}
export const setToken = (token: string) => {
  window.localStorage.setItem(USER_TOKEN, token)
}

export const getCachedChapters = (): Categorycharacters[] => {
  const response = window.localStorage.getItem(CHAPTERS_CATEGORY)
  return response ? JSON.parse(response) : []
}

export const setCachedChapters = (categories: Categorycharacters[]) => {
  window.localStorage.setItem(CHAPTERS_CATEGORY, JSON.stringify(categories))
}

export const getCachedEpisodes = (): CategoryEpisodes[] => {
  const response = window.localStorage.getItem(EPISODES_CATEGORY)
  return response ? JSON.parse(response) : []
}

export const setCachedEpisodes = (categories: CategoryEpisodes[]) => {
  window.localStorage.setItem(EPISODES_CATEGORY, JSON.stringify(categories))
}
