import React from "react";
import "../Main.css";
const experienceList = [
  {
    title: "Software Engineer",
    Company: "NCR Corporation",
    tenure: "Oct, 2020 – Till Date",
    keyPoints: [
      "Migrating SCM and CI-CD Pipeline to GitHub",
      "Product SME",
      "Automation",
      "SRE and Incident Management",
    ],
  },
  {
    title: "Software Intern",
    Company: "NCR Corporation",
    tenure: "Jan, 2020 - Oct, 2020 ",
    keyPoints: [
      "Intro to DevOps and its Tools",
      "SRE and Incident Management",
      "Automation",
      "Migrating SCM and CI-CD Pipeline to GitHub",
    ],
  },
  {
    title: "Software Intern",
    Company: "Indian Institute of Technology",
    tenure: "Apr, 2019 - Jun, 2019 ",
    keyPoints: [
      "To have a brief study on Introduction of AI (Artificial Intelligence) and ML (Machine Learning)",
      "To implement small projects on a microcontroller named 'Arduino'",
    ],
  },
  {
    title: "Software Intern",
    Company: "Apollo Computing Laboratories",
    tenure: "Apr, 2018 - Jun, 2018",
    keyPoints: [
      "To design a user-machine interface for a SDR chipset to enable a particular bit in a particular register using a GUI",
      "To design a user-machine interface for a SDR chipset to check the outcomes of the corresponding combination of the inputs in the registers using a GUI",
    ],
  },
];
const Experience = () => {
  const EList = []

  experienceList.forEach((exp, key) => {
    EList.push(<div key={key} className="section-inner card ">
      <div className="card-content">
        <span className="card-title activator">
          <b>{exp.title}</b>
          <i className="material-icons right">more_vert</i>
        </span>
        <span className="card-title">{exp.Company}</span>
        <p className="">{exp.tenure}</p>
      </div>
      <div className="card-reveal section-inner">
        <span className="card-title">
          {exp.title}<i className="material-icons right">close</i>
        </span>
        <span className="card-title">{exp.Company}</span>
        <p className="">{exp.tenure}</p>
        <p className="">Key Points:</p>
        {exp.keyPoints.map((point, key) => {
          return <li key={key}>{point}</li>
        })}
      </div>
    </div>)
  })
  return (
    <section className="section">
      <div className="section-inner z-depth-1">
        <h2 className="heading">Experience</h2>
        {EList}
      </div>
    </section>
  );
};

export default Experience;
