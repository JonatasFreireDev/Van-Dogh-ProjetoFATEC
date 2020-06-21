import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import * as S from './styles';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { GiPawHeart } from 'react-icons/gi';

import { useLocation, Link } from 'react-router-dom';

import { useFavorite } from '../../hooks/FavoriteContext';

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  picture: string;
  category: string;
}

const Search: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [failure, setFailure] = useState({ status: false, message: '' });
  const { hasFavorite, addFavorite, rmFavorite } = useFavorite();
  const location = useLocation();
  const paramter = new URLSearchParams(String(location.search)).get('search');

  useEffect(() => {
    async function loadProductsAsync(): Promise<void> {
      try {
        const response = await api.get<Products[]>(
          `/products?q=${paramter}&_page=${page}&_limit=4`,
        );

        const { data } = response;

        if (data.length <= 0) {
          throw new Error('Não foi encontrado nenhum produto !');
        }

        setProducts([...data]);
        setFailure({ status: false, message: '' });
        setLoading(false);
      } catch (err) {
        setFailure({ status: true, message: err.message });
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
      ) : failure.status ? (
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
                  <h2>{product.name}</h2>
                </Link>
                <p>
                  R$ {product.price}
                  <small>.00</small>
                </p>
              </S.Description>
              <S.Favorite isFavorite={hasFavorite(product.id)}>
                <GiPawHeart
                  title="Adicionar aos favoritos !"
                  onClick={() => handleFavorite(product.id)}
                />
              </S.Favorite>
            </S.Product>
          ))}
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
                products.length <= 3
                  ? console.log('não permitido')
                  : setPage(page + 1);
              }}
              disabled={products.length <= 3 ? true : false}
            >
              Next
            </button>
          </S.Pagination>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Search;
