import { FC, ReactNode } from 'react';
import Header from '@organisms/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
