const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  }
}

const allBooksDeletedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_DELETED_FROM_CART',
    payload: bookId
  }
}

const fetchBooksOld = (bookstoreService, dispatch) => () => {

}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested()); 
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks,
  allBooksDeletedFromCart,
  bookDeletedFromCart,
  bookAddedToCart
};