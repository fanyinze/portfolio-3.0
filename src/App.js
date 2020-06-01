import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />
    </React.Fragment>
  );
}

export default App;
