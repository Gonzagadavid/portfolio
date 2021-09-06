import React from 'react';
import { string, arrayOf } from 'prop-types';
import '../views/contents/contents.css';

const List = ({ list, title }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {list.map((item) => <li key={`${item[0]}${item.length}`}>{item}</li>)}
    </ul>
  </>
);

export default List;

List.propTypes = {
  list: arrayOf(string).isRequired,
  title: string.isRequired,
};
