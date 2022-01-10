import React from "react";
import "./Aboutme.css";
import profilpic from "../../assets/profilpic.jpeg";
import edouard2 from "../../assets/edouard2.png";
import yapero from "../../assets/yapero.svg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme">
      <div className="portfolio__aboutme-container section__padding"
        id="aboutme">
        <div className="portfolio__aboutme-container-photo">
          <img src={edouard2} alt="ai" />
        </div>
        <div className="portfolio__aboutme-container-text">
        <div className="portfolio__aboutme-line">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

          <h3>Front end developer.</h3>
          <h1>About Me</h1>
          <p>
            « Texte » est issu du mot latin « textum », dérivé du verbe « texere
            » qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo »
            qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo
            super iniec
          </p>
          <div className="portfolio__aboutme-container-yapero">
            <div className="portfolio__aboutme-container-yapero-image">
              <img src={yapero} alt="ai" />
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
          {/* <div className="container">
            <h4 className="highlight__aboutme">Contact me</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
