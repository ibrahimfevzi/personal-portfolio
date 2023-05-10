import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>{t("projectsTitle")}</h1>
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
