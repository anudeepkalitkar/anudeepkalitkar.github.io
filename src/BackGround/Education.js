import React from "react";
import M from "materialize-css";
import "./BackGround.css";
import { EducationInfo } from "../StaticInformation/EducationInfo";

const Education = (props) => {
	const handleRevealCard = (event) => {
		let modelId = "reveal-" + event.target.id.split("-")[1];
		let modal = document.getElementById(modelId);
		if (modal) {
			let modelInstance = M.Modal.init(modal, {});
			modelInstance.open();
		}
	};

	const educationList = [];
	EducationInfo.forEach((edu, key) => {
		educationList.push(
			<div
				key={"Edu" + key}
				className="section-inner card"
				id={"card-" + key}
				onClick={handleRevealCard}>
				<div className="card-content activator" id={"content-" + key}>
					<span className="card-title activator" id={"title-" + key}>
						<b>{edu.Degree}</b>
					</span>
					<span className="card-title" id={"title1-" + key}>
						{edu.from}, ({edu.year})
					</span>
					<p className="">Major: {edu.major}</p>
				</div>
				<div id={"reveal-" + key} className="modal">
					<div className="">
						<div className="card-content ">
							<span className="card-title ">
								<b>{edu.Degree}</b>
							</span>
							<p className="">{edu.from}</p>
							<p className="">Year: {edu.year}</p>
							<p className="">Major: {edu.major}</p>
							{edu.percentage && <p className="">Percentage: {edu.percentage}</p>}
							{edu.CGPA && <p className="">CGPA: {edu.CGPA}</p>}
						</div>
						<div className="center">
							<button className="modal-close btn ">close</button>
						</div>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div className="Education">
			<h3 className="center">Education</h3>
			<div className=" ">{educationList}</div>
		</div>
	);
};
export default Education;
