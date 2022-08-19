import React from "react";
import "./Header.css";
import edouard from "../../assets/edouard.png";

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div className="portfolio__header-container-title" data-aos="fade-down" data-aos-duration="800">
          <h1 className="container">
            Edouard  <a href="#aboutme"><p className="highlight">Toulet</p></a>
          </h1>
          <h2>Développeur React / Javascript</h2>
        </div>
        <div className="portfolio__header-container-menu" data-aos="fade-right" data-aos-duration="1200">
          <a href="#aboutme"><button>Mon Histoire</button></a>
          <a href="#projet"><button>Mes Projets</button></a>
          <a href="#resume"><button>Mon Cv</button></a>
          <a href="#contact"><button>Me Contacter</button></a>
        </div>
      </div>
      <div className="portfolio__header-image" data-aos="zoom-in-left" data-aos-duration="1000">
        <a href="https://instagram.com/kpudessine?utm_medium=copy_link" target="_blank"><img src={edouard} loading="eager" alt="Edouard Toulet portfolio kpudessine" /></a>
      </div>
    </div>
  );
}

export default Header;
