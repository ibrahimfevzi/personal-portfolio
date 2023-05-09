import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Link } from "react-scroll";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1140);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-body">
        <div className="modeSwitch">
          <label className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              onChange={handleToggle}
              checked={darkMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="modeText">
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </div>
          <div className="modeText">|</div>
          <div className="modeText">
            <span id="lang">TÜRKÇE</span>'YE GEÇ
          </div>
        </div>

        <header className="header">
          <div className="logo">
            <a href="#">İ</a>
          </div>
          <nav className="headerLinks">
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
                <a href="#" id="contactLink" className="hover2">
                  <span id="contactText">Contact</span>
                  <span id="meText">me!</span>
                </a>
              ) : (
                <a href="#" id="contactLink" className="hover2">
                  Contact me!
                </a>
              )}
            </Link>
          </nav>
        </header>
        <Hero darkMode={darkMode} />
        <div id="skillsScroll"></div>
        <Skills />
        <div id="projectsScroll"></div>
        <Profile />
        <Projects darkMode={darkMode} />
      </div>
      <div id="contactScroll"></div>
      <Footer />
    </div>
  );
}

export default App;
