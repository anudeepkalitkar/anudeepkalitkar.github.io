import "./App.css";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";

function App() {
	const [darkMode, SetDarkMode] = useState(true);
	return (
		<div className="body">
			<NavigationBar  darkMode={darkMode} SetDarkMode={SetDarkMode} />
			<Header darkMode={darkMode}  />
            <AboutMe></AboutMe>

			{/* 
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
            </div> */}
		</div>
	);
}

export default App;
