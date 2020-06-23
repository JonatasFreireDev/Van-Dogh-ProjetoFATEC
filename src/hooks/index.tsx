import React from 'react';

import { FavoriteProvider } from './FavoriteContext';
import { CartProvider } from './CartContext';

const AppProvider: React.FC = ({ children }) => (
  <FavoriteProvider>
    <CartProvider>{children}</CartProvider>
  </FavoriteProvider>
);

export default AppProvider;
