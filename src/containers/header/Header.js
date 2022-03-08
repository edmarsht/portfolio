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
          <h2>Développeur web en recherche d'emploi</h2>
        </div>
        <div className="portfolio__header-container-menu" data-aos="fade-right" data-aos-duration="1200">
          <a href="#aboutme"><button>About me</button></a>
          <a href="#projet"><button>Projets</button></a>
          <a href="#resume"><button>Cv</button></a>
          <a href="#contact"><button>Contact</button></a>
        </div>
      </div>
      <div className="portfolio__header-image" data-aos="zoom-in-left" data-aos-duration="1000">
        {/* <a href="https://instagram.com/kpudessine?utm_medium=copy_link" target="_blank"><img href="https://www.recyclivre.com/index.php" target="_blank" src={edouard} loading="eager" alt="Edouard Toulet image portfolio" /></a> */}
        <a href="https://instagram.com/kpudessine?utm_medium=copy_link" target="_blank"><img src={edouard} loading="eager" alt="Edouard Toulet portfolio kpudessine" /></a>
      </div>
    </div>
  );
}

export default Header;
