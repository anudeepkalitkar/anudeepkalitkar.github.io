import React, { useEffect } from "react";
import "./NavigationBar.css";
import M from "materialize-css";

const NavigationBar = (props) => {
	const { darkMode, SetDarkMode, SetProjectId } = props;

	const handleMode = (e) => {
		if (darkMode) {
			SetDarkMode(false);
		} else {
			SetDarkMode(true);
		}
	};
	useEffect(() => {
		let sidenav = document.querySelector("#mobile-nav");
		M.Sidenav.init(sidenav, {});
	}, []);

	const handleNavOnClick = (event) =>{
		// event.preventDefault();
		SetProjectId(null);
	};

	return (
		// <div className="navbar-fixed">
		<div id="NavBar">
			<nav className="navbar z-depth-5">
				<div className="navbar nav-wrapper">
					{/* <a href="99kalitkar.in" className="brand-logo"> <img className="nav-hero" src="Images/Me.jpg" alt="Me" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Anudeep Kalitkar</a> */}
					<a href="99kalitkar.in" className="brand-logo">
						Anudeep Kalitkar
					</a>
					<a href="#!" data-target="mobile-nav" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="hide-on-med-and-down right">
						<li>
							<a href="#Header" className="nav-item" onClick={handleNavOnClick}>
								Home
							</a>
						</li>
						<li>
							<a href="#About" className="nav-item" onClick={handleNavOnClick}>
								About
							</a>
						</li>
						<li>
							<a href="#Experience" className="nav-item" onClick={handleNavOnClick}>
								Experience
							</a>
						</li>
						<li>
							<a href="#Projects" className="nav-item" onClick={handleNavOnClick}>
								Projects
							</a>
						</li>
						<li>
							<a href="#Contact" className="nav-item" onClick={handleNavOnClick}>
								Contact Info
							</a>
						</li>

						<li>
							<div className="switch nav-item">
								<label>
									<input type="checkbox" checked={darkMode} onChange={handleMode} />
									<span className="lever" ></span>
									DarkMode

								</label>
							</div>
						</li>

						<li>
							<a href="#!" className="nav-item black-text">
								FreeSpacetoright
							</a>
						</li>
					</ul>
					<ul className="sidenav" id="mobile-nav" onClick={handleNavOnClick}>
						<li>
							<a href="99kalitkar.in" className="nav-item" onClick={handleNavOnClick}>
								&nbsp;
							</a>
						</li>
						<li>
							<a href="#Header" className="nav-item" onClick={handleNavOnClick}>
								Home
							</a>
						</li>
						<li>
							<a href="#About" className="nav-item" onClick={handleNavOnClick}>
								About
							</a>
						</li>
						<li>
							<a href="#Experience" className="nav-item" onClick={handleNavOnClick}>
								Experience
							</a>
						</li>
						<li>
							<a href="#Projects" className="nav-item" onClick={handleNavOnClick}>
								Projects
							</a>
						</li>
						<li>
							<a href="#Contact" className="nav-item" onClick={handleNavOnClick}>
								Contact Info
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavigationBar;
