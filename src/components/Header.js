import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Header = ({ isMobile }) => {
  const { t, i18n } = useTranslation();
  return (
    <header className="header">
      <div className="logo">
        <a href="#">İ</a>
      </div>
      <nav className={`headerLinks ${isMobile ? "mobileMenu" : ""}`}>
        <Link to="skillsScroll" smooth={true} duration={700}>
          <a id="skills" href="#skills" className="hover">
            {t("navSkills")}
          </a>
        </Link>
        <Link to="projectsScroll" smooth={true} duration={700}>
          <a id="projects" href="#projects" className="hover">
            {t("navProjects")}
          </a>
        </Link>
        <Link to="contactScroll" smooth={true} duration={700}>
          {isMobile ? (
            <>
              <a href="#" id="contactLink" className="hover2">
                <span>{t("navContactMe")}</span>
              </a>
            </>
          ) : (
            <a href="#" id="contactLink" className="hover2">
              {t("navContactMe")}
            </a>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
