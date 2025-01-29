import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg border-2 border-gray-200 p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
