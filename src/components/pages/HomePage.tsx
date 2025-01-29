import { FC } from 'react';
import MainLayout from '@templates/MainLayout';
import PokemonCard from '@molecules/PokemonCard';
import { useInfinitePokemons } from '@hooks/usePokemons';
import Button from '@atoms/Button';
import LoadingSpinner from '@atoms/LoadingSpinner';

const HomePage: FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfinitePokemons();

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingSpinner />
      </MainLayout>
    );
  }

  if (isError) {
    return (
      <MainLayout>
        <div className="text-center text-red-500">
          Error: {error.message}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gen 1 Pokédex</h1>
        <span className="text-gray-500">Showing {data?.pages.reduce((acc, page) => acc + page.pokemons.length, 0)} of 151 Pokémon</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.pages.map((page) =>
          page.pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
            />
          ))
        )}
      </div>
      {hasNextPage && (
        <div className="mt-8 text-center">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            variant="secondary"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </Button>
        </div>
      )}
      {isFetchingNextPage && <LoadingSpinner />}
    </MainLayout>
  );
};

export default HomePage;
