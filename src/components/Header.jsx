import React from 'react';
import { string } from 'prop-types';
import './Header.css';

const Header = ({ text }) => (
  <div className="Header">
    <h1>{text}</h1>
  </div>
);

export default Header;

Header.propTypes = {
  text: string.isRequired,
};
