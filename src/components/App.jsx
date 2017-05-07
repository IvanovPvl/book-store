import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Book Store</a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/books">Book</Link>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default App;
