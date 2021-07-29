import React from 'react';

import Content from './components/layout/Content';
import Menu from './components/layout/Menu';
import ScrollToTop from './functions/ScrollToTop';
import './App.css';

const App = () => (
  <div className="App">
    <ScrollToTop />
    <Menu />
    <Content />
  </div>
);

export default App;
