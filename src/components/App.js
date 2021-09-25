import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import "./Main.css"
import Experience from "./Eduction and Experience/Experience";
import Education from "./Eduction and Experience/Education";
import Contact from "./Contact";
const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.body.setAttribute("data-theme", "dark");
        }
        else {
            document.body.removeAttribute("data-theme");
        }
    }, [darkMode])
    return (
        <div className="Body">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="row">
                <div className="col s12 m7">
                    <AboutMe Content_type="Primary"></AboutMe>
                    <Projects ></Projects>
                    <Experience></Experience>

                </div>

                <div className="col s12 m4">
                    <AboutMe Content_type="Secondary"></AboutMe>
                    <Skills></Skills>
                    <Education></Education>
                    <Contact></Contact>
                </div>
            </div>

        </div>
    );
};

export default App;