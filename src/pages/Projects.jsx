import "../styles/projects.css";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsFront from "../data/projects-frontend";
import projectsBack from "../data/projects-backend";
import { useContext } from "react";
import languageContext from "../context/languageContext";

function Projects() {
  const { text, language } = useContext(languageContext);
  const descriptionLang = language === "en" ? "descriptionEN" : "descriptionPT";
  const nameLang = language === "en" ? "nameEN" : "namePT";

  return (
    <div id="projects">
      <h1 id="projects-title">- {text.projects} -</h1>
      <h1>- Back-end -</h1>
      <div className="cardsGrid">
        {projectsBack.map((project) => (
          <ProjectCard
            key={project.name}
            name={project[nameLang]}
            img={project.img}
            description={project[descriptionLang]}
            techs={project.techs}
            deployLink={project.deployLink}
            repositoryLink={project.repositoryLink}
          />
        ))}
      </div>
      <h1>- Front-end -</h1>
      <div className="cardsGrid">
        {projectsFront.map((project) => (
          <ProjectCard
            key={project.name}
            name={project[nameLang]}
            img={project.img}
            description={project[descriptionLang]}
            techs={project.techs}
            deployLink={project.deployLink}
            repositoryLink={project.repositoryLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
