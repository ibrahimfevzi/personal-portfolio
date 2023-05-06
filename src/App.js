import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
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
        <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
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
          <a href="#skills" className="hover">
            Skills
          </a>
          <a href="#projects" className="hover">
            Projects
          </a>
          <a href="#hireme" id="contactLink" className="hover2">
            Contact me!
          </a>
        </nav>
      </header>
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
