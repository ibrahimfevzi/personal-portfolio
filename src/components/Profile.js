import React from "react";
import { aboutMeText } from "../contents/contents";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="profileContainer">
      <div className="cizgi"></div>
      <div className="profileText">
        <h1>{t("profileTitle")}</h1>
      </div>
      <div className="profile">
        <div className="profileLeft">
          <h2>{t("profileTitle")}</h2>
          <div className="profileInfo">
            <div className="profileInfoLeft">
              <p>Doğum Tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="profileInfoRight">
              <p>29.05.1988</p>
              <p>İstanbul</p>
              <p>M.Sc. - Cyber Security - A. Yesevi Unv. (still ongoing)</p>
              <p>M.Sc. - OHS - Kocaeli Unv.</p>
              <p>Assc. Dg. - Computer Programming - Anadolu Unv.</p>
              <p>L.LB - Law - Marmara Unv.</p>
              <p>B.Sc. - Mechanical Engineering - Suleyman Demirel Unv.</p>

              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="profileRight">
          <h2>{t("aboutMe")}</h2>
          <p>{t("aboutMeText")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
