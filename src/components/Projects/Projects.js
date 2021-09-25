import React, { useState, useEffect } from "react";
import OtherProjects from "./OtherProjects";
import axios from "axios";
const LikeAPI = "https://99kalitkar.in/Portfolio/likes.php?Blogname=";
const projectList = [
  {
    title: "Indoor Navigation",
    coverImage: "Images/Indoor.png",
    Intro: ["We always waste our time finding particular items/store in a mall. ",
      "To minimize the timing to find an item/store, we have created an application 'In-House Navigation' where user can easily find the shortest path from his location in mall to the item/store he is looking for in the mall."
    ],
    Existing: [],
    Proposed: [
      "FRONTEND (react js)",
      "Admin interface is for the owner of the mall where he has the option to upload the architecture of mall and point all store and corridor nodes from grid viewed photo.",
      "End-user interface has the option for customers to select the store he is near to and the store/product he is looking for. After selecting both locations, He/She will get the visual shortest path to reach that location.",
      "BACKEND  (python)",
      "After owner will upload the architecture and point store and corridor coordinates from the frontend, the image will be processed in the backend using image processing algorithms to align the store co-ordinates, get corridor co-ordinates in such a way that store can connect with corridor co-ordinate and produce well viewed black and white architecture image.",
      "After getting the coordinates for store and corridor the backend uses Dijkstra algorithm to find the shortest distance between two stores and show the path in end-user-interface for customers. "
    ],
    link: "",
    like: "IndoorNav"
  },
  {
    title: "Maze The Game",
    coverImage: "Images/MazeTheGame.png",
    Intro: ["Maze The Game is a multiplayer game, where the players are summoned together to solve the real-time generated maze.",
    "The players will be competing with each other displaying their scores to every other player. To make the game interactive, we have a chat window where the players can message to each other.",
  ],
    Existing: [],
    Proposed: [],
    link: "https://mazethegame.99kalitkar.in/",
    like: "MazeGame"

  },
  {
    title: "Smart Traffic Control Sytem",
    coverImage: "Images/SmartTraffic.jpg",
    Intro: ["Traffic congestion is one of the major modern-day crises in every big city in the world.",
      "Edge detection technique is imperative to extract the required traffic information from the CCTV footage.",
      "By defining the threshold level of vehicle count one can manage the traffic."
    ],
    Existing: ["In the existing system, manually we need to control traffic by which side is having heavy traffic then that side put for the green signal for a long time.",
    "The disadvantage of the system is the need of more manpower to control the traffic"
  ],
    Proposed: ["The proposed approach is a system in which traffic at a signal is estimated by capturing the images of the traffic and calculating the density of the images",
    "The cameras installed on the roads capture images of traffic from all four directions at a junction. Then the images are transferred into a database.",
    "The captured images are processed, and density of the image is calculated. Based on the density, duration of green light, red lights are assigned."
  ],
    link: "https://anudeepkalitkar.github.io/Smart-Traffic-Contorl-System",
    like: "SmartTrafficControlSytem"

  },
  {
    title: "Image Based Authication System",
    coverImage: "Images/IBAS-Icons.jpg",
    Intro: ["Image-based Authentication System provides a way to authenticate users by letting them select a sequence of images instead of using traditional passwords.",
    " Reduces the need of remembering passwords. Pictures can be remembered easily as they are visual.",
    " Uses HTML, CSS, JS in the front-end and PHP for the back-end."
  ],
    Existing: ["Current Authentication Systems require the user to type email and password for authenticating them.",
    "Some systems make use of Biometrics and smart cards. But they do not cost-efficient.",
    "This also raises the question about everyday usability and affordability."
  ],
    Proposed: ["Provides a set of predetermined images/icons randomly placed in the grid. (either 10x10 grid or 4 5x5 grids). 3 sets of images are used- Icons, mnemonic, Telugu alphabets.",
    "Users must choose a sequence of images/icons (by clicking/tapping on the icons).",
    "This Sequence of images/icons will be the password. This sequence of images generates a Unique hash value in the background. Upon submitting data, it is stored in the database. User can now login using this sequence of images used while registering."
  ],
    link: "https://anudeepkalitkar.github.io/Image-Based-Authentication-IconsGP/",
    like: "IBAS-Icons"
  },
  {
    title: "Doodle-Images Based Authication System",
    coverImage: "Images/IBAS-Doodles.jpg",
    Intro: ["Image-based Authentication System provides a way to authenticate users by letting them draw a sequence of images instead of using traditional passwords.",
    "Reduces the need of remembering passwords. Pictures can be remembered easily as they are visual.",
    "Uses HTML, CSS, JS in the front-end and Python for the back-end."
  ],
    Existing: ["Current Authentication Systems require the user to type email and password for authenticating them.",
    "Some systems make use of Biometrics and smart cards. But they do not cost-efficient.",
    "This also raises the question about everyday usability and affordability."
  ],
    Proposed: ["At Registration, the user is provided a Canvas (A drawing area), where the user can draw Doodles/sketch. (user can draw at most 5 Doodles)",
    "These Doodles/sketches are converted into images.",
    "At Login, these images along with a set of predetermined images, randomly placed in the grid.(either 10x10 grid or 4 5x5 grids)"
  ],
    link: "https://anudeepkalitkar.github.io/Image-Based-Authentication-DoodlesGP/",
    like: "IBAS-Doodles"
  },
  {
    title: "Image Similarity Based Authication System",
    coverImage: "Images/IBAS-IC.jpg",
    Intro: ["Image-based Authentication System provides a way to authenticate users by letting them draw the image and that is compared with the image drawn while registering instead of using traditional passwords.",
    "Reduces the need of remembering passwords. Pictures can be remembered easily as they are visual.",
    "Uses HTML, CSS, JS in the front-end and Python (Open CV) for the back-end."
  ],
    Existing: ["Current Authentication Systems require the user to type email and password for authenticating them.",
    "Some systems make use of Biometrics and smart cards. But they do not cost efficient.",
    "This also raises the question about everyday usability and affordability."
  ],
    Proposed: [" We provided a Canvas (A drawing area), where the user can draw a Doodles/sketch.",
    "These Doodles/sketches are converted into images.",
    "This image is compared with the image drawn at the time of registration using Open-cv module in the python",
    "The image is encrypted and stored on the server.",
    "I have used a criterion of 80% match for authenticating the user."
  ],
    link: "https://anudeepkalitkar.github.io/Image-Based-Authentication-ImageSimilarity/",
    like: "IBAS-Similarity"

  },
  {
    title: "A Framework for analysis of road Accidents",
    coverImage: "Images/Accident.jpg",
    Intro: ["The road accident data analysis uses data mining and machine learning techniques, focusing on identifying factors that affect the severity of an accident. ",
    "The data used here for the analysis is been taken from Kaggle",
    "Analysis is done for the identification of factors involved in the accident that occur together which is then plotted in a graph form. "
  ],
    Existing: ["Sachin Kumar and DurgaToshniwalin“Analyzing Road Accident Data Using Association RuleMining” (2015), data mining techniques can be used to analyze the data provided by EMRI (Emergency Management Research Institute) in which the accident data is first clustered using K-modes clustering algorithm and further association rule mining techniques applied to identify circumstances in which an accident may occur for each cluster. ",
    "Here, an Apriori algorithm has been applied on every cluster using WEKA3.6 to generate association rules."
  ],
    Proposed: ["For any data analysis, the most important aspect is the data. Collecting the right kind of data is very important. Analyzing and understanding the content and structure of the data needs special attention. The data used here for the analysis is been taken from Kaggle",
    "The packages which played a major role in the analysis are pandas and NumPy. ",
    "The algorithm we opted for is Regression Analysis. Regression Analysis is a set of statistical processes for estimating the relationships among variables. "
  ],
    link: "",
    like: "AnalysisofRoadAccidents"
  },

  {
    title: "Licence Plate Detection",
    coverImage: "Images/License-Plate.png",
    Intro: ["Automatic Vehicle Number Plate Recognition (ANPR) plays a significant role in this busy world. It is a key technique in most traffic-related applications. ",
    "A larger portion of vehicles nowadays are equipped with dash cameras, which continuously record and store traffic information.",
    "This information can help to in identify vehicles that are stolen, been a part of an accident, etc. "
  ],
    Existing: [],
    Proposed: ["Capturing a clear image, of the number plate with the camera. The purpose is to get an image without distortion.",
    "Cropping the number plate from the captured image by Plate Extraction algorithm. The cropped image is the input for the Character Recognition.",
    "OCR technique is used to recognize the character. Cross-checking the detected License number with all the License numbers present in the registered Database."
  ],
    link: "https://anudeepkalitkar.github.io/Licence-Plate-Detection",
    like: "Licence-Plate-Detection"
  },

  {
    title: "Man-Machine Interface for SRD Chipset",
    coverImage: "Images/LMSgui.png",
    Intro: ["The final goals of the project:",
    "To design a user-machine interface for an SDR chipset to enable a particular bit in a particular register using a GUI.",
    "To design a user-machine interface for an SDR chipset to check the outcomes of the corresponding combination of the inputs in the registers using a GUI."
  ],
    Existing: [],
    Proposed: [],
    link: "",
    like: "LMS6002D"
  },
];

