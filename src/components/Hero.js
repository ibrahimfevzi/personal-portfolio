import React from "react";
import Photo from "../contents/introPhoto.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { githubLink } from "../contents/contents";
import { linkedinLink } from "../contents/contents";
import { useTranslation } from "react-i18next";

const Hero = ({ darkMode }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="intro">
      <article className="introContent">
        <div className="introText">
          <div className="lineContainer">
            <div className="line"></div>
            <span>İbrahim Fevzi Kayan</span>
          </div>
          <h1>{t("introTitle")}</h1>

          <p>{t("introText")}</p>
          <div className={`introButtons ${darkMode ? "dark-mode" : ""}`}>
            <a
              href="mailto:ibrahimfevzi@gmail.com"
              style={{
                backgroundColor: darkMode ? "#E1E1FF" : "#3730A3",
                color: darkMode ? "#000000" : "white",
                border: darkMode ? "1px solid #E1E1FF" : "1px solid #3730A3",
              }}
              className="textDec"
            >
              <MdEmail
                style={{
                  fontSize: "20px",
                }}
              />{" "}
              {t("navContact")}
            </a>
            <a
              href={githubLink}
              target="#"
              className="textDec"
              style={{
                backgroundColor: darkMode ? "#383838" : "",
                color: darkMode ? "#E1E1FF" : "#3730A3",
                border: darkMode ? "1px solid #E1E1FF" : "1px solid #3730A3",
              }}
            >
              <BsGithub
                style={{
                  fontSize: "20px",
                  color: darkMode ? "#E1E1FF" : "#3730A3",
                }}
              />
              Github
            </a>
            <a
              href={linkedinLink}
              target="#"
              className="textDec"
              style={{
                backgroundColor: darkMode ? "#383838" : "",
                color: darkMode ? "#E1E1FF" : "#3730A3",
                border: darkMode ? "1px solid #E1E1FF" : "1px solid #3730A3",
              }}
            >
              <BsLinkedin
                style={{
                  fontSize: "20px",
                  color: darkMode ? "#E1E1FF" : "#3730A3",
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
