import { combineReducers } from 'redux';
import { bookReducer, booksReducer } from './bookReducers';

export default combineReducers({
  book: bookReducer,
  books: booksReducer,
});
