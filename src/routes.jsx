import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Book from './components/book/BookPage';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import CartPage from './components/cart/CartPage';
import BooksDetailPage from './components/book/BookDetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/books" component={Book} />
    <Route path="/books/:id" component={BooksDetailPage} />
    <Route path="/cart" component={CartPage} />
  </Route>
);
