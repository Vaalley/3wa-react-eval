import { FC } from 'react';
import MainLayout from '@templates/MainLayout';
import PokemonCard from '@molecules/PokemonCard';
import { useFavorites } from '@stores/useFavorites';

const FavoritesPage: FC = () => {
  const { favorites } = useFavorites();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>You haven't added any Pokémon to your favorites yet.</p>
          <p className="mt-2">Click the heart icon on any Pokémon to add it to your favorites!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
