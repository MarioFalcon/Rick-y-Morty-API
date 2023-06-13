import { Category } from "../../models/Category";

const CHAPTERS_CATEGORY = "chaptersLists";

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
