import { combineReducers } from 'redux';
import { bookReducer, booksReducer } from './bookReducers';
import cart from './cartReducers';

export default combineReducers({
  cart,
  book: bookReducer,
  books: booksReducer,
});
