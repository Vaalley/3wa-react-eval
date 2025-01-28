import { FC } from 'react';
import MainLayout from '@templates/MainLayout';

const FavoritesPage: FC = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Favorite Pokémon</h1>
      <p className="text-gray-600">
        Your favorite Pokémon will appear here once you start adding them.
        This feature will be implemented in Phase 2 with Zustand state management.
      </p>
    </MainLayout>
  );
};

export default FavoritesPage;
