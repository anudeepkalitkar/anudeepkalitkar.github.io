import React from "react";
import "./AboutMe.css";
import { Introduction, JobSeeking } from "../StaticInformation/AboutMeInfo";
const AboutMe = (props) => {
	const { darkMode } = props;

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
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="SkillSet" />
								Python
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"alt="SkillSet" />
								React
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="SkillSet"/>
								Node.js
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"alt="SkillSet" />
								JavaScript
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="SkillSet"/>
								Ruby
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="SkillSet"/>
								C++
							</div>
						</div>
						<div className="row center skills">
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"alt="SkillSet" />
								Go-Lang
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="SkillSet"/>
								HTML
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="SkillSet"/>
								CSS
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="SkillSet"/>
								PhP
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="SkillSet"/>
								MySQL
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="SkillSet"/>
								Bash
							</div>
						</div>
						<div className="row center skills">
							<div className="col s12 m2 skills">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="SkillSet"/>
								Git
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="SkillSet"/>
								GitHub and GitOps
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"alt="SkillSet"/>
								kubernetes
							</div>
							<div className="col s12 m2">
								<img src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" alt="SkillSet"/>
								Terraform
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="SkillSet"/>
								Azure
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="SkillSet"/>
								GCP
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
