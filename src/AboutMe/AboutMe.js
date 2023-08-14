import React from "react";
import "./AboutMe.css";
import { Introduction, JobSeeking } from "../StaticInformation/AboutMeInfo";
import { SkillSetImages } from "../StaticInformation/ImagesInfo";
const AboutMe = (props) => {
	const { darkMode } = props;
	const skillSetList = [];
	SkillSetImages.forEach((skill, key) => {
		skillSetList.push(
			<div className="col s12 m2" key={"skillimage"+key}>
				<img src={skill.imagePath} alt={skill.skill} />
				{skill.skill}
			</div>
		);
	});

	return (
		<section className="section">
			<h3 className="center">About Me</h3>
			<div className="row">
				<div className="col s12 m6">
					<div className="container">
						<h4 className="section-title">Well I'm...</h4>
						<h6 className="intro-desc">{Introduction}</h6>
						<h6 className="job-desc">{JobSeeking}</h6>
						<div className="center">
							<a className="btn green " href="#!">
								Contact
							</a>
						</div>
					</div>
				</div>
				<div className="col s12 m6">
					<div className="container ">
						<h4 className="center section-title">My Skills</h4>
						<div className="row center skills">
							{skillSetList.slice(0, 6).map((item) => (
								<div key={"skill"+item}>{item}</div>
							))}
						</div>
						<div className="row center skills">
							{skillSetList.slice(6, 12).map((item) => (
								<div key={"skill"+item}>{item}</div>
							))}
						</div>
						<div className="row center skills">
							{skillSetList.slice(12, 18).map((item) => (
								<div key={"skill"+item}>{item}</div>
							))}
						</div>
						<div className="row center skills">
							{skillSetList.slice(18, 24).map((item) => (
								<div key={item}>{item}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
