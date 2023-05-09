import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Pizza from "../contents/pagePhotos/teknolojik-yemekler.png";
import { pizzaStoreText } from "../contents/contents";

const Cards = ({ darkMode }) => {
  return (
    <div className="cardContainer">
      <Card style={{ width: "25rem", minHeight: "575px", border: "none" }}>
        <Card.Img
          variant="top"
          src={Pizza}
          style={{
            width: "355px",
            height: "auto",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: darkMode ? "#CFCBFF" : "#3730A3",
              fontWeight: "500",
              fontSize: "30px",
              marginBottom: "15px",
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            Teknolojik Yemekler
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "125%",
              color: darkMode ? "#FFFFFF" : "#6B7280",
              textAlign: "left",
            }}
          >
            {pizzaStoreText}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            style={{
              border: `1px solid ${darkMode ? "#8F88FF" : "#3730A3"}`,
              padding: "6px 18px 7px",
              background: darkMode ? "#383838" : "#FFFFFF",
              borderRadius: "4px",
              fontWeight: "500",
              color: darkMode ? "#8F88FF" : "#3730A3",
            }}
          >
            #React
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: `1px solid ${darkMode ? "#8F88FF" : "#3730A3"}`,
              padding: "6px 18px 7px",
              background: darkMode ? "#383838" : "#FFFFFF",
              borderRadius: "4px",
              fontWeight: "500",
              color: darkMode ? "#8F88FF" : "#3730A3",
            }}
          >
            #Router
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: `1px solid ${darkMode ? "#8F88FF" : "#3730A3"}`,
              padding: "6px 18px 7px",
              background: darkMode ? "#383838" : "#FFFFFF",
              borderRadius: "4px",
              fontWeight: "500",
              color: darkMode ? "#8F88FF" : "#3730A3",
            }}
          >
            #Axios
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              border: `1px solid ${darkMode ? "#8F88FF" : "#3730A3"}`,
              padding: "6px 18px 7px",
              background: darkMode ? "#383838" : "#FFFFFF",
              borderRadius: "4px",
              fontWeight: "500",
              color: darkMode ? "#8F88FF" : "#3730A3",
            }}
          >
            #Cypress
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className="links" style={{ marginTop: "30px" }}>
          <Card.Link
            href="https://github.com/ibrahimfevzi/fsweb-s7-challenge-pizza"
            target="_blank"
            style={{
              display: "flex",
              color: darkMode ? "#E1E1FF" : "#3730A3",
            }}
          >
            Github
          </Card.Link>
          <Card.Link
            href="https://ibrahim-pizza-order.netlify.app/"
            target="_blank"
            style={{ color: darkMode ? "#E1E1FF" : "#3730A3" }}
          >
            View Site
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
