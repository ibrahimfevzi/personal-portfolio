import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>Projects</h1>
      </div>
      <div className="projectItems">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
