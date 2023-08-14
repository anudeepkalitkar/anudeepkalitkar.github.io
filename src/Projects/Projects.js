import React from "react";
import axios from "axios";
import "./Projects.css";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
import {LikeAPI} from "../StaticInformation/UrlLinkInfo"

const Projects = (props) => {
	const { darkMode, SetProjectId } = props;
	const projectList = [];
	const handleProjectRedirection =(event) =>{
		SetProjectId(event.target.id);
	};

	ProjectsInfo.forEach((project, key) => {
		projectList.push(
			<div className="row" key={"project"+key}>
				<div className="col s12 m6 container">
					<img className="responsive-img" src={project.coverImage} alt={project.title} />
				</div>
				<div className="col s12 m6">
					<h4 className="">{project.title}</h4>
					
					<h6 className="project-intro">{project.intro}</h6>

					<div className="row center">
						<div className="col s12 m6">
							<a
								className="btn green wave-effect center"
								href="#PD-header"
								id={key}
								rel="noreferrer"
								onClick={handleProjectRedirection}>
								<i className="fas fa-laptop-code"></i> Explore more
							</a>
						</div>

						<div className="col s12 m6">
							<button
								className="btn blue wave-effect center"
								onClick={() => {
									postLike(project.like);
								}}
							>
								<i className="far fa-thumbs-up"></i> Like
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	});

	const postLike = async (proj) => {
		let likes = {
		  method: 'get',
		  url: LikeAPI + proj,
		  timeout: 4000
		}
		await axios(likes).then(res => {
		  console.log(res.data);
		}, (error) => console.log(error));
	  }
	return (
		<section className="section" id="Projects">
			<h3 className="center ">Projects</h3>
			<br></br>
			<div className="container projects">
			{projectList}
			</div>
		</section>
	);
};

export default Projects;
