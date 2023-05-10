import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ModeSwitch = ({ handleToggle }) => {
  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="modeSwitch">
      <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          onChange={toggleDarkMode}
          checked={darkMode}
        />
        <span className="slider round"></span>
      </label>
      <div className="modeText">{darkMode ? t("aydinlik") : t("karanlik")}</div>
      <div className="modeText">|</div>
      <div className="modeText2" onClick={changeLanguage}>
        {i18n.language === "en" ? (
          <span>{t("TÜRKÇE")}</span>
        ) : (
          <span>ENGLISH</span>
        )}
        {i18n.language === "en" && "" + t("`YE GEÇ")}
      </div>
    </div>
  );
};

export default ModeSwitch;
