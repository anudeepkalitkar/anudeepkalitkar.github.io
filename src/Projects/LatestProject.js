import React from "react";
import axios from "axios";
import "./Projects.css";
import { LatestProjectInfo } from "../StaticInformation/ProjectInfo";
import { LikeAPI } from "../StaticInformation/UrlLinkInfo";
const LatestProject = (props) => {
	const { SetProjectId } = props;
	const handleProjectRedirection = (event) => {
		SetProjectId(event.target.id);
	};

	// ProjectsInfo.forEach((project, key) => {
	// 	projectList.push(
	// 		<div className="row" key={"project" + key}>
	// 			<div className="col s12 m6 container">
	// 				<img className="responsive-img" src={project.coverImage} alt={project.title} />
	// 			</div>
	// 			<div className="col s12 m6">
	// 				<h4 className="">{project.title}</h4>

	// 				<h6 className="project-intro">{project.intro}</h6>

	// 				<div className="row center">
	// 					<div className="col s12 m6">
	// 						<a
	// 							className="btn green wave-effect center"
	// 							href="#PD-header"
	// 							id={key}
	// 							rel="noreferrer"
	// 							onClick={handleProjectRedirection}>
	// 							<i className="fas fa-laptop-code"></i> Explore more
	// 						</a>
	// 					</div>

	// 					<div className="col s12 m6">
	// 						<button
	// 							className="btn blue wave-effect center"
	// 							onClick={() => {
	// 								handleLikes(project.like);
	// 							}}>
	// 							<i className="far fa-thumbs-up"></i> Like
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// });

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
		<section className="section" id="LatestProject">
			<h3 className="center ">Latest Project</h3>
			<br></br>
			<div className="container projects">
				<div className="row">
					<div className="col s12 m6 container">
						<img
							className="responsive-img"
							src={LatestProjectInfo.coverImage}
							alt={LatestProjectInfo.title}
						/>
					</div>
					<div className="col s12 m6">
						<h4 className="">{LatestProjectInfo.title}</h4>

						<h6 className="project-intro">{LatestProjectInfo.intro}</h6>

						<div className="row center">
							<div className="col s12 m6">
								<a
									className="btn green wave-effect center"
									href="#PD-header"
									id="{key}"
									rel="noreferrer"
									onClick={handleProjectRedirection}>
									<i className="fas fa-laptop-code"></i> Explore more
								</a>
							</div>

							<div className="col s12 m6">
								<button
									className="btn blue wave-effect center"
									onClick={() => {
										handleLikes(LatestProjectInfo.like);
									}}>
									<i className="far fa-thumbs-up"></i> Like
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestProject;
