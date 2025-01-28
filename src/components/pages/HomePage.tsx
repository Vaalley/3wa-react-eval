import { FC } from 'react';
import MainLayout from '@templates/MainLayout';
import PokemonCard from '@molecules/PokemonCard';

const HomePage: FC = () => {
  const mockPokemon = [
    { id: 1, name: 'bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  ];

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Pokédex</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
