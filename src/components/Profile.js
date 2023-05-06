import React from "react";

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
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="profileInfoRight">
              <p>29.05.1988</p>
              <p>İstanbul</p>
              <p>Lisans- Düzenlenecek*</p>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="profileRight">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
            <br />
            <br />
            Mnima veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
