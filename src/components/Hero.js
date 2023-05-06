import React from "react";
import { introText } from "../contents/contents";
import Photo from "../contents/introPhoto.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { githubLink } from "../contents/contents";
import { linkedinLink } from "../contents/contents";

const Hero = () => {
  return (
    <div id="intro">
      <article className="introContent">
        <div className="introText">
          <div className="lineContainer">
            <div className="line"></div>
            <span>İbrahim Fevzi Kayan</span>
          </div>
          <h1>
            Creative thinker <br />
            Minimalism lover
          </h1>

          <p>{introText}</p>
          <div className="introButtons">
            <a
              href="#contact"
              style={{ backgroundColor: "#3730A3", color: "white" }}
              className="textDec"
            >
              <MdEmail
                style={{
                  fontSize: "20px",
                }}
              />{" "}
              Contact
            </a>
            <a href={githubLink} target="_blank" className="textDec">
              <BsGithub
                style={{
                  fontSize: "20px",
                  color: "#3730A3",
                }}
              />
              Github
            </a>
            <a href={linkedinLink} target="_blank" className="textDec">
              <BsLinkedin
                style={{
                  fontSize: "20px",
                  color: "#3730A3",
                }}
              />{" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <img className="introImage" src={Photo} alt="introPhoto" />
        </div>
      </article>
    </div>
  );
};

export default Hero;

/*
    

*/
