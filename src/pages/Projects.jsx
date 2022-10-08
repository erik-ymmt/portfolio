import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { useContext } from "react";
import languageContext from "../context/languageContext";

function Projects() {
  const { text, language } = useContext(languageContext);
  const descriptionLang = language === 'en' ? 'descriptionEN' : 'descriptionPT';
  const nameLang = language === 'en' ? 'nameEN' : 'namePT';

  return (
    <div id="projects">
      <h1>- {text.projects} -</h1>
      <div className="cardsGrid">
        {projects.map((project) => (
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
