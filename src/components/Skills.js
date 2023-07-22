import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t, i18n } = useTranslation();

  const skillsData = [
    { name: "Javascript", description: t("javascriptText") },
    { name: "React.Js", description: t("reactText") },
    { name: "Node.Js", description: t("nodeJsText") },
    { name: "Redux", description: t("reduxText") },
    { name: "Python", description: t("pythonText") },
    { name: "HTML", description: t("htmlText") },
    { name: "CSS", description: t("cssText") },
    // Add more skills as needed
  ];

  // Split the skills data into groups of three
  const groupedSkills = skillsData.reduce((acc, skill, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(skill);
    return acc;
  }, []);

  return (
    <div className="skillsContainer">
      <div className="skillsText">
        <h1>{t("skillsTitle")}</h1>
      </div>
      {groupedSkills.map((group, groupIndex) => (
        <div className="skills" key={groupIndex}>
          {group.map((skill, skillIndex) => (
            <div className="skill" key={skillIndex}>
              <div className="skillName">{skill.name}</div>
              <div className="skillText">{skill.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
