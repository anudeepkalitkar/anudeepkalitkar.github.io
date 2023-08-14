import "./App.css";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import BackGround from "./BackGound/BackGround";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";
import ProjectDescription from "./Projects/ProjectDescription";

function App() {
	const [darkMode, SetDarkMode] = useState(true);
	const [projectId, SetProjectId] = useState(null);
	return (
		<div className="body">
			{projectId && (
				<ProjectDescription
					darkMode={darkMode}
					SetDarkMode={SetDarkMode}
					projectId={projectId}
				/>
			)}
			{!projectId && (
				<>
					<NavigationBar darkMode={darkMode} SetDarkMode={SetDarkMode} />
					<Header darkMode={darkMode} />
					<AboutMe darkMode={darkMode}></AboutMe>
					<BackGround darkMode={darkMode}></BackGround>
					<Projects darkMode={darkMode} SetProjectId={SetProjectId}></Projects>
					<ContactMe darkMode={darkMode}></ContactMe>
				</>
			)}
		</div>
	);
}

export default App;
