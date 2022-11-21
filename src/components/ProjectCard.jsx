import PropTypes from "prop-types";
import "../styles/projects.css";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function ProjectCard({
  name,
  img,
  description,
  techs,
  deployLink,
  repositoryLink,
}) {
  return (
    <div className="cardContainer">
      <h1>{name}</h1>
      <div className="imgContainer">
        <a href={deployLink} target="blank">
          <img src={img} alt={name} />
        </a>
        <span className="projectDescription">{description}</span>
      </div>
      <div className="projectInfos">
        <div className="techsContainer">
          {techs.map((tech) => (
            <span className="techTag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="linksContainer">
          <a href={repositoryLink} target="blank">
            <BsGithub color="white" />
          </a>
          {deployLink ? (
            <a href={deployLink} target="blank">
              <FiExternalLink color="white" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  deployLink: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  repositoryLink: PropTypes.string,
  techs: PropTypes.array,
};

export default ProjectCard;
