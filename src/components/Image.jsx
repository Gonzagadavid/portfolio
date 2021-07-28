import React from 'react';
import './Image.css';

const Image = ({ src, alt }) => (
  <div className="Image">
    <img src={src} alt={alt} />
  </div>
);

export default Image;
