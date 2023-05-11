import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";
import Pizza from "../contents/pagePhotos/teknolojik-yemekler.png";
import movies from "../contents/pagePhotos/movies.png";
import gratitude from "../contents/pagePhotos/gratitude.png";
import shopping from "../contents/pagePhotos/shopping.png";
import calculator from "../contents/pagePhotos/calculator.png";
import friends from "../contents/pagePhotos/friends.png";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>{t("projectsTitle")}</h1>
      </div>
      <div className="projectItems">
        <Cards
          darkMode={darkMode}
          imgSrc={Pizza}
          title={t("pizzaTitle")}
          text={t("pizzaText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s7-challenge-pizza"
          siteLink="https://ibrahim-pizza-order.netlify.app/"
          tags={["#React", "#Router", "#Form", "#Cypress"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={movies}
          title={t("moviesTitle")}
          text={t("moviesText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s10g2-redux-filmler"
          siteLink="https://ibrahim-redux-filmler.vercel.app/movies"
          tags={["#React", "#Router", "#Axios", "#Redux"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={gratitude}
          title={t("journalTitle")}
          text={t("journalText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s10-challenge"
          siteLink="https://ibrahim-minnet-gunlugu.vercel.app/"
          tags={["#React", "#Router", "#Redux", "#localStorage"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={shopping}
          title={t("shoppingTitle")}
          text={t("shoppingText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s11g1-shopping-cart"
          siteLink="https://ibrahim-shopping-cart.vercel.app/"
          tags={["#React", "#Router", "#Axios", "#Cypress"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={calculator}
          title={t("calculatorTitle")}
          text={t("calculatorText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s10g1-reducer-calculator"
          siteLink="https://ibrahim-reducer-calculator.vercel.app/"
          tags={["#React", "#Router", "#Javascript", "#useReducer"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={friends}
          title={t("friendsTitle")}
          text={t("friendsText")}
          githubLink="https://github.com/ibrahimfevzi/fsweb-s11g2-client-auth-friends"
          siteLink="https://ibrahim-client-auth-friends.vercel.app/"
          tags={["#React", "#Router", "#Axios", "#Cypress"]}
        />
      </div>
    </div>
  );
};

export default Projects;
