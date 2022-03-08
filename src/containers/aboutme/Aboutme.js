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

          <h3 data-aos="fade-left">Développeur Front-End</h3>
          <h1 data-aos="fade-left">About Me</h1>
          <p data-aos="fade-left">
            Après avoir décroché un Master en marketing digital, je me lance
            dans un nouveau challenge et j'ouvre une entreprise dans le secteur
            de la livraison, qui m'a permis d’enrichir mes compétences
            entrepreneuriales, marketing & managériales.
          </p>
          <p data-aos="fade-left">
            Après de multiples formations et projets en développement web, je
            suis capable aujourd'hui d'apporter une réelle valeur ajoutée
            pluri-disciplinaires à une entreprise où m'épanouir.
          </p>
          <p data-aos="fade-left">
            Je travaille, en ce moment, en freelance en parallèle de ma
            recherche de travail.
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
