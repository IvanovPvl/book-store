import React from 'react';

const BookForm = props => {
  let titleInput, authorInput, priceInput, yearInput;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      const input = {
        year:   yearInput.value,
        title:  titleInput.value,
        price:  priceInput.value,
        author: authorInput.value,
      };

      props.submitBook(input);
      e.target.reset();
    }} className="form-horizontal">
      <div className="input-group">
        <input
          type="text"
          name="title"
          placeholder="Title"
          ref={node => titleInput = node}
          className="form-control" />
      </div>
      <br/>
      <div className="input-group">
        <input
          type="text"
          name="author"
          placeholder="Author"
          ref={node => authorInput = node}
          className="form-control" />
      </div>
      <br/>
      <div className="input-group">
        <input
          type="text"
          name="price"
          placeholder="Price"
          ref={node => priceInput = node}
          className="form-control" />
      </div>
      <br/>
      <div className="input-group">
        <input
          type="text"
          name="year"
          placeholder="Year"
          ref={node => yearInput = node}
          className="form-control" />
      </div>
      <br/>
      <div className="input-group">
        <input type="submit" className="btn btn-default"/>
      </div>
    </form>
  );
};

export default BookForm;
