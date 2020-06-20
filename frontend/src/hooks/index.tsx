import React from 'react';

import { FavoriteProvider } from './FavoriteContext';

const AppProvider: React.FC = ({ children }) => (
  <FavoriteProvider>{children}</FavoriteProvider>
);

export default AppProvider;
