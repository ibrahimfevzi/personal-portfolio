import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="skillsContainer">
      <div className="skillsText">
        <h1>{t("skillsTitle")}</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <div className="skillName">Javascript</div>
          <div className="skillText">{t("javascriptText")}</div>
        </div>

        <div className="skill">
          <div className="skillName">React.Js</div>
          <div className="skillText">{t("reactText")}</div>
        </div>
        <div className="skill">
          <div className="skillName">Node.Js</div>
          <div className="skillText">{t("nodeJsText")}</div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Skills;
