import React, { useEffect } from "react";
import "./NavigationBar.css";
import M from "materialize-css";
import { ResumePath } from "../StaticInformation/AboutMeInfo";

const NavigationBar = (props) => {

	useEffect(() => {
		let sidenav = document.querySelector("#mobile-nav");
		M.Sidenav.init(sidenav, {});
	}, []);


	return (
		// <div className="navbar-fixed">
		<div id="NavBar" className="navbar-fixed">
			<nav className="navbar z-depth-5">
				<div className="navbar-fixed nav-wrapper">
					{/* <a href="99kalitkar.in" className="brand-logo"> <img className="nav-hero" src="Images/Me.jpg" alt="Me" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Anudeep Kalitkar</a> */}
					<a href="99kalitkar.in" className="brand-logo">
						Anudeep Kalitkar
					</a>
					<a href="#!" data-target="mobile-nav" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="hide-on-med-and-down right">
						<li>
							<a href="/" className="nav-item">
								Home
							</a>
						</li>
						<li>
							<a href="/skills" className="nav-item">
								Skills
							</a>
						</li>
						<li>
							<a href="/education" className="nav-item">
								Education
							</a>
						</li>
						<li>
							<a href="/experience" className="nav-item">
								Experience
							</a>
						</li>
						<li>
							<a href="/projects" className="nav-item">
								Projects
							</a>
						</li>
						<li>
							<a href="/contactme" className="nav-item">
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
					<ul className="sidenav" id="mobile-nav">
						<li>
							<a href="99kalitkar.in" className="nav-item">
								&nbsp;
							</a>
						</li>
						<li>
							<a href="/" className="nav-item">
								Home
							</a>
						</li>
						<li>
							<a href="/skills" className="nav-item">
								Skills
							</a>
						</li>
						<li>
							<a href="/education" className="nav-item">
								Education
							</a>
						</li>
						<li>
							<a href="/experience" className="nav-item">
								Experience
							</a>
						</li>
						<li>
							<a href="/projects" className="nav-item">
								Projects
							</a>
						</li>
						<li>
							<a href="/contactme" className="nav-item">
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
		</div>
	);
};

export default NavigationBar;
