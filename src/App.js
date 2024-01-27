import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./HomePage/HomePage";
import Education from "./BackGround/Education";
import Experience from "./BackGround/Experience";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import { ProjectsInfo } from "./StaticInformation/ProjectInfo";
import ProjectDescription from "./Projects/ProjectDescription";
import ContactMe from "./ContactMe/ContactMe"
import { HashRouter } from 'react-router-dom';

function App() {
	const projectRoutes = [];
	ProjectsInfo.forEach((project, key) => {
		projectRoutes.push(

			<Route
				key={"project" + key}
				path={"/" + project.urlname}
				element={
					<Layout
						PassedComponent={() => <ProjectDescription projectUrlName={project.urlname} />}
					/>
				}
			/>
		);
	});
	return (
		<>
		<HashRouter>
			<NavigationBar></NavigationBar>
			<Routes>
				<Route path="/" element={<Layout PassedComponent={HomePage} />} />
				<Route path="/skills" element={<Layout PassedComponent={Skills} />} />
				<Route path="/projects" element={<Layout PassedComponent={Projects} />} />
				<Route path="/education" element={<Layout PassedComponent={Education} />} />
				<Route path="/experience" element={<Layout PassedComponent={Experience} />} />
				<Route path="/contactme" element={<Layout PassedComponent={ContactMe} />} />
				{projectRoutes}
			</Routes>

			<Footer></Footer>
		</HashRouter>
		</>
	);
}

export default App;
