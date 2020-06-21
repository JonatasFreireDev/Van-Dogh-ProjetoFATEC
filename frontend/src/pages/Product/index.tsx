import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import * as S from './styles';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import List from '../../components/List';

import { useFavorite } from '../../hooks/FavoriteContext';
import { useParams } from 'react-router-dom';

import { GiPawHeart } from 'react-icons/gi';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  picture: string;
  category: string;
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState({ status: false, message: '' });
  const { hasFavorite, addFavorite, rmFavorite } = useFavorite();
  const { id } = useParams();

  useEffect(() => {
    async function loadProductAsync(): Promise<void> {
      try {
        const response = await api
          .get<Product[]>(`/products?id=${id}`)
          .catch(() => {
            throw new Error('Não foi encontrado nenhum produto');
          });

        const [productResponse] = response.data;

        setProduct(productResponse);
        setLoading(false);
        setFailure({ status: false, message: '' });
      } catch (err) {
        setFailure({ status: true, message: err.message });
        setLoading(false);
      }
    }

    loadProductAsync();
  }, [id]);

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      try {
        const response = await api.get<Product[]>(
          `/products?category=${product.category}`,
        );

        const { data } = response;

        setProducts([...data]);
        setFailure({ status: false, message: '' });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    if (product.category) {
      loadProductsAsync();
    }
  }, [product.category]);

  const handleFavorite = useCallback(
    (id: number) => {
      const hasFav = hasFavorite(id);

      if (!hasFav) {
        addFavorite(id);
      } else {
        rmFavorite(id);
      }
    },
    [hasFavorite, addFavorite, rmFavorite],
  );

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : failure.status ? (
        <ErrorMessage message={failure.message} />
      ) : (
        <S.Content>
          <S.Image>
            <img src={product.picture} alt={product.name} />
          </S.Image>
          <S.Details>
            <S.DetailsHeader isFavorite={hasFavorite(product.id)}>
              <small>{product.category}</small>
              <GiPawHeart
                title="Adicionar aos favoritos !"
                onClick={() => {
                  handleFavorite(product.id);
                }}
              />
            </S.DetailsHeader>

            <S.DetailsPrice>
              <div>
                <h2>{product.name}</h2>
                <p>
                  R$ <big>{product.price}</big>.<small>00</small>
                </p>
                <span>Quantidade: {product.amount}</span>
              </div>
              <button>Comprar</button>
            </S.DetailsPrice>

            <S.Description>
              <h3>Descrição:</h3>
              <p>{product.description}</p>
            </S.Description>
          </S.Details>
        </S.Content>
      )}
      {loading ? (
        <Loading />
      ) : (
        <List items={products} nameList="Produtos parecidos !" />
      )}
    </S.Container>
  );
};

export default Product;