const Projects = () => {
  const [latestProject, setlatestProject] = useState(projectList[0]);
  const [otherProjects, setotherProjects] = useState([projectList[1], projectList[2]]);
  const [pageNumber, setPageNumber] = useState(1);
  const pages = [];
  const handleCardOpen = (project) => {

    setlatestProject(project);
  }
  const handleCardClose = (e) => {
    setlatestProject(projectList[0]);
  }
  const setPagination = (presentPage) => {
    for (let i = 1; i < projectList.length / 2; i += 1) {
      if (i === presentPage) {
        pages.push(
          <li key={i} className="active waves-effect">
            <a
              href="#!"
              onClick={(e) => {
                setPageNumber(i);
              }}
            >
              <b>{i}</b>
            </a>
          </li>
        );
      }
      else {
        pages.push(
          <li key={i} className="waves-effect">
            <a
              href="#!"
              onClick={(e) => {
                setPageNumber(i);
              }}
            >
              <b>{i}</b>
            </a>
          </li>
        );
      }
    }
  }
  setPagination(pageNumber);

  useEffect(() => {
    let p = (pageNumber * 2) % projectList.length;
    setPagination(pageNumber)
    setotherProjects([projectList[p - 1], projectList[p]]);
  }, [pageNumber]);
  const postLike = async (proj) => {
    let likes = {
      method: 'get',
      url: LikeAPI + proj,
      timeout: 4000
    }
    await axios(likes).then(res => {
      console.log(res.data);
    }, (error) => console.log(error));
  }
  return (
    <section className="section">
      <div className="section-inner card">
        <h2 className="heading">Latest Project</h2>
        <div className="card-image waves-effect waves-light">
          <img className="activator" alt={latestProject.title} src={latestProject.coverImage} />
          <span className="card-title activator">{latestProject.title}</span>
        </div>
        <div className="card-content">
          <p>{latestProject.Intro}</p>
          <div className="center">
            <br />
            <div className="row">
              <div className="col s12 m6">
                {latestProject.link && (
                  <a
                    className="btn green wave-effect center"
                    href={latestProject.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-laptop-code"></i> Demo
                  </a>
                )}
              </div>

              <div className="col s12 m6">
                <button
                  className="btn blue wave-effect center"
                  onClick={() => {
                    postLike(latestProject.like);
                  }}
                >
                  <i className="far fa-thumbs-up"></i> Like
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-reveal section-inner">
          <span className="card-title ">
            <b>{latestProject.title}</b>
            <i className="material-icons right" onClick={handleCardClose}>close</i>
          </span>
          <h6>
            <b>Introduction</b>
          </h6>
          <ul>
            <p>{latestProject.Intro.map((point, key) => {
              return <li className="" key={key}>{point}</li>
            })}
            </p>
          </ul>
          {latestProject.Existing.length > 0 &&
            <h6>
              <b>Existing System</b>
            </h6>
          }
          <ul>
            <p>{latestProject.Existing.map((point, key) => {
              return <li className="" key={key}>{point}</li>
            })}
            </p>
          </ul>
          {latestProject.Proposed.length > 0 &&
            <h6>
              <b>Proposed System</b>
            </h6>
          }
          <ul>
            <p>{latestProject.Proposed.map((point, key) => {
              return <li className="" key={key}>{point}</li>
            })}
            </p>
          </ul>
        </div>
        <hr />
        <h2 className="heading">Other Projects</h2>
        <OtherProjects project={otherProjects[0]} handleCardOpen={handleCardOpen} postLike={postLike}> </OtherProjects>
        <hr />
        <OtherProjects project={otherProjects[1]} handleCardOpen={handleCardOpen} postLike={postLike}> </OtherProjects>
        <div className="center">
          <ul className="pagination">{pages}</ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
