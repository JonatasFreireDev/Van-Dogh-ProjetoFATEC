import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useMemo,
} from 'react';
import api from '../services/api';

import IProduct from '../Interface/IProduct';

interface CartContextData {
  products: ProductInCart[];
  totPrice: string;
  quantity: number;
  addToCart(id: number): void;
  rmFromCart(id: number): void;
  addAmount(id: number): void;
  decAmount(id: number): void;
}

interface ProductInCart extends IProduct {
  amountCart: number;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductInCart[]>(() => {
    const car = localStorage.getItem('VanDog:carrinho');

    if (car) {
      return JSON.parse(car);
    } else {
      return [] as ProductInCart[];
    }
  });
  const quantity = useMemo(() => products.length, [products]);
  const totPrice = useMemo(() => {
    const tot = products.reduce(
      (accumulator, p) => (accumulator += p.price * p.amountCart),
      0,
    );

    return tot.toFixed(2);
  }, [products]);

  const addAmount = useCallback(
    (id: number) => {
      const findProduct = products.find((product) => product.id === id);

      if (findProduct && findProduct?.amountCart + 1 > findProduct?.amount) {
        alert('Quantidade indisponivel');
        return;
      }

      const newCart = products.map((prodInCart) => {
        return {
          ...prodInCart,
          amountCart:
            prodInCart.id === id
              ? prodInCart.amountCart + 1
              : prodInCart.amountCart,
        };
      });

      localStorage.setItem('VanDog:carrinho', JSON.stringify(newCart));

      setProducts([...newCart]);
    },
    [products],
  );

  const decAmount = useCallback(
    (id: number) => {
      const findProduct = products.find((product) => product.id === id);

      if (findProduct && findProduct?.amountCart - 1 < 1) {
        alert('Não é possivel diminuir mais a quantidade');
        return;
      }

      const newCart = products.map((prodInCart) => {
        return {
          ...prodInCart,
          amountCart:
            prodInCart.id === id
              ? prodInCart.amountCart - 1
              : prodInCart.amountCart,
        };
      });

      localStorage.setItem('VanDog:carrinho', JSON.stringify(newCart));

      setProducts([...newCart]);
    },
    [products],
  );

  const addToCart = useCallback(
    async (id: number) => {
      const hasOneProduct = products.find((prodInCart) => prodInCart.id === id);

      if (hasOneProduct) {
        addAmount(id);
        return;
      }

      const response = await api.get<IProduct[]>(`/products?id=${id}`);

      const [product] = response.data;

      localStorage.setItem(
        'VanDog:carrinho',
        JSON.stringify([{ ...product, amountCart: 1 }, ...products]),
      );

      setProducts([{ ...product, amountCart: 1 }, ...products]);
    },
    [products, addAmount],
  );

  const rmFromCart = useCallback(
    (id: number) => {
      const removeFromCart = products.filter((prod) => prod.id !== id);

      localStorage.setItem('VanDog:carrinho', JSON.stringify(removeFromCart));

      setProducts([...removeFromCart]);
    },
    [products],
  );

  return (
    <CartContext.Provider
      value={{
        products,
        totPrice,
        quantity,
        addToCart,
        rmFromCart,
        addAmount,
        decAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
