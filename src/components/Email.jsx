import React from 'react';
import './Email.css';

const Email = ({ email }) => (
  <div className="Email">
    <a target="_blank" href={`mailto:${email}`} rel="noreferrer"><em>{email}</em></a>
  </div>
);

export default Email;
