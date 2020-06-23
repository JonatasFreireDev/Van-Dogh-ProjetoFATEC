import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Search from '../pages/Search';
import FindCategory from '../pages/FindCategory';
import Cart from '../pages/Cart';

import ErrorMessage from '../components/ErrorMessage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product" exact component={Search} />
    <Route path="/category" exact component={FindCategory} />
    <Route path="/products/:id" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route
      path="*"
      component={() => <ErrorMessage message="Está página não existe" />}
    />
  </Switch>
);

export default Routes;
