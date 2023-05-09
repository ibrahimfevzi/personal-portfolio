import React from "react";
import { javascriptText, reactText, nodeJsText } from "../contents/contents";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsText">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <div className="skillName">Javascript</div>
          <div className="skillText">{javascriptText}</div>
        </div>

        <div className="skill">
          <div className="skillName">React.Js</div>
          <div className="skillText">{reactText}</div>
        </div>
        <div className="skill">
          <div className="skillName">Node.Js</div>
          <div className="skillText">{nodeJsText}</div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Skills;
