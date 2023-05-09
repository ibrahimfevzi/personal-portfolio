import React from "react";
import { Link } from "react-scroll";

const Header = ({ isMobile }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">İ</a>
      </div>
      <nav className={`headerLinks ${isMobile ? "mobileMenu" : ""}`}>
        <Link to="skillsScroll" smooth={true} duration={700}>
          <a id="skills" href="#skills" className="hover">
            Skills
          </a>
        </Link>
        <Link to="projectsScroll" smooth={true} duration={700}>
          <a id="projects" href="#projects" className="hover">
            Projects
          </a>
        </Link>
        <Link to="contactScroll" smooth={true} duration={700}>
          {isMobile ? (
            <>
              <a href="#" id="contactLink" className="hover2">
                <span>Contact me!</span>
              </a>
            </>
          ) : (
            <a href="#" id="contactLink" className="hover2">
              Contact me!
            </a>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
