import "../styles/about.css";
import LeaderLine from "react-leader-line";
import profilePicture from "../img/erik.jpg";
import { FaLeaf, FaMusic } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { useContext, useEffect } from "react";
import languageContext from "../context/languageContext";

function About() {
  const { text } = useContext(languageContext);

  useEffect(() => {
    createLeaderLines();

    return () =>
      document.querySelectorAll(".leader-line").forEach((x) => x.remove());
  }, []);

  const createLeaderLines = () => {
    if (window.innerWidth > 1000) {
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
        document.querySelector(".circle3"),
        { color: "white", size: 1, endPlug: "behind" }
      );

      new LeaderLine(
        document.querySelector(".skillsStart"),
        document.querySelector(".circle1"),
        { color: "white", size: 1, endPlug: "behind" }
      );

      new LeaderLine(
        document.querySelector(".skillsEnd"),
        document.querySelector(".circle2"),
        { color: "white", size: 1, endPlug: "behind" }
      );
    }
  };

  const verifyWidth = () => {
    if (window.innerWidth < 1000) {
      document.querySelectorAll(".leader-line").forEach((x) => x.remove());
    } else {
      document.querySelectorAll(".leader-line").length === 0 &&
        createLeaderLines();
    }
  };

  window.onresize = verifyWidth;

  return (
    <div id="about">
      <h1>- {text.aboutMe} -</h1>
      <div className="circle circle1" />
      <div className="circle circle2" />
      <div className="circle circle3" />
      <img className="profileImg" src={profilePicture} alt="erik-profile" />
      <h2 className="info info1">{text.description}</h2>
      <h2 className="info info2">
        {text.loves}:
        <br />
        <FaLeaf /> {text.nature},
        <br />
        <FaMusic /> {text.music},
        <br />
        <BiFootball /> {text.sports}
      </h2>
      <a
        className="info info3"
        href="https://drive.google.com/file/d/1ZY5CUuA64LPIZnffW5iFoKdVTthBJ7Zt/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <h2>{text.resume}</h2>
      </a>
      <div className="info info4">
        <h2>{text.skills}</h2>
        <div className="skillsStart" />
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
      <div className="info skillsEnd" />
    </div>
  );
}

export default About;
