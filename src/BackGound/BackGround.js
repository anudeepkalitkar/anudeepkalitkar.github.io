import React from "react";
import "./BackGround.css";
import { EducationInfo } from "../StaticInformation/EducationInfo";
import { ExperienceInfo } from "../StaticInformation/ExperienceInfo";
const BackGround = (props) => {
	const { darkMode } = props;
	const educationList = [];
	const experienceList = [];
	ExperienceInfo.forEach((exp, key) => {
		experienceList.push(
			<div key={"Exp"+key} className="section-inner card ">
				<div className="card-content activator">
					<span className="card-title activator">
						<b>{exp.title}</b>
						<i className="material-icons right">more_vert</i>
					</span>
					<span className="card-title">{exp.Company}</span>
					<p className="">{exp.tenure}</p>
				</div>
				<div className="card-reveal section-inner">
					<span className="card-title">
						{exp.title}
						<i className="material-icons right">close</i>
					</span>
					<span className="card-title">{exp.Company}</span>
					<p className="">{exp.tenure}</p>
					<p className="">Key Points:</p>
					{exp.keyPoints.map((point, key) => {
						return <li key={key}>{point}</li>;
					})}
				</div>
			</div>
		);
	});
	EducationInfo.forEach((edu, key) => {
		educationList.push(
			<div key={"Edu"+key} className="section-inner card">
				<div className="card-content activator">
					<span className="card-title activator">
						<b>{edu.Degree}</b>
						<i className="material-icons right">more_vert</i>
					</span>
					<span className="card-title">{edu.from}, ({edu.year})</span>
					{/* <p className="">
						{edu.from}, ({edu.year})
					</p> */}
					<p className="">Major: {edu.major}</p>
				</div>
				<div className="card-reveal">
					<span className="card-title activator">
						<b>{edu.Degree}</b>
						<i className="material-icons right">close</i>
					</span>
					<p className="">{edu.from}</p>
					<p className="">Year: {edu.year}</p>
					<p className="">Major: {edu.major}</p>
					{edu.percentage && <p className="">Percentage: {edu.percentage}</p>}
					{edu.CGPA && <p className="">CGPA: {edu.CGPA}</p>}
				</div>
			</div>
		);
	});
	return (
		<section className="section" id="Experience">
			<h3 className="center ">Back Ground</h3>
			<div className="row">
				<div className="col s12 m6">
					<div className="container">
						<h4 className="center section-title ">Experience</h4>
						{experienceList}
					</div>
				</div>
				<div className="col s12 m6">
					<div className="container ">
						<h4 className="center section-title">Education</h4>
						{educationList}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BackGround;
