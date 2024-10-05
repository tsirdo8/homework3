import React from "react";
import "./Card.css";

function Card({ title, description, image, wikiUrl }) {
  const handleWikiButtonClick = () => {
    window.open(wikiUrl, "_blank");
    console.log("Opening URL:", wikiUrl);
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={handleWikiButtonClick} className="button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
