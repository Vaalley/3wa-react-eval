import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PokemonPreview } from '../types/pokemon';

interface FavoritesState {
  favorites: PokemonPreview[];
  addFavorite: (pokemon: PokemonPreview) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (pokemon) => {
        const { favorites } = get();
        if (!favorites.some((f) => f.id === pokemon.id)) {
          set({ favorites: [...favorites, pokemon] });
        }
      },
      removeFavorite: (id) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((f) => f.id !== id) });
      },
      isFavorite: (id) => {
        const { favorites } = get();
        return favorites.some((f) => f.id === id);
      },
    }),
    {
      name: 'pokemon-favorites',
    }
  )
);
