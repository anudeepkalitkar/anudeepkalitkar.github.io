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
	const [projectId, SetProjectId] = useState();
	return (
		<div className="body">
			{projectId && (
				<>
					<ProjectDescription
						projectId={projectId}
						SetProjectId={SetProjectId}
					/>

					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red" href="#NavBar">
							<i className="large material-icons">arrow_upward</i>
						</a>
					</div>
					<Footer ></Footer>
				</>
			)}
			{!projectId && (
				<>
					<NavigationBar
						
						
						SetProjectId={SetProjectId}
					/>
					<Header  />
					<AboutMe ></AboutMe>
					<BackGround ></BackGround>
					<Projects  SetProjectId={SetProjectId}></Projects>
					<ContactMe ></ContactMe>

					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red" href="#NavBar">
							<i className="large material-icons">arrow_upward</i>
						</a>
					</div>
					<Footer ></Footer>
					
				</>
			)}
		</div>
	);
}

export default App;
