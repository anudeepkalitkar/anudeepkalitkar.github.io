import React from "react";
import "./ProjectDescription.css";
import "../App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
import { SkillSetImages } from "../StaticInformation/ImagesInfo";
import GenerateProjectDesp from "./GenerateProjectDesp";

const ProjectDescription = (props) => {
	const { projectId, SetProjectId } = props;
	const projectDetails = ProjectsInfo[projectId];
	const toolsUsed = [];

	const HandlebackButton =  (e) =>{
		e.preventDefault();
		SetProjectId(null);
	}
	projectDetails.tools.forEach((tool, key) => {
		toolsUsed.push(
			<div className="col s12 m1" key={"projectTools" + key}>
				{SkillSetImages.find((skill) => skill.skill === tool) && (
					<>
						<img
							src={SkillSetImages.find((skill) => skill.skill === tool).imagePath}
							alt="SkillSet"
						/>
						{tool}
					</>
				)}
				{!SkillSetImages.find((skill) => skill.skill === tool) && (
					<div className="NoSkillImage">
						<b>{tool}</b>
					</div>
				)}
			</div>
		);
	});
	return (
		<div className="body">
			<NavigationBar SetProjectId={SetProjectId} />

			<section id="PD-header">
				<div className="PD-header center">
					<div className="row">
						<div className="col s12 m12">
							<div className="profile-content">
								<h1 className="project-name">{projectDetails.title}</h1>
								<div className="container">
									<h5 className="project-intro">
										{projectDetails.intro}</h5>
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
						<h6 className="project-desc">
						<GenerateProjectDesp text={projectDetails.description}></GenerateProjectDesp></h6>
					</div>
				</section>
				<section className="section">
					<div className="container ">
						<h4 className="section-title">Tools Used:</h4>
						<div className="container ">
							<div className="row center skills"> {toolsUsed}</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container ">
						<h4 className="section-title">Links:</h4>

						<div className=" row center">
							<div className="col s12 m4">
								{projectDetails.link && (
									<div className="profile-switch">
										<a className="btn-large green" href={projectDetails.link}>
											Live
										</a>
									</div>
								)}
							</div>

							<div className="col s12 m4">
								{projectDetails.sourceCode && (
									<div className="profile-switch">
										<a
											className="btn-large green"
											href={projectDetails.sourceCode}>
											Code
										</a>
									</div>
								)}
							</div>
							<div className="col s12 m4">
								<div className="profile-switch">
									<button className="btn-large green" href="/" onClick={HandlebackButton}>
										Back
									</button>
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
