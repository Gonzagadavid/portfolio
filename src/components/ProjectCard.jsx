import React, { useState } from 'react';
import { string } from 'prop-types';
import './ProjectCard.css';
import {
  SiJavascript, SiHtml5, SiCss3, SiNodeDotJs, SiReact, SiJest, SiStorybook, SiRedux,
  SiMongodb, SiSocketDotIo, SiMysql, SiAngular, SiTypescript, SiNpm, SiReactrouter,
} from 'react-icons/si';

const ProjectCard = ({
  title, tec, description, path,
}) => {
  const [color, setColor] = useState('white');
  const fontStyle = { color };
  const styleIcons = { fontSize: '36px', fill: color };
  const icons = {
    js: <SiJavascript style={styleIcons} />,
    html: <SiHtml5 style={styleIcons} />,
    css: <SiCss3 style={styleIcons} />,
    node: <SiNodeDotJs style={styleIcons} />,
    react: <SiReact style={styleIcons} />,
    mongo: <SiMongodb style={styleIcons} />,
    socket: <SiSocketDotIo style={styleIcons} />,
    mysql: <SiMysql style={styleIcons} />,
    angular: <SiAngular style={styleIcons} />,
    ts: <SiTypescript style={styleIcons} />,
    jest: <SiJest style={styleIcons} />,
    npm: <SiNpm style={styleIcons} />,
    story: <SiStorybook style={styleIcons} />,
    reactRouter: <SiReactrouter style={styleIcons} />,
    redux: <SiRedux style={styleIcons} />,
  };

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
        <div className="icons">{tec.split(' ').map((s) => <p key={s}>{icons[s]}</p>)}</div>
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
