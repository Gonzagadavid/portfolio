import React from 'react';
import './Header.css';

const Header = ({ text }) => (
  <div className="Header">
    <h1>{text}</h1>
  </div>
);

export default Header;
