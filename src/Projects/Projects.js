import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";
import { ProjectsInfo } from "../StaticInformation/ProjectInfo";
// title: "Smart Traffic Control Sytem",
// coverImage: "Images/SmartTraffic.jpg",
// intro: "Utilizing edge detection techniques, our system captures and analyzes traffic density from CCTV footage, automating signal durations based on real-time vehicle count, reducing the need for manual intervention.",
// description: "Traffic congestion is a persistent challenge in major cities. Our innovative solution leverages edge detection to extract vital traffic data from CCTV footage. Instead of relying on manual traffic control, our system captures images from cameras stationed at junctions, transferring them to a database. These images are then processed to calculate traffic density. By setting a threshold for vehicle count, the system intelligently determines the duration of green and red lights at signals. This not only optimizes traffic flow but also significantly reduces the need for manual manpower, ensuring a more efficient and responsive traffic management system.",
// link: "",
// like: "SmartTrafficControlSytem"
const LikeAPI = "https://99kalitkar.in/Portfolio/likes.php?Blogname=";

const Projects = (props) => {
	const { darkMode, SetProjectId } = props;
	const projectList = [];
	const handleProjectRedirection =(event) =>{
		event.preventDefault();
		// console.log(event.target.id);
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
								href={project.link}
								id={key}
								rel="noreferrer"
								target="_blank"
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
		<section className="section">
			<h3 className="center ">Projects</h3>
			<br></br>
			<div className="container projects">
			{projectList}
			</div>
		</section>
	);
};

export default Projects;
