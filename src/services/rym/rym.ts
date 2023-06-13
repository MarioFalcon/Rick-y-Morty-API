import { Category, RYMResponse, RYMNormalize } from '../../models/Category'
import { getCachedChapters, setCachedChapters } from '../storage/categories'

export const RYMChapters = async (): Promise<Category[]> => {
  const savedChapters = getCachedChapters()

  if (!savedChapters || savedChapters.length <= 0) {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data: RYMResponse = await response.json();

    const normalizedData = data.results.map(RYMNormalize);
    setCachedChapters(normalizedData); 

    return normalizedData;
  }

  return savedChapters;
};


