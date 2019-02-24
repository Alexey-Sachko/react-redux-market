import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      { 
        books.map((item) => {
          const { id } = item;
          return (
            <li key={id}>
              <BookListItem 
                book={item}
                onAddedToCart={() => onAddedToCart(id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  };

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  
  };
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);

