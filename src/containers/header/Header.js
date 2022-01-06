import React from "react";
import "./Header.css";
import work from "../../assets/work.svg";

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div className="portfolio__header-container-title">
          <h1 className="container">
            Edouard  <p className="highlight"> Toulet</p>
          </h1>
          <h2>Software engineering developer</h2>
        </div>
        <div className="portfolio__header-container-menu">
          <a href="#aboutme"><button>About me</button></a>
          <a href="#projet"><button>Project</button></a>
          <a href="#resume"><button>Résumé</button></a>
          <a href="#contact"><button>Contact</button></a>
        </div>
      </div>
      <div className="portfolio__header-image">
        <img src={work} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
