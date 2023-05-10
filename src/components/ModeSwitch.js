import React, { useEffect, useState } from "react";

const ModeSwitch = ({ handleToggle }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    handleToggle();
  };

  return (
    <div className="modeSwitch">
      <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          onChange={toggleDarkMode}
          checked={!darkMode}
        />
        <span className="slider round"></span>
      </label>
      <div className="modeText">{darkMode ? "DARK MODE" : "LIGHT MODE"}</div>
      <div className="modeText">|</div>
      <div className="modeText">
        <span id="lang">TÜRKÇE</span>'YE GEÇ
      </div>
    </div>
  );
};

export default ModeSwitch;
