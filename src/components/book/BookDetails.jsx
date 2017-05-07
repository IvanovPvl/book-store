import React, { PropTypes } from 'react';

const BookDetails = ({book, addToCart}) => {
  return (
    <div>
      <h4>{book.title}</h4>
      <div className="media">
        <div>
          <a href="#">
            <img src="http://placehold.it/200/450" alt="Placehold"/>
          </a>
        </div>
        <div className="media-body">
          <ul>
            <li><strong>Author: </strong> {book.author}</li>
            <li><strong>Price: </strong> ${book.price}</li>
            <li><strong>Year: </strong> {book.year}</li>
            <br/>
            <button className="btn btn-primary" onClick={e => addToCart(book)}>Buy</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
