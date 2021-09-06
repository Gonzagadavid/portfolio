import React from 'react';
import './Email.css';

const Email = ({ email }) => (
  <div className="Email">
    <a type="button" href={`mailto:${email}`}><em>{email}</em></a>
  </div>
);

export default Email;
