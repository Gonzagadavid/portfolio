import React from 'react';
import './Email.css';

const Email = ({ email }) => {
  const redirectEmail = () => { window.open(`mailto:${email}`); };
  return (
    <div className="Email">
      <button type="button" onClick={redirectEmail}><em>{email}</em></button>
    </div>
  );
};
export default Email;
