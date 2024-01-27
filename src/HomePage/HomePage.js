import React from "react";
import "./HomePage.css";
import { IntroductionPara1, IntroductionPara2, IntroductionPara3 } from "../StaticInformation/AboutMeInfo";
const HomePage = (props) => {
	return (
		<div className="">
			<h3 className="center">About Me</h3>

			<h5 className="intro-desc">
				{IntroductionPara1}
			</h5>
			<h5 className="intro-desc">
				{IntroductionPara2}
			</h5>
			<h5 className="intro-desc">
				{IntroductionPara3}
			</h5>
		</div>
	);
};
export default HomePage;
