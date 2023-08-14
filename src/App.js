import "./App.css";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import BackGround from "./BackGound/BackGround";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";
import ProjectDescription from "./Projects/ProjectDescription";
import Footer from "./Footer/Footer";

function App() {
	const [darkMode, SetDarkMode] = useState(true);
	const [projectId, SetProjectId] = useState();
	return (
		<div className="body">
			{projectId && (
				<>
					<ProjectDescription
						darkMode={darkMode}
						SetDarkMode={SetDarkMode}
						projectId={projectId}
						SetProjectId={SetProjectId}
					/>

					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red" href="#NavBar">
							<i className="large material-icons">arrow_upward</i>
						</a>
					</div>
					<Footer darkMode={darkMode}></Footer>
				</>
			)}
			{!projectId && (
				<>
					<NavigationBar
						darkMode={darkMode}
						SetDarkMode={SetDarkMode}
						SetProjectId={SetProjectId}
					/>
					<Header darkMode={darkMode} />
					<AboutMe darkMode={darkMode}></AboutMe>
					<BackGround darkMode={darkMode}></BackGround>
					<Projects darkMode={darkMode} SetProjectId={SetProjectId}></Projects>
					<ContactMe darkMode={darkMode}></ContactMe>

					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red" href="#NavBar">
							<i className="large material-icons">arrow_upward</i>
						</a>
					</div>
					<Footer darkMode={darkMode}></Footer>
				</>
			)}
		</div>
	);
}

export default App;
