import "../styles/about.css";
import profilePicture from "../img/erik.jpg";

function About() {
  return (
    <div id="about">
      <h1>- About me -</h1>
      <div className="circle" />
      <img className="profileImg" src={profilePicture} alt="erik-profile" />
      <p>Former architect and urbanist</p>
      <p>Loves: nature, music, sports</p>
    </div>
  );
}

export default About;
