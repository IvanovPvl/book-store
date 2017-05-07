import { connect } from 'react-redux';
import React from 'react';

import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchBookById(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book} addToCart={this.addToCart.bind(this)} />
      </div>
    );
  }

  addToCart(book) {
    const item = {
      title: book.title,
      price: book.price,
    };

    this.props.addToCart(item);
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart:     item   => dispatch(bookActions.addToCart(item)),
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
