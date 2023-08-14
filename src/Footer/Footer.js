import React from "react";
import "./Footer.css";
import { DisplayImage } from "../StaticInformation/ImagesInfo";
import { HeaderInfo } from "../StaticInformation/AboutMeInfo";
import { linkedinUrl, githubUrl, gmailUrl, instagramUrl } from "../StaticInformation/UrlLinkInfo";

const Footer = (props) => {
	const { darkMode } = props;

	return (
		<footer>
			<div className="footer" id="Footer">
				<div className="container">
					<div className="row">
						<div className="col s12 m7">
							<div className="profile-content">
								<h5 className="footer-heading"><b>ANUDEEP KALITKAR</b></h5>
								<h6 className="footer-desc">{HeaderInfo}</h6>
							</div>
						</div>
						<div className="col s12 m5">
								<h5 className="footer-heading"><b>Reach Me at:</b></h5>

							<ul className="social list-inline footer-desc">
								<li className="list-inline">
									<a href={linkedinUrl} rel="noreferrer" target="_blank">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li className="list-inline">
									<a href={githubUrl} rel="noreferrer" target="_blank">
										<i className="fab fa-github-alt"></i>
									</a>
								</li>
								<li className="list-inline">
									<a href={gmailUrl} rel="noreferrer" target="_blank">
										<i className="fas fa-envelope"></i>
									</a>
								</li>
								<li className="list-inline">
									<a href={instagramUrl} rel="noreferrer" target="_blank">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
                    <div className="divider-top"></div>
                    <div className="divider"></div>
                    <div className="divider-bottom"></div>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
