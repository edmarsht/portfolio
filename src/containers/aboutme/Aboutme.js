import React from "react";
import "./Aboutme.css";
import edouard2 from "../../assets/edouard2.jpg";
import yapero from "../../assets/yapero.svg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme">
      <div
        className="portfolio__aboutme-container section__padding"
        id="aboutme"
      >
        <div
          className="portfolio__aboutme-container-photo"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <img src={edouard2} alt="Edouard Toulet portfolio" />
        </div>
        <div className="portfolio__aboutme-container-text">
          <div
            className="portfolio__aboutme-line"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-center"
          >
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>

          <h1 data-aos="fade-left">Mon Histoire</h1>
          <h3 data-aos="fade-left">Intégrateur Web / Dev Front React</h3>
          <p data-aos="fade-left">
            Entrepreneur et développeur avec plus de 2 ans d'expérience dans le
            monde de la programmation web.
          </p>
          <p data-aos="fade-left">
            Je m'occupe de l'intégration web de vos maquettes desktop et mobile
            (Figma, Adobe xd…). Également très sensible à un bel UX/UI et je
            suis capable de créer des maquettes pour vous.
          </p>
          <p data-aos="fade-left">
            Je travaille actuellement en tant que freelance pour différentes
            entreprises appartenant à différents secteurs et je serait très
            heureux de discuter avec vous de vos projets ou d’opportunité
            professionnelles.
          </p>
          <div
            className="portfolio__aboutme-container-yapero"
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="portfolio__aboutme-container-yapero-image">
              <img src={yapero} alt="yapero" className="pulsate-fwd" />
            </div>
            <div className="portfolio__aboutme-container-yapero-text">
              <h4>PDG société Yapero.</h4>
              <p>
                Service de livraison d'alcool à domicile disponible depuis 2016
                à Marseille.{" "}
                <a href="https://yapero.com" target="_blank">
                  Voir le site
                </a>{" "}
                &{" "}
                <a
                  href="https://apps.apple.com/fr/app/yapero-livraison-dalcool/id1366384176"
                  target="_blank"
                >
                  {" "}
                  l'application mobile.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
