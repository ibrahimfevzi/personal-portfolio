import React from "react";
import { aboutMeText } from "../contents/contents";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="cizgi"></div>
      <div className="profileText">
        <h1>Profile</h1>
      </div>
      <div className="profile">
        <div className="profileLeft">
          <h2>Profile</h2>
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
          <h2>About Me</h2>
          <p>{aboutMeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
