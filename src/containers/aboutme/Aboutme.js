import React from "react";
import "./Aboutme.css";
import profilpic from "../../assets/profilpic.jpeg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme ">
      <div className="portfolio__aboutme-container section__padding" id="aboutme">
        <div className="portfolio__aboutme-container-photo">
          <img src={profilpic} alt="ai" />
        </div>
        <div className="portfolio__aboutme-container-text">
          <h3>Front end developer</h3>
          <h1>The possibilities are beyond</h1>
          <p>
            « Texte » est issu du mot latin « textum », dérivé du verbe « texere
            » qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo
            » qui signifie « tisser ». Le mot s'applique à l'entrelacement des
            fibres utilisées dans le tissage, voir par exemple Ovide : « Quo
            super iniec
          </p>
          <h4>Contact me</h4>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
