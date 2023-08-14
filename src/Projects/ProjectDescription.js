import React, { useState } from "react";
import axios from "axios";
import "./Projects.css";
import "../App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
const ProjectDescription = (props) => {
	const { darkMode, SetDarkMode, projectId } = props;

	return (
		<div className="body">
			<NavigationBar darkMode={darkMode} SetDarkMode={SetDarkMode} />
            {/* {ProjectsInfo} */}
		</div>
	);
};

export default ProjectDescription;
