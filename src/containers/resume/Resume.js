import React from 'react'
import "./Resume.css"
import plus from "../../assets/cv.pdf";


function Resume() {
    return (
        <div className="portfolio__resume section__margin gradient__bg-resume " data-aos="fade-up" id="resume">
        <div className="portfolio__resume-container">
          <div className="portfolio__resume-container-title">
            <p>Vous voulez en savoir plus sur Edouard Toulet?</p>
            <h2>Téléchargez directement le CV ici. </h2>
          </div>
          <div>
            <a href={plus} download="Cv Edouard Toulet"><button className="portfolio__resume-container-buttone button-pink">Télécharger</button></a>
          </div>
        </div>
      </div>
    )
}

export default Resume
