import React, { useEffect } from "react";
import "./NavigationBar.css";
import M from "materialize-css";
import { ResumePath } from "../StaticInformation/AboutMeInfo";
import { DisplayImage } from "../StaticInformation/ImagesInfo";
import "../Layout/Layout.css"
const NavigationBar = (props) => {
	useEffect(() => {
		let sidenav = document.querySelector(".sidenav");
		M.Sidenav.init(sidenav, {});
	}, []);
	const HandleSideNavClose = (event) => {
		let sidenav = document.querySelector(".sidenav");
		let instance = M.Sidenav.getInstance(sidenav, {});
		instance.close();
	};
	return (
		<div>
			<nav className="navbar z-depth-5">
				<div className="navbar-fixed nav-wrapper">
					<a href="/#/" className="brand-logo">
						Anudeep Kalitkar
					</a>
					<a href="#!" data-target="mobile-nav" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="hide-on-med-and-down right">
						<li>
							<a href="/#/" className="nav-item">
								Home
							</a>
						</li>
						<li>
							<a href="/#/skills" className="nav-item">
								Skills
							</a>
						</li>
						<li>
							<a href="/#/education" className="nav-item">
								Education
							</a>
						</li>
						<li>
							<a href="/#/experience" className="nav-item">
								Experience
							</a>
						</li>
						<li>
							<a href="/#/projects" className="nav-item">
								Projects
							</a>
						</li>
						<li>
							<a href="/#/contactme" className="nav-item">
								Contact Me
							</a>
						</li>

						<li>
							<a
								className="waves-effect waves-light btn green"
								target="_blank"
								href={ResumePath}
								rel="noreferrer">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<ul className="sidenav" id="mobile-nav">
				<li>
					<div className="container nav-item">
						<div className="center">
							<img className="hero" src={DisplayImage} alt="Me" />
						</div>
						<h5 className="name">Anudeep Kalitkar</h5>
						<h6 className="job-title">Master's Student</h6>
					</div>
				</li>
				<li>
					<a href="99kalitkar.in" className="nav-item" onClick={HandleSideNavClose}>
						&nbsp;
					</a>
				</li>
				<li>
					<a href="/#/" className="nav-item" onClick={HandleSideNavClose}>
						Home
					</a>
				</li>
				<li>
					<a href="/#/skills" className="nav-item" onClick={HandleSideNavClose}>
						Skills
					</a>
				</li>
				<li>
					<a href="/#/education" className="nav-item" onClick={HandleSideNavClose}>
						Education
					</a>
				</li>
				<li>
					<a href="/#/experience" className="nav-item" onClick={HandleSideNavClose}>
						Experience
					</a>
				</li>
				<li>
					<a href="/#/projects" className="nav-item" onClick={HandleSideNavClose}>
						Projects
					</a>
				</li>
				<li>
					<a href="/#/contactme" className="nav-item" onClick={HandleSideNavClose}>
						Contact Me
					</a>
				</li>
				<li>
					<a
						className="waves-effect waves-light btn green"
						target="_blank"
						href={ResumePath}
						rel="noreferrer">
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavigationBar;
