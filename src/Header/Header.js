import React from "react";
import "./Header.css";
const Header = (props) => {
	const { darkMode, SetDarkMode } = props;
	const handleMode = (e) => {
		if (darkMode) {
			SetDarkMode(false);
		} else {
			SetDarkMode(true);
		}
	};
	return (
		<div className="header">
			<div className="row">
				<div className="col s12 m4">
					{/* <h1 className="coder">&lt;Coder&gt;</h1> */}
				</div>
				<div className="col s12 m4">
					<img className="hero" src="Images/Me.jpg" alt="Me" />
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
							<h5>
								Master's student at UC Denver, with specialization in Computer
								Science.
								<br />
								Inclined towards AI-powered traffic management and advanced
								authentication techniques, complemented by a strong foundation in
								full-stack development.
							</h5>
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
						</ul>
					</div>
					<div className="profile-switch">
						<div className="dark-mode-switch">
							<div className="switch">
								<label>
									DarkMode
									<input type="checkbox" onChange={handleMode} />
									<span className="lever"></span>
								</label>
							</div>
						</div>
						{/* <a className="btn green" href="#!">
							<i className="fas fa-paper-plane"></i> Contact Me
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
