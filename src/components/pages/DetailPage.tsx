import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@templates/MainLayout';
import Card from '@atoms/Card';

const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const mockPokemon = {
    id: Number(id),
    name: 'Bulbasaur',
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
  };

  return (
    <MainLayout>
      <Card className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={mockPokemon.imageUrl}
            alt={mockPokemon.name}
            className="w-48 h-48"
          />
          <h1 className="text-3xl font-bold mt-4 capitalize">
            {mockPokemon.name}
          </h1>
          <div className="flex gap-2 mt-2">
            {mockPokemon.types.map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-full bg-gray-200 text-sm capitalize"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="mt-4 text-gray-600">
            <p>Height: {mockPokemon.height / 10}m</p>
            <p>Weight: {mockPokemon.weight / 10}kg</p>
          </div>
        </div>
      </Card>
    </MainLayout>
  );
};

export default DetailPage;
