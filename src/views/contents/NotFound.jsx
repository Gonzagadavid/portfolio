import React from 'react';
import './contents.css';
import { GiAlienBug } from 'react-icons/gi';

const NotFound = () => (
  <div className="contents notfound">
    <p><GiAlienBug style={{ fontSize: '170px' }} /></p>
    <p>Página não encontrada</p>
  </div>
);

export default NotFound;
