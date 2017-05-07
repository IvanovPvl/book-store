import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import CartPage from './components/cart/CartPage';
import Books from './containers/book/BooksContainer';
import BookDetails from './containers/book/BookDetailsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/books" component={Books} />
    <Route path="/books/:id" component={BookDetails} />
    <Route path="/cart" component={CartPage} />
  </Route>
);
