import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import React, { useState, useEffect } from "react";

function App() {
    const [darkMode, SetDarkMode] = useState(false);
  return (
    
    <div className="body">
            <NavigationBar darkMode = {darkMode}/>
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
