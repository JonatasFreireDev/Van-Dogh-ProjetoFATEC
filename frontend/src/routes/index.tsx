import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Search from '../pages/Search';

import ErrorMessage from '../components/ErrorMessage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product" exact component={Search} />
    <Route path="/products/:id" component={Product} />
    <Route
      path="*"
      component={() => <ErrorMessage message="Está página não existe" />}
    />
  </Switch>
);

export default Routes;
