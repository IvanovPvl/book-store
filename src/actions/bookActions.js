import Axios from 'axios';

import * as actionTypes from './actionTypes';
import { API_URL } from '../constants/common';

export const fetchBooksSuccess = books => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books,
  };
};

export const fetchBookByIdSuccess = book => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book,
  };
};

export const createBookSuccess = book => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book,
  };
};

export const fetchBooks = () => {
  return dispatch => {
    return Axios.get(API_URL)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchBookById = bookId => {
  return dispatch => {
    return Axios.get(`${API_URL}/${bookId}`)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createBook = (book) => {
  return dispatch => {
    return Axios.post(API_URL, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
