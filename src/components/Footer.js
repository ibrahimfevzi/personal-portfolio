import React from "react";
import Point from "../contents/logos/point.svg";
import { githubLink } from "../contents/contents";
import { linkedinLink } from "../contents/contents";

const Footer = () => {
  return (
    <div className="contactContainer">
      <footer>
        <h3>
          Let’s work together on <br />
          your next product.
        </h3>
        <div className="contactInfo">
          <p>
            <img src={Point} style={{ marginRight: "10px" }} />
            Email:{" "}
            <a className="email" href="mailto:ibrahimfevzi@gmail.com">
              ibrahimfevzi@gmail.com
            </a>
          </p>
          <div className="websites">
            <a className="github" href={githubLink} target="_blank">
              Github
            </a>
            <a className="linkedin" href={linkedinLink} target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
