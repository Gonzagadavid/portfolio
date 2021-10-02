import { shape, string } from 'prop-types';
import React from 'react';
import testingLibrarywhite from '../../images/testinglibrarywhite.svg';
import testingLibraryblue from '../../images/testinglibraryblue.svg';

const TestingLibrary = ({ style: { fill, fontSize } }) => {
  const icon = fill === 'white' ? testingLibrarywhite : testingLibraryblue;
  const custom = { width: fontSize };
  return (<img src={icon} alt="icon testing library" style={custom} />);
};

export default TestingLibrary;

TestingLibrary.propTypes = {
  style: shape({
    fill: string,
    fontSize: string,
  }).isRequired,
};
