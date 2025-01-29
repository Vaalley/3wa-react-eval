import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@templates/MainLayout';
import Card from '@atoms/Card';
import Button from '@atoms/Button';
import { usePokemon } from '@hooks/usePokemons';
import { useFavorites } from '@stores/useFavorites';
import LoadingSpinner from '@atoms/LoadingSpinner';

const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: pokemon, isLoading, isError } = usePokemon(id!);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingSpinner />
      </MainLayout>
    );
  }

  if (isError || !pokemon) {
    return (
      <MainLayout>
        <div className="text-center">
          <p className="text-red-500 mb-4">Failed to load Pokémon details</p>
          <Button onClick={() => navigate('/')} variant="secondary">
            Back to Home
          </Button>
        </div>
      </MainLayout>
    );
  }

  const favorite = isFavorite(pokemon.id);
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite({
        id: pokemon.id,
        name: pokemon.name,
        imageUrl,
      });
    }
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <Button
          onClick={() => navigate('/')}
          variant="secondary"
          className="mb-4"
        >
          ← Back to List
        </Button>

        <Card>
          <div className="flex flex-col items-center">
            <img
              src={imageUrl}
              alt={pokemon.name}
              className="w-48 h-48"
            />
            <div className="flex items-center gap-4 mt-4">
              <h1 className="text-3xl font-bold capitalize">
                {pokemon.name}
              </h1>
              <button
                onClick={handleFavoriteClick}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className={`w-6 h-6 ${favorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={favorite ? "0" : "2"}
                  fill={favorite ? "currentColor" : "none"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className="px-3 py-1 rounded-full bg-gray-200 text-sm capitalize"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="mt-4 text-gray-600">
              <p>Height: {pokemon.height / 10}m</p>
              <p>Weight: {pokemon.weight / 10}kg</p>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DetailPage;
