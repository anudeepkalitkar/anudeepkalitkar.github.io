import React, { useState } from "react";
import "./Skills.css"
const mainSkills = [
    {
        skill: "Python",
        percentage: "90%",
        level: "Expert"
    },
    {
        skill: "ReactJS",
        percentage: "75%",
        level: "Advanced"
    },
    {
        skill: "NodeJS",
        percentage: "75%",
        level: "Advanced"
    },
    {
        skill: "GitHub and GitOps",
        percentage: "75%",
        level: "Advanced"
    },
    {
        skill: "Ruby",
        percentage: "50%",
        level: "Intermediate"
    },
    {
        skill: "Chef",
        percentage: "50%",
        level: "Intermediate"
    },
    {
        skill: "Kubernetes",
        percentage: "15%",
        level: "Beginner"
    },
    {
        skill: "PowerShell",
        percentage: "50%",
        level: "Intermediate"
    }
]

const otherSkills = [
    {
        skill: "C",
        percentage: "75%",
        level: "Advanced"
    },
    {
        skill: "C++",
        percentage: "75%",
        level: "Advanced"
    },
    {
        skill: "HTML, CSS, JS",
        percentage: "90%",
        level: "Expert"
    },
    {
        skill: "Go-Lang",
        percentage: "25%",
        level: "Beginner"
    },
]
const Skills = () => {
    const mainList = []
    const otherList = []
    const [expandList, setexpandList] = useState(false);
    const [expandIcon, setexpandIcon] = useState(<i className="fas fa-chevron-down"></i>);
    const handleExpand = (e) => {
        if (expandList) {
            setexpandList(false);
            setexpandIcon(<i className="fas fa-chevron-down"></i>);
        }
        else {
            setexpandList(true);
            setexpandIcon(<i className="fas fa-chevron-up"></i>);

        }
    }
    mainSkills.forEach((skill, key) => {
        mainList.push(
            <div key={key} className="skill">
                <h6 className="name">{skill.skill}</h6>
                <span className="level tooltipped" data-position="left" data-tooltip="I am a tooltip"><i className="fas fa-info"></i> {skill.level}</span>
                <div className="progress">
                    <div className="determinate red" style={{ width: skill.percentage }}></div>
                </div>
            </div>);
    })
    otherSkills.forEach((skill) => {
        otherList.push(
            <div className="skill">
                <h6 className="name">{skill.skill}</h6>
                <span className="level tooltipped" data-position="left" data-tooltip="I am a tooltip"><i className="fas fa-info"></i> {skill.level}</span>
                <div className="progress">
                    <div className="determinate red" style={{ width: skill.percentage }}></div>
                </div>
            </div>);
    })
    return (
        <section className="section ">
            <div className="section-inner z-depth-1">
                <h2 className="heading">Skills</h2>
                <p>
                    I have rich experience in Web development and problem solving in Python. Im also good at DevOps and its pipeline tools.
                </p>
                {mainList}
                {
                    expandList &&
                    otherList
                }
                <div className="center">
                    <br/>
                    <a className="pointer" onClick={handleExpand}>{expandIcon}</a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
