import React from "react";
import "./Layout.css";
import { DisplayImage } from "../StaticInformation/ImagesInfo";
import { linkedinUrl, githubUrl, gmailUrl, instagramUrl } from "../StaticInformation/UrlLinkInfo";
const Layout = (props) => {
	const { PassedComponent } = props;
	return (
			<section>
				<div className="header" id="Header">
					<div className="row">
						<div className="col s4 container">
							<div className="">
								<div className="center">
									<img className="hero" src={DisplayImage} alt="Me" />
								</div>
								<h5 className="name">Anudeep Kalitkar</h5>
								<h6 className="job-title">Master's Student</h6>

								<ul className="social">
									<li>
										<a
											className="icon"
											href={linkedinUrl}
											rel="noreferrer"
											target="_blank">
											<i className="fab fa-linkedin-in"> </i>
										</a>
										<a
											className="icon-name"
											href={linkedinUrl}
											rel="noreferrer"
											target="_blank">
											Linkedin
										</a>
									</li>
									<li>
										<a
											className="icon"
											href={githubUrl}
											rel="noreferrer"
											target="_blank">
											<i className="fab fa-github-alt"></i>
										</a>
										<a
											className="icon-name"
											href={githubUrl}
											rel="noreferrer"
											target="_blank">
											GitHub
										</a>
									</li>
									<li>
										<a
											className="icon"
											href={gmailUrl}
											rel="noreferrer"
											target="_blank">
											<i className="fas fa-envelope"></i>
										</a>
										<a
											className="icon-name"
											href={githubUrl}
											rel="noreferrer"
											target="_blank">
											Email
										</a>
									</li>
									<li>
										<a
											className="icon"
											href={instagramUrl}
											rel="noreferrer"
											target="_blank">
											<i className="fab fa-instagram"></i>
										</a>
										<a
											className="icon-name"
											href={githubUrl}
											rel="noreferrer"
											target="_blank">
											Instagram
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col s8">
							<PassedComponent />
						</div>
					</div>
				</div>
			</section>
	);
};

export default Layout;
