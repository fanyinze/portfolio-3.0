import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />
      <Experience />
      <Contact />
    </React.Fragment>
  );
}

export default App;
