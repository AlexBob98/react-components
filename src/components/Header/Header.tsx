import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>
    );
  }
}

export default Header;
