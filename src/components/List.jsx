import React from 'react';
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
