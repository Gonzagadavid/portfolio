import React, { useState } from 'react';
import { string } from 'prop-types';
import './ProjectCard.css';
import Icon from './icons/Icon';

const ProjectCard = ({
  title, tec, description, path,
}) => {
  const [color, setColor] = useState('white');
  const fontStyle = { color };
  return (
    <div className="ProjectCard">
      <a
        href={path}
        target="blank"
        onMouseOver={() => setColor('rgb(23, 18, 49)')}
        onMouseOut={() => setColor('white')}
      >
        <h4 style={fontStyle}>{title}</h4>
        <em style={fontStyle}>{description}</em>
        <div className="icons">
          {tec.split(' ').map((tecIcon) => <Icon key={tecIcon} tec={tecIcon} color={color} />)}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: string.isRequired,
  tec: string.isRequired,
  description: string.isRequired,
  path: string.isRequired,
};
