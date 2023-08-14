import React from "react";
import axios from "axios";
import "./ProjectDescription.css";
import "../App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
const ProjectDescription = (props) => {
	const { darkMode, SetDarkMode, projectId, SetProjectId } = props;
	const projectDetails = ProjectsInfo[projectId ];
	return (
		<div className="body">
			<NavigationBar darkMode={darkMode} SetDarkMode={SetDarkMode} SetProjectId={SetProjectId} />

			<section id="PD-header">
				<div className="PD-header center" >
					<div className="row">
						<div className="col s12 m12">
							<div className="profile-content">
								<h1 className="project-name">{projectDetails.title}</h1>
								<div className="container">
									<h5 className="project-intro">{projectDetails.intro}</h5>
								</div>
							</div>
						</div>
						<div className="profile-switch">
							<a className="btn green" href={projectDetails.link}>
								Live
							</a>
						</div>
					</div>
				</div>
				<section className="section">
					<div className="container ">
						<div className="container center">
							<img
								className=" responsive-img project-img"
								src={projectDetails.coverImage}
								alt={projectDetails.title}
							/>
						</div>
						<h4 className="section-title">Project Overview:</h4>
						<h6 className="project-desc">{projectDetails.description}</h6>
					</div>
				</section>
				<section className="section">
					<div className="container ">
						<h4 className="section-title">Tools Used:</h4>
						<div className="container ">
							<div className="row center skills">
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
										alt="SkillSet"
									/>
									Python
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
										alt="SkillSet"
									/>
									React
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
										alt="SkillSet"
									/>
									Node.js
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
										alt="SkillSet"
									/>
									JavaScript
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
										alt="SkillSet"
									/>
									Ruby
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
										alt="SkillSet"
									/>
									C++
								</div>

								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
										alt="SkillSet"
									/>
									Go-Lang
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
										alt="SkillSet"
									/>
									HTML
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
										alt="SkillSet"
									/>
									CSS
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
										alt="SkillSet"
									/>
									PhP
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
										alt="SkillSet"
									/>
									MySQL
								</div>
								<div className="col s12 m1">
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
										alt="SkillSet"
									/>
									Bash
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container ">
					<h4 className="section-title">Links:</h4>

						<div className=" row center">
							<div className="col s12 m4">
								<div className="profile-switch">
									<a className="btn-large green" href={projectDetails.link}>
										Live
									</a>
								</div>
							</div>

							<div className="col s12 m4">
								<div className="profile-switch">
									<a className="btn-large green" href={projectDetails.like}>
										Code
									</a>
								</div>
							</div>
							<div className="col s12 m4">
								<div className="profile-switch">
									<a className="btn-large green" href={projectDetails.link}>
										Back
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};

export default ProjectDescription;
