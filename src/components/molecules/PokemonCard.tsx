import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '@atoms/Card';
import { useFavorites } from '@stores/useFavorites';
import { PokemonPreview } from '../../types/pokemon';

type PokemonCardProps = PokemonPreview;

const PokemonCard: FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, imageUrl });
    }
  };

  return (
    <Link to={`/pokemon/${id}`}>
      <Card className="hover:-translate-y-1 transition-all duration-300 relative">
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
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
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 mx-auto"
        />
        <h3 className="text-center mt-2 capitalize font-medium">
          {name}
        </h3>
      </Card>
    </Link>
  );
};

export default PokemonCard;
