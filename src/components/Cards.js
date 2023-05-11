import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Cards = ({
  darkMode,
  imgSrc,
  title,
  text,
  githubLink,
  siteLink,
  tags,
}) => {
  const { t } = useTranslation();
  return (
    <div className="cardContainer ">
      <Card
        className="card"
        style={{
          width: "25rem",
          border: "none",
          margin: "0px 0px 0px 0px",
          padding: "2px 2px 2px 2px",
        }}
      >
        <Card.Img
          variant="top"
          src={imgSrc}
          style={{
            width: "25rem",
            alignSelf: "center",
            height: "15rem",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: darkMode ? "#CFCBFF" : "#3730A3",
              fontWeight: "500",
              fontSize: "30px",
              marginBottom: "10px",
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "1.5",
              color: darkMode ? "#FFFFFF" : "#6B7280",
              textAlign: "left",
              maxHeight: "10rem",
              minHeight: "10rem",
              overflow: "auto",
            }}
          >
            {text}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {tags.map((tag, index) => (
            <ListGroup.Item
              key={index}
              style={{
                border: `1px solid ${darkMode ? "#8F88FF" : "#3730A3"}`,
                padding: "3px 18px 3px",
                margin: "0px 5px 0px 0px",
                background: darkMode ? "#383838" : "#FFFFFF",
                borderRadius: "4px",
                fontWeight: "500",
                color: darkMode ? "#8F88FF" : "#3730A3",
              }}
            >
              {tag}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body className="links" style={{ marginTop: "30px" }}>
          <Card.Link
            href={githubLink}
            target="_blank"
            style={{
              display: "flex",
              color: darkMode ? "#E1E1FF" : "#3730A3",
              paddingBottom: "20px",
            }}
          >
            Github
          </Card.Link>
          <Card.Link
            href={siteLink}
            target="_blank"
            style={{ color: darkMode ? "#E1E1FF" : "#3730A3" }}
          >
            {t("viewSite")}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
