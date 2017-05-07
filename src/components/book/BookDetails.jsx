import React, { PropTypes } from 'react';

const BookDetails = props => {
  return (
    <div className="media">
      <div className="ml-3">
        <a href="#">
          <img src="http://placehold.it/200/450" alt="Placehold"/>
        </a>
      </div>
      <div className="media-body">
        <h4 className="mt-0">Title</h4>
        <ul>
          <li><strong>Author: </strong> Author</li>
          <li><strong>Price: </strong> Price</li>
          <li><strong>Year: </strong> Year</li>
          <br/>
          <button className="btn btn-primary">Buy</button>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
