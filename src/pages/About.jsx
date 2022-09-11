import "../styles/about.css";
import LeaderLine from "react-leader-line";
import profilePicture from "../img/erik.jpg";
import { FaLeaf, FaMusic } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    new LeaderLine(
      document.querySelector(".info1"),
      document.querySelector(".circle1"),
      { color: "white", size: 1, endPlug: "behind" }
    );

    new LeaderLine(
      document.querySelector(".info2"),
      document.querySelector(".circle2"),
      { color: "white", size: 1, endPlug: "behind" }
    );

    new LeaderLine(
      document.querySelector(".info3"),
      document.querySelector(".profileImg"),
      { color: "white", size: 1, endPlug: "behind" }
    );

    new LeaderLine(
      document.querySelector(".skills img"),
      document.querySelector(".profileImg"),
      { color: "white", size: 1, endPlug: "behind" }
    );

    new LeaderLine(
      document.querySelectorAll(".skills img")[6],
      document.querySelector(".circle2"),
      { color: "white", size: 1, endPlug: "behind" }
    );

    return () =>
      document.querySelectorAll(".leader-line").forEach((x) => x.remove());
  }, []);

  return (
    <div id="about">
      <h1>- About me -</h1>
      <div className="circle circle1" />
      <div className="circle circle2" />
      <img className="profileImg" src={profilePicture} alt="erik-profile" />
      <h2 className="info info1">Former architect & urbanist</h2>
      <h2 className="info info2">
        Loves:
        <br />
        <FaLeaf /> nature,
        <br />
        <FaMusic /> music,
        <br />
        <BiFootball /> sports
      </h2>
      <a
        className="info info3"
        href="https://drive.google.com/file/d/1ZY5CUuA64LPIZnffW5iFoKdVTthBJ7Zt/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <h2>Resume</h2>
      </a>
      <div className="info info4">
        <h2>Skills</h2>
        <div className="skills">
          <img
            alt="skill JS"
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white&color=grey"
          />
          <img
            alt="skill React"
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white&color=909090"
          />
          <img
            alt="skill Redux"
            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white&color=grey"
          />
          <img
            alt="skill HTML"
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white&color=909090"
          />
          <img
            alt="skill CSS"
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white&color=grey"
          />
          <img
            alt="skill GIT"
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white&color=909090"
          />
          <img
            alt="skill Github"
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&color=grey"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
