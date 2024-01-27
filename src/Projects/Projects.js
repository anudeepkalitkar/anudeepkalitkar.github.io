import React from "react";
import axios from "axios";
import "./Projects.css";
import { LikeAPI } from "../StaticInformation/UrlLinkInfo";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
const Projects = (props) => {
	const projectList = [];
	ProjectsInfo.forEach((project, key) => {
		projectList.push(
			<div className="row" key={"project" + key} id={project.urlname}>
				<div className="col s12 container">
					<img className="responsive-img" src={project.coverImage} alt={project.title} />
				</div>
				<div className="col s12">
					<h4 className="">{project.title}</h4>

					<h6 className="project-intro">{project.intro}</h6>

					<div className="row center">
						<div className="col s12 m6">
							<a
								className="btn green wave-effect center"
								href={"/"+project.urlname}
								rel="noreferrer"
							>
								<i className="fas fa-laptop-code"></i> Explore
							</a>
						</div>

						<div className="col s12 m6">
							<button
								className="btn blue wave-effect center"
								onClick={() => {
									handleLikes(project.urlname);
								}}>
								<i className="far fa-thumbs-up"></i> Like
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	});

	const handleLikes = async (projectliked) => {
		let likeData = {
			projectName: projectliked,
		};
		let likes = {
			method: "post",
			contentType: "application/json",
			url: LikeAPI,
			data: likeData,
		};
		await axios(likes).then(
			(res) => {
				if (res.data.success) {
					alert("Thanks for your like!!");
				}
			},

			(error) => alert(likeData.projectName)
		);
	};

	return (
		<section className="section">
			<h3 className="center ">Projects</h3>
			<br></br>
			<div className="container projects">{projectList}</div>
		</section>
	);
};

export default Projects;
