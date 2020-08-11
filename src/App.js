import React from "react";
import { Element } from "react-scroll";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Element name='home'>
        <Header />
      </Element>
      <NavBar />
      <Element name='aboutMe'>
        <AboutMe />
      </Element>
      <Element name='experience'>
        <Experience />
      </Element>
      <Element name='project'>
        <Project />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </React.Fragment>
  );
}

export default App;
