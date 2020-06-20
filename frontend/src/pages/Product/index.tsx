import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import * as S from './styles';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

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
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState({ status: false, message: '' });
  const { hasFavorite, addFavorite, rmFavorite } = useFavorite();
  const { id } = useParams();

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      try {
        const response = await api
          .get<Product[]>(`/products?id=${id}`)
          .catch(() => {
            throw new Error('Não foi encontrado nenhum produto');
          });

        const [productResponse] = response.data;

        setProduct(productResponse);
        setLoading(false);
      } catch (err) {
        setFailure({ status: true, message: err.message });
        setLoading(false);
      }
    }

    loadProductsAsync();
  }, [id]);

  const handleFavorite = useCallback(
    (id: number) => {
      const hasFav = hasFavorite(id);

      if (!hasFav) {
        addFavorite(id);
      } else {
        rmFavorite(id);
      }
    },
    [hasFavorite],
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : failure.status ? (
        <ErrorMessage message={failure.message} />
      ) : (
        <S.Content>
          <S.Image>
            <img src={product.picture} />
          </S.Image>
          <S.Details isFavorite={hasFavorite(product.id)}>
            <div>
              <small>{product.category}</small>
              <GiPawHeart
                onClick={() => {
                  handleFavorite(product.id);
                }}
              />
            </div>
            <div>
              <S.DetailsPrice>
                <h2>{product.name}</h2>
                <p>
                  R$ <big>{product.price}</big>.<small>00</small>
                </p>
                <span>Quantidade: {product.amount}</span>
              </S.DetailsPrice>
              <S.Form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <S.AmountPrice>
                  <button>-</button>
                  <p> 0 </p>
                  <button>+</button>
                </S.AmountPrice>
                <button type="submit">Comprar</button>
                <br />
              </S.Form>
            </div>
            <h3>Descrição:</h3>
            <p>{product.description}</p>
          </S.Details>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Product;
