import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div id="projects">
      <h1>- Projects -</h1>
      <div className="cardsGrid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            img={project.img}
            description={project.description}
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
