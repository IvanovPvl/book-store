export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
      return [...state, Object.assign({}, action.book)];
    case 'FETCH_BOOK_SUCCESS':
      return action.books;
    default:
      return state;
  }
};