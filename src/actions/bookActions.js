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

export const addToCartSuccess = item => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item,
  };
};

export const fetchCartSuccess = items => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items,
  };
};

export const fetchBooks = () => {
  return dispatch => {
    return Axios.get(`${API_URL}/book`)
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
    return Axios.get(`${API_URL}/book/${bookId}`)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createBook = book => {
  return dispatch => {
    return Axios.post(`${API_URL}/book`, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addToCart = item => {
  return dispatch => {
    return Axios.post(`${API_URL}/cart`, item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCart = () => {
  return dispatch => {
    return Axios.get(`${API_URL}/cart`)
      .then(response => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
