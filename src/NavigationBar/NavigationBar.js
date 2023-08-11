import React, { useEffect } from "react";
import "./NavigationBar.css";
import M from "materialize-css";

const NavigationBar = (props) => {
	useEffect(() => {
		let sidenav = document.querySelector('#mobile-nav');
		M.Sidenav.init(sidenav, {});
	  }, []);
	return (
			<div >
				<nav className="navbar z-depth-5">
					<div className="navbar nav-wrapper">
						
						{/* <a href="99kalitkar.in" className="brand-logo"> <img className="nav-hero" src="Images/Me.jpg" alt="Me" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Anudeep Kalitkar</a> */}
						<a href="99kalitkar.in" className="brand-logo">Anudeep Kalitkar</a>
						<a href="#!" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="hide-on-med-and-down right"  >
							<li><a href="99kalitkar.in" className="nav-item" >Home</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >About</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Experience</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Projects</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Contact Info</a></li>
							<li><a href="#!" className="nav-item black-text" >FreeSpacetoright</a></li>
						</ul>
						<ul className="sidenav" id="mobile-nav" >
							<li><a href="99kalitkar.in" className="nav-item" >&nbsp;</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Home</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >About</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Experience</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Projects</a></li>
							<li><a href="99kalitkar.in" className="nav-item" >Contact Info</a></li>

						</ul>
						
					</div>
				</nav>
</div>
	
		
	);
};

export default NavigationBar;
