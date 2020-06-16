import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import * as S from './styles';

interface ProductsResponse {
  name: string;
  description: string;
  price: number;
  amount: number;
  category: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsResponse[]>([]);

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      const response = await api.get<ProductsResponse[]>('/products');

      const { data } = response;

      setProducts([...data]);
    }

    loadProductsAsync();
  }, []);

  return (
    <S.Container>
      {products.map((product, index) => (
        <h1 key={index}>{product.name}</h1>
      ))}
    </S.Container>
  );
};

export default Home;
