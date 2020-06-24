import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Project from "./components/Project";

import "./App.scss";

function App() {
    return (
        <React.Fragment>
            <Header />
            <AboutMe />
            <Experience />
            <Project />
            <Contact />
        </React.Fragment>
    );
}

export default App;
