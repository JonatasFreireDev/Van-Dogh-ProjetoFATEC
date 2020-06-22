import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import * as S from './styles';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { GiPawHeart } from 'react-icons/gi';

import { useLocation, Link } from 'react-router-dom';

import { useFavorite } from '../../hooks/FavoriteContext';

import IProduct from '../../Interface/IProduct';

const FindCategory: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [failure, setFailure] = useState({ status: false, message: '' });
  const { hasFavorite, addFavorite, rmFavorite } = useFavorite();
  const location = useLocation();
  const paramter = new URLSearchParams(String(location.search)).get('name');

  useEffect(() => {
    setPage(1);
  }, [paramter]);

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      try {
        const response = await api.get<IProduct[]>(
          `/products?category=${paramter}&_page=${page}&_limit=9`,
        );

        const { data } = response;

        if (data.length <= 0) {
          setProducts([]);
          throw new Error('Não há produtos !');
        }

        setProducts([...data]);
        setFailure({ status: false, message: '' });
        setLoading(false);
      } catch (err) {
        if (page > 1) {
          setFailure({ status: true, message: 'Não há mais produtos' });
        } else {
          setFailure({ status: true, message: err.message });
        }
        setLoading(false);
      }
    }

    loadProductsAsync();
  }, [paramter, page]);

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
      ) : (
        <>
          <h1>{paramter}</h1>

          {failure.status ? (
            <ErrorMessage message={failure.message} />
          ) : (
            <S.Content>
              {products.map((product) => (
                <S.Product key={product.id}>
                  <S.Image>
                    <img src={product.picture} alt={product.name} />
                  </S.Image>
                  <S.Description>
                    <Link to={`/products/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <strong>R$ {product.price}</strong>
                  </S.Description>
                  <S.Favorite isFavorite={hasFavorite(product.id)}>
                    <GiPawHeart
                      title="Adicionar aos favoritos !"
                      onClick={() => handleFavorite(product.id)}
                    />
                  </S.Favorite>
                </S.Product>
              ))}
            </S.Content>
          )}

          <S.Pagination page={page}>
            <button
              onClick={() => {
                page <= 1 ? console.log('não permitido') : setPage(page - 1);
              }}
              disabled={page <= 1 ? true : false}
            >
              Prev
            </button>
            <span>{page}</span>
            <button
              onClick={() => {
                if (products.length >= 9) {
                  setPage(page + 1);
                }
              }}
              disabled={products.length <= 8 ? true : false}
            >
              Next
            </button>
          </S.Pagination>
        </>
      )}
    </S.Container>
  );
};

export default FindCategory;
