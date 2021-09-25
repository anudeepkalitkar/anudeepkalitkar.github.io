import React from "react";
import "../Main.css";
const educationList = [
  {
    Degree: "PG Certicate",
    from: "IIIT-Hyderabad",
    year: "Pursuing",
    major: "Software Engineering for Data Science",
    percentage: "Pursuing"
  },

  {
    Degree: "B.Tech",
    from: "GITAM University-Hyderabad",
    year: "2020",
    major: "Computer Science Engineering",
    percentage: "81%"

  },
  {
    Degree: "10+2",
    from: "Excel Junior College",
    year: "2016",
    major: "Mathematics, Physics, Chemistry",
    percentage: "85%"

  },
  {
    Degree: "10th",
    from: "Sri Krishnaveni Gloabl Talent School",
    year: "2014",
    major: "High School",
    percentage: "85%"
  },
];
const Education = () => {
  const EList = []

  educationList.forEach((edu, key) => {
    EList.push(<div key={key} className="section-inner card">
      <div className="card-content">
        <span className="card-title activator">
          <b>{edu.Degree}</b>
          <i className="material-icons right">more_vert</i>
        </span>
        <p className="">{edu.from}, ({edu.year})</p>
        <p className="">Major: {edu.major}</p>
      </div>
      <div className="card-reveal section-inner">
        <span className="card-title activator">
          <b>{edu.Degree}</b>
          <i className="material-icons right">close</i>
        </span>
        <p className="">{edu.from}</p>
        <p className="">Year: {edu.year}</p>
        <p className="">Percentage: {edu.percentage}</p>
        <p className="">Major: {edu.major}</p>
      </div>
    </div>)
  })
  return (
    <section className="section">
      <div className="section-inner z-depth-1">
        <h2 className="heading">Education</h2>
        {EList}
      </div>
    </section>
  );
};

export default Education;
