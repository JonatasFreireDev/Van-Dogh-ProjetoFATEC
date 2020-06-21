import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import * as S from './styles';

import List from '../../components/List';
import Loading from '../../components/Loading';

import { useFavorite } from '../../hooks/FavoriteContext';

import IProduct from '../../Interface/IProduct';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { favorites } = useFavorite();

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      const response = await api.get<IProduct[]>('/products');

      const { data } = response;

      setProducts([...data]);
      setLoading(false);
    }

    loadProductsAsync();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <List items={products} nameList="Conheça os nossos produtos !" />
      )}
      <br />
      <List items={favorites} nameList="Favoritos !" />
    </S.Container>
  );
};

export default Home;
