import React from "react";
import "./Header.css";
// import launching from "../../assets/launching.svg";
// import adventure from "../../assets/adventure.svg";
// import wire from "../../assets/wire.svg";
import work from "../../assets/work.svg";

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div className="portfolio__header-container-title">
          <h1>Edouard Toulet </h1>
          <h2>Software engineering developer</h2>
        </div>
        <div className="portfolio__header-container-menu">
          <button>About me</button>
          <button>Project</button>
          <button> Résumé</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="portfolio__header-image">
        <img src={work} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
