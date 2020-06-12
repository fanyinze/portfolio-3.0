import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.scss";

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
