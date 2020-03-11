import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

const Navbar = props => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
};
export default withRouter(Navbar);
