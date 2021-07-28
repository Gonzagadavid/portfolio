import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = ({ icon, path, text }) => {
  const [color, setColor] = useState('white');
  const iconStyle = { fontSize: '18px', fill: color };
  const gitHubIcon = <FaGithub style={iconStyle} />;
  const linkedinIcon = <FaLinkedin style={iconStyle} />;
  const iconCot = icon === 'github' ? gitHubIcon : linkedinIcon;
  return (
    <div className="Contact">
      <a
        href={path}
        target="blank"
        onMouseOver={() => setColor('rgb(23, 18, 49)')}
        onMouseOut={() => setColor('white')}
      >
        {iconCot}
        {' '}
        {text}
      </a>
    </div>
  );
};

export default Contact;
