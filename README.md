# Gen 1 Pokédex React Application

A React app that displays all 151 original Pokémon using the PokeAPI. Built with React, TypeScript, and following the Atomic Design pattern.

## Features

- 📱 Responsive design that works on desktop and mobile
- ⚡ Fast and efficient with semi-infinite fetching
- ❤️ Favorite system with persistent storage
- 🎨 Clean UI with Tailwind CSS
- 🏗️ Organized using Atomic Design principles
- 📝 TypeScript for better development experience
- 🔄 Real-time data fetching with TanStack Query
- 💾 State management with Zustand

## Tech Stack

- React + Vite
- TypeScript
- TanStack Query
- Zustand
- React Router DOM
- Tailwind CSS
- PokeAPI

## Prerequisites

Before running this project, make sure you have:
- Node.js
- pnpm package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Vaalley/3wa-react-eval.git
cd 3wa-react-eval
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

The project follows the Atomic Design pattern:

```
src/
├── api/          # API services
├── components/   # React components
│   ├── atoms/    # Basic building blocks (Button, Card, etc.)
│   ├── molecules/# Combinations of atoms (PokemonCard)
│   ├── organisms/# Complex components (Header)
│   ├── templates/# Page layouts
│   └── pages/    # Full pages
├── hooks/        # Custom React hooks
├── stores/       # Zustand stores
└── types/        # TypeScript types
```

## Available Routes

- `/` - Home page showing all Gen 1 Pokémon with infinite scroll
- `/pokemon/:id` - Detail page for individual Pokémon
- `/favorites` - Page showing your favorite Pokémon
