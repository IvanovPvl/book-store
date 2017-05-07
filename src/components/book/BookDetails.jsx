import React, { PropTypes } from 'react';

const BookDetails = ({book}) => {
  return (
    <div className="media">
      <div className="ml-3">
        <a href="#">
          <img src="http://placehold.it/200/450" alt="Placehold"/>
        </a>
      </div>
      <div className="media-body">
        <h4 className="mt-0">{book.title}</h4>
        <ul>
          <li><strong>Author: </strong> {book.author}</li>
          <li><strong>Price: </strong> ${book.price}</li>
          <li><strong>Year: </strong> {book.year}</li>
          <br/>
          <button className="btn btn-primary">Buy</button>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
