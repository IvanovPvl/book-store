import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Book Store</a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/books" className="nav-link">Book</Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container main-content">
        {props.children}
      </div>
    </div>
  );
};

export default App;
