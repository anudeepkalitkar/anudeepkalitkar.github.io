import React from "react";
import "./Header.css";
import { DisplayPic } from "../StaticInformation/ImagesInfo";
import { HeaderInfo } from "../StaticInformation/AboutMeInfo";
const Header = (props) => {
	const { darkMode } = props;

	return (
		<section>
			<div className="header">
				<div className="row">
					<div className="col s12 m4">
						{/* <h1 className="coder">&lt;Coder&gt;</h1> */}
					</div>
					<div className="col s12 m4">
						<img className="hero" src={DisplayPic} alt="Me" />
					</div>
					<div className="col s12 m4">
						{/* <h1 className="coder">&lt;DevOps&gt;</h1> */}
					</div>
				</div>
				<div className="row">
					<div className="col s12 m12">
						<div className="profile-content">
							<h1 className="name">Hi, I'm ANUDEEP KALITKAR</h1>
							<div className="container">
								<h5>{HeaderInfo}</h5>
							</div>
							<ul className="social list-inline">
								<li className="list-inline">
									<a
										href="https://www.linkedin.com/in/anudeep-kalitkar-7b816525b/"
										rel="noreferrer"
										target="_blank">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li className="list-inline">
									<a
										href="https://github.com/anudeepkalitkar/"
										rel="noreferrer"
										target="_blank">
										<i className="fab fa-github-alt"></i>
									</a>
								</li>
								<li className="list-inline">
									<a
										href="mailto:anudeep.kalitkar@gmail.com"
										rel="noreferrer"
										target="_blank">
										<i className="fas fa-envelope"></i>
									</a>
								</li>
								<li className="list-inline">
									<a
										href="https://www.instagram.com/anudeep_kalitkar/"
										rel="noreferrer"
										target="_blank">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="profile-switch">
							<a className="btn green" href="#!">
								Projects
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
