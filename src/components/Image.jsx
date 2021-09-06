import React from 'react';
import { string } from 'prop-types';
import './Image.css';

const Image = ({ src, alt }) => (
  <div className="Image">
    <img src={src} alt={alt} />
  </div>
);

export default Image;

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};
