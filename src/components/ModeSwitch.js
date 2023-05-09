import React from "react";

const ModeSwitch = ({ darkMode, handleToggle }) => {
  return (
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
  );
};

export default ModeSwitch;
