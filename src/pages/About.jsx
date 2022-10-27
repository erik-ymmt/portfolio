import "../styles/about.css";

import { useContext, useEffect } from "react";
import LeaderLine from "react-leader-line";
import languageContext from "../context/languageContext";

import { FaLeaf, FaMusic } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import skills from "../data/skills";
import profilePicture from "../img/erik.jpg";

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
      <h1 id="about-title">- {text.aboutMe} -</h1>
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
        href={text.resumeLink}
        target="_blank"
        rel="noreferrer"
      >
        <h2>{text.resume}</h2>
      </a>
      <div className="info info4">
        <h2>{text.skills}</h2>
        <div className="skillsStart" />
        <div className="skills">
            {
              skills.map((e) => (
                <div key={e.alt}>
                  <img alt={e.alt} src={e.src} />
                </div>
              ))
            }
        </div>
      </div>
      <div className="info skillsEnd" />
    </div>
  );
}

export default About;
