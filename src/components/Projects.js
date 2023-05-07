import React from "react";
import Cards from "./Cards";

const Projects = ({ darkMode }) => {
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>Projects</h1>
      </div>
      <div className="projectItems">
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Projects;
