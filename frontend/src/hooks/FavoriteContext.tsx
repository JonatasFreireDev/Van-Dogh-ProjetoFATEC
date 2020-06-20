import React, { createContext, useContext, useCallback, useState } from 'react';
import api from '../services/api';

interface FavoriteContextData {
  favorites: Product[];
  addFavorite(id: number): void;
  rmFavorite(id: number): void;
  hasFavorite(id: number): boolean;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  picture: string;
  category: string;
}

export const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

export const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const fav = localStorage.getItem('VanDog:favoritos');

    if (fav) {
      return JSON.parse(fav);
    } else {
      return [] as Product[];
    }
  });

  const addFavorite = useCallback(
    async (id: number) => {
      const hasOneFav = favorites.find((fav) => fav.id === id);
      if (hasOneFav) return;

      const response = await api.get<Product[]>(`/products?id=${id}`);
      const [product] = response.data;

      const teste = JSON.stringify([product, ...favorites]);

      localStorage.setItem('VanDog:favoritos', teste);

      setFavorites([product, ...favorites]);
    },
    [favorites],
  );

  const rmFavorite = useCallback(
    (id: number) => {
      const removeFavorite = favorites.filter((fav) => fav.id !== id);

      localStorage.setItem('VanDog:favoritos', JSON.stringify(removeFavorite));

      setFavorites(favorites.filter((fav) => fav.id !== id));
    },
    [favorites],
  );

  const hasFavorite = useCallback(
    (id: number) => {
      const hasFav = favorites.find((fav) => fav.id === id);

      return !!hasFav;
    },
    [favorites],
  );

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, rmFavorite, hasFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
