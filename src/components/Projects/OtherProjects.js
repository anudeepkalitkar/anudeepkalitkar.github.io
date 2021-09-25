import React from "react";
const OtherProjects = (props) => {
  const { project, handleCardOpen, postLike } = props;
  return (
    <div className="section-inner z-depth-1">
      <div className="row">
        <div className="col s12 m3 valign-wrapper">
          <img
            src={project.coverImage}
            alt={project.coverImage}
            className="activator responsive-img pointer"
            onClick={(e) => {
              handleCardOpen(project);
            }}
          />
        </div>
        <div className="col s12 m9">
          <h5 className="">{project.title}</h5>
          <p>{project.Intro}</p>
          <br />
          <div className="row">
            <div className="col s12 m6 center">
              {project.link && (
                <a
                  className="btn green wave-effect"
                  href={project.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-laptop-code"></i> Demo
                </a>
              )}
            </div>

            <div className="col s12 m6 center">
              <button
                className="btn blue wave-effect"
                onClick={() => {
                  postLike(project.like);
                }}
              >
                <i className="far fa-thumbs-up"></i> Like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherProjects;
