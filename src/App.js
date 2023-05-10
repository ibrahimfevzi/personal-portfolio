import "./App.css";
import { useState } from "react";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
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

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-body">
        <ModeSwitch darkMode={darkMode} handleToggle={handleToggle} />
        <Header isMobile={isMobile} />
        <Hero darkMode={darkMode} />
        <div id="skillsScroll"></div>
        <Skills />
        <Profile />
        <div id="projectsScroll"></div>
        <Projects darkMode={darkMode} />
      </div>
      <div id="contactScroll"></div>
      <Footer />
    </div>
  );
}

export default App;
