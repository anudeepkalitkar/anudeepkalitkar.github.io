import React from "react";
import M from "materialize-css";
import "./BackGround.css";
import { ExperienceInfo } from "../StaticInformation/ExperienceInfo";
const Experience = (props) => {
	const handleRevealCard = (event) => {
		let modelId = "reveal-" + event.target.id.split("-")[1];
		let modal = document.getElementById(modelId);
		if (modal) {
			let modelInstance = M.Modal.init(modal, {});
			modelInstance.open();
		}
	};

	const experienceList = [];
	ExperienceInfo.forEach((exp, key) => {
		experienceList.push(
			<div
				key={"Exp" + key}
				className="section-inner card "
				id={"card-" + key}
				onClick={handleRevealCard}>
				<div className="card-content activator" id={"content-" + key}>
					<span className="card-title activator" id={"title-" + key}>
						<b>{exp.title}</b>
					</span>
					<span className="card-title" id={"title1-" + key}>
						{exp.Company}
					</span>
					<p className="">{exp.tenure}</p>
				</div>
				<div id={"reveal-" + key} className="modal">
					<div className="">
						<div className="card-content ">
							<span className="card-title">{exp.title}</span>
							<span className="card-title">{exp.Company}</span>
							<p className="">{exp.tenure}</p>
							<p className="">Key Points:</p>
							{exp.keyPoints.map((point, key) => {
								return <li key={key}>{point}</li>;
							})}
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
		<div className="experience">
			<h3 className="center">Experience</h3>
			<div>{experienceList}</div>
		</div>
	);
};
export default Experience;
