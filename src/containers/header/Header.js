import React from "react";
import "./Header.css";
import coding from "../../assets/coding.svg";

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div className="portfolio__header-container-title">
          <h1>Edouard Toulet </h1>
          <h2>Software engineering developer</h2>
        </div>
        <div className="portfolio__header-container-menu">
          <h3>About me</h3>
          <h3>Project</h3>
          <h3>Résumé</h3>
          <h3>Contact</h3>
        </div>
      </div>

      <div className="portfolio__header-image">
        <img src={coding} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
