import React from "react";
import "./AboutMe.css";
import { Introduction, JobSeeking } from "../StaticInformation/AboutMeInfo";
const AboutMe = (props) => {
	return (
		<section className="section">
			<h3 className="center">About Me</h3>
			<div className="row">
				<div className="col s12 m6">
					<div className="container">
						<h4>Well I'm...</h4>
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
						<h4>My Skills</h4>
						<div className="row center skills">
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
								Python
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
								React
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
								Node.js
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
								JavaScript
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
								Ruby
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
								C++
							</div>
						</div>
						<div className="row center skills">
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
								Go-Lang
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
								HTML
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
								CSS
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
								PhP
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
								MySQL
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
								Bash
							</div>
						</div>
						<div className="row center skills">
							<div className="col s12 m2 skills">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
								Git
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
								GitHub and GitOps
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
								kubernetes
							</div>
							<div className="col s12 m2">
								<img src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" />
								Terraform
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
								Azure
							</div>
							<div className="col s12 m2">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
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
