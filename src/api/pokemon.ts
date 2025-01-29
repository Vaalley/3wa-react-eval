import { PokemonListResponse, Pokemon } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';
const GEN1_LIMIT = 151;

export const pokemonApi = {
  getPokemons: async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
    const adjustedLimit = Math.min(limit, GEN1_LIMIT - offset);
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${adjustedLimit}&offset=${offset}`
    );
    if (!response.ok) throw new Error('Failed to fetch pokemons');
    return response.json();
  },

  getPokemonById: async (id: string | number): Promise<Pokemon> => {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch pokemon with id ${id}`);
    return response.json();
  },

  getPokemonByUrl: async (url: string): Promise<Pokemon> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch pokemon');
    return response.json();
  }
};
