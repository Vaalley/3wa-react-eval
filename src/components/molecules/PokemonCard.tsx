import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '@atoms/Card';

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <Card className="hover:shadow-lg transition-shadow">
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
