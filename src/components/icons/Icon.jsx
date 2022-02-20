import React from 'react';
import {
  SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiJest, SiStorybook, SiRedux,
  SiMongodb, SiSocketdotio, SiAngular, SiTypescript, SiNpm, SiReactrouter, SiWebpack,
  SiEslint, SiTsnode, SiExpress, SiJsonwebtokens, SiNodemon,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { string } from 'prop-types';
import TestingLibrary from './TestingLibrary';

const Icon = ({ color, tec }) => {
  const styleIcons = { fontSize: '36px', fill: color };
  const icons = {
    js: <SiJavascript style={styleIcons} />,
    html: <SiHtml5 style={styleIcons} />,
    css: <SiCss3 style={styleIcons} />,
    node: <SiNodedotjs style={styleIcons} />,
    react: <SiReact style={styleIcons} />,
    mongo: <SiMongodb style={styleIcons} />,
    socket: <SiSocketdotio style={styleIcons} />,
    mysql: <GrMysql style={styleIcons} />,
    angular: <SiAngular style={styleIcons} />,
    ts: <SiTypescript style={styleIcons} />,
    jest: <SiJest style={styleIcons} />,
    npm: <SiNpm style={styleIcons} />,
    story: <SiStorybook style={styleIcons} />,
    reactRouter: <SiReactrouter style={styleIcons} />,
    redux: <SiRedux style={styleIcons} />,
    testingLibrary: <TestingLibrary style={styleIcons} />,
    webpack: <SiWebpack style={styleIcons} />,
    eslint: <SiEslint style={styleIcons} />,
    express: <SiExpress style={styleIcons} />,
    tsnode: <SiTsnode style={styleIcons} />,
    jwt: <SiJsonwebtokens style={styleIcons} />,
    nodemon: <SiNodemon style={styleIcons} />,
  };

  return (
    <p>{icons[tec]}</p>
  );
};

export default Icon;

Icon.propTypes = {
  color: string.isRequired,
  tec: string.isRequired,
};
