import React from "react";
import "./Main.css"
const AboutMe = (props) => {
    const { Content_type } = props;
    return (
        <section className="section">
            {
                Content_type === "Primary" &&
                <div className="section-inner z-depth-1">
                    <h2 className="heading">About Me</h2>
                    <div className="content">
                        <p>
                            I'm a Computer Science Engineer, currently work at NCR Corporation as Software Engineer, Cloud Engineer.
                            At NCR, I work on various DevOps tools, automation, GitHub and GitHub action. I'm also good at problem solving in Python, Web Design and Web Development.
                        </p>
                    </div>
                </div>
            }
            {
                Content_type === "Secondary" &&
                <div className="section-inner z-depth-1">
                    <div className="content">
                        <ul className="social">
                            <li><a href="https://goo.gl/maps/a4Ff4XCZzs2v7DWY9" rel="noreferrer" target="_blank"><i className="fas fa-map-marker-alt"></i></a> Hyderabad, India</li>
                            <li><a href="mailto:anudeep.kalitkar@gmail.com" rel="noreferrer" target="_blank"> <i className="fas fa-envelope"></i></a> anudeep.kalitkar@gmail.com</li>
                        </ul>
                    </div>
                </div>

            }
        </section>
    )
}

export default AboutMe;