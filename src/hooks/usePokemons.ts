import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { pokemonApi } from '@api/pokemon';

const POKEMON_PER_PAGE = 20;
const GEN1_LIMIT = 151;

export const useInfinitePokemons = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons-infinite'],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const data = await pokemonApi.getPokemons(POKEMON_PER_PAGE, pageParam * POKEMON_PER_PAGE);
      const pokemonPreviews = await Promise.all(
        data.results.map(async (pokemon) => {
          const details = await pokemonApi.getPokemonByUrl(pokemon.url);
          return {
            id: details.id,
            name: details.name,
            imageUrl: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
          };
        })
      );
      return {
        pokemons: pokemonPreviews,
        nextPage: (pageParam + 1) * POKEMON_PER_PAGE < GEN1_LIMIT ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => pokemonApi.getPokemonById(id),
    enabled: !!id && Number(id) <= GEN1_LIMIT,
  });
};
