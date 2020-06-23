import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { GiTrashCan } from 'react-icons/gi';

import { useCart } from '../../hooks/CartContext';

const Cart: React.FC = () => {
  const { products, totPrice, addAmount, rmFromCart, decAmount } = useCart();
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState({ status: false, message: '' });

  const productsCart = useMemo(() => products, [products]);

  useEffect(() => {
    if (products.length === 0) {
      setFailure({
        status: true,
        message: 'Adicione um produto ao Carrinho !',
      });
    } else {
      setFailure({
        status: false,
        message: '',
      });
    }

    setLoading(false);
  }, [products]);

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : failure.status ? (
        <ErrorMessage message={failure.message} />
      ) : (
        <>
          <S.Content>
            <h3>Carrinho de compras...</h3>
            {productsCart.map((product, index) => (
              <S.Product key={product.id}>
                <S.Image>
                  <img src={product.picture} alt={product.name} />
                </S.Image>
                <S.Description>
                  <Link to={`/products/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <p>R$ {product.price}</p>
                </S.Description>
                <S.Config>
                  <GiTrashCan
                    size={28}
                    onClick={() => {
                      rmFromCart(product.id);
                    }}
                  />
                  <div>
                    <button
                      onClick={() => decAmount(product.id)}
                      disabled={product.amountCart <= 1 ? true : false}
                    >
                      -
                    </button>
                    <span>{product.amountCart}</span>
                    <button
                      onClick={() => addAmount(product.id)}
                      disabled={
                        product.amountCart >= product.amount ? true : false
                      }
                    >
                      +
                    </button>
                  </div>
                  <span>
                    <span>Total: </span>
                    <strong>
                      R$ {(product.price * product.amountCart).toFixed(2)}
                    </strong>
                  </span>
                </S.Config>
                {index !== products.length - 1 ? <hr /> : ''}
              </S.Product>
            ))}
            <p>
              Total da Compra: <span>R$ {totPrice}</span>
            </p>
            <button>Finalizar Compra</button>
          </S.Content>
        </>
      )}
    </S.Container>
  );
};

export default Cart;
