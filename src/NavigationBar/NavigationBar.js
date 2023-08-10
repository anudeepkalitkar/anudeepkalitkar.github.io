import React from "react";
import "./NavigationBar.css";
const NavigationBar = (props) => {
	return (
			<div >
				<nav className="navbar z-depth-5">
					<div className="navbar nav-wrapper">
						<a href="99kalitkar.in" className="brand-logo">Portfolio</a>
						<a href="99kalitkar.in" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="hide-on-med-and-down right">
							<li><a href="99kalitkar.in" className="nav-item" >Home</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >About</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Experience</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Projects</a></li>
						</ul>
					</div>
				</nav>
</div>
	
		
	);
};

export default NavigationBar;
