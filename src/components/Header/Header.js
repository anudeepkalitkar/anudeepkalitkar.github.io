import React from "react";
import "./Header.css";

const Header = (props) => {
  const { darkMode, setDarkMode } = props;
  const handleMode = (e) => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  return (
    <div className="header">
      <div className="row">
        <div className="col s12 m6">
          <img className="hero" src="Images/Me.jpg" alt="Me" />
        </div>
        <div className="col s12 m6">
          <div className="profile-content">
            <h1 className="name">Anudeep Kalitkar</h1>
            <h2 className="desc">Software Engineer</h2>
            <ul className="social list-inline">
              <li className="list-inline">
                <a href="https://in.linkedin.com/in/kalitkar-anudeep-629308189" rel="noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline">
                <a href="https://github.com/anudeepkalitkar/" rel="noreferrer" target="_blank">
                  <i className="fab fa-github-alt"></i>
                </a>
              </li>
              <li className="list-inline">
                <a href="mailto:anudeep.kalitkar@gmail.com" rel="noreferrer" target="_blank">
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
            <a className="btn green" href="#!">
              <i className="fas fa-paper-plane"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
