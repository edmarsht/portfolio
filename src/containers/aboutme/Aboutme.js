import React from "react";
import "./Aboutme.css";
import edouard2 from "../../assets/edouard2.png";
import yapero from "../../assets/yapero.svg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme">
      <div className="portfolio__aboutme-container section__padding"
        id="aboutme">
        <div className="portfolio__aboutme-container-photo" data-aos="zoom-in-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
          <img src={edouard2} alt="ai" />
        </div>
        <div className="portfolio__aboutme-container-text">
        <div className="portfolio__aboutme-line" data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="center-center">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

          <h3 data-aos="fade-left">Front end developer.</h3>
          <h1 data-aos="fade-left">About Me</h1>
          <p data-aos="fade-left">
            « Texte » est issu du mot latin « textum », dérivé du verbe « texere
            » qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo »
            qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo
            super iniec
          </p>
          <div className="portfolio__aboutme-container-yapero" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <div className="portfolio__aboutme-container-yapero-image">
              <img src={yapero} alt="yapero" className="pulsate-fwd" />
            </div>
            <div className="portfolio__aboutme-container-yapero-text">
              <h4>PDG société Yapero.</h4>
              <p>
                Service de livraison d'alcool à domicile disponible depuis 2016
                à Marseille. <a href="https://yapero.com">Voir le site</a> &{" "}
                <a href="https://apps.apple.com/fr/app/yapero-livraison-dalcool/id1366384176">
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
