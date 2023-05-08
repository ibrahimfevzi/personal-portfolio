import React from "react";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsText">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <div className="skillName">Javascript</div>
          <div className="skillText">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className="skill">
          <div className="skillName">React.Js</div>
          <div className="skillText">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="skill">
          <div className="skillName">Node.Js</div>
          <div className="skillText">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Skills;
