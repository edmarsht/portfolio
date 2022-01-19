import React from "react";
import "./Header.css";
import edouard4 from "../../assets/edouard4.png";

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div className="portfolio__header-container-title" data-aos="fade-down" data-aos-duration="800">
          <h1 className="container">
            Edouard  <p className="highlight"> Toulet</p>
          </h1>
          <h2>Software engineering developer</h2>
        </div>
        <div className="portfolio__header-container-menu" data-aos="fade-right" data-aos-duration="1200">
          <a href="#aboutme" ><button>About me</button></a>
          <a href="#projet"><button>Project</button></a>
          <a href="#resume"><button>Résumé</button></a>
          <a href="#contact"><button>Contact</button></a>
        </div>
      </div>
      <div className="portfolio__header-image" data-aos="zoom-in-left" data-aos-duration="1000">
        <img src={edouard4} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
