export interface Character {
    id: number;
    name: string;
    image: string;
  }
  
  export async function fetchCharacters(): Promise<Character[]> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  }