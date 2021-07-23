import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import ScrollToTop from '../functions/ScrollToTop';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <ScrollToTop />
      <Menu />
      <Content />
    </Router>
  </div>
);

export default App;
