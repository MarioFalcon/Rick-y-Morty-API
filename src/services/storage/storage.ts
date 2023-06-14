import { Category } from "../../models/character";

const CHAPTERS_CATEGORY = "charactersLists";

export const getCachedChapters = (): Category[] => {
   const response = window.localStorage.getItem(CHAPTERS_CATEGORY);
   return response ? JSON.parse(response) : [];
};

export const setCachedChapters = (categories: Category[]) => {
   window.localStorage.setItem(
      CHAPTERS_CATEGORY,
      JSON.stringify(categories)
   );
};
