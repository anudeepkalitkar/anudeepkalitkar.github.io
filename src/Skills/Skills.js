import React from "react";
import "./Skills.css";
import { SkillSetImages } from "../StaticInformation/ImagesInfo";

const Skills = (props) => {
	const skillSetList = [];
	SkillSetImages.forEach((skill, key) => {
		skillSetList.push(
			<div className="col s12 m2" key={"skillimage" + key}>
				<img src={skill.imagePath} alt={skill.skill} />
				{skill.skill}
			</div>
		);
	});

	return (
		<section className="section" id="About">
			<h3 className="center">My Skills</h3>

			<div className="container ">
				<div className="row center skills">
					{skillSetList.slice(0, 6).map((item, i) => (
						<div key={"skill" + i}>{item}</div>
					))}
				</div>
				<div className="row center skills">
					{skillSetList.slice(6, 12).map((item, i) => (
						<div key={"skill" + i}>{item}</div>
					))}
				</div>
				<div className="row center skills">
					{skillSetList.slice(12, 18).map((item, i) => (
						<div key={"skill" + i}>{item}</div>
					))}
				</div>
				<div className="row center skills">
					{skillSetList.slice(18, 24).map((item, i) => (
						<div key={"skill" + i}>{item}</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
