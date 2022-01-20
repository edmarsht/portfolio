import React from 'react'
import "./Resume.css"

function Resume() {
    return (
        <div className="portfolio__resume section__margin gradient__bg-resume " data-aos="fade-up" id="resume">
        <div className="portfolio__resume-container">
          <div className="portfolio__resume-container-title">
            <p>Vous voulez en savoir plus sur moi ?</p>
            <h2>Téléchargez directement mon cv ici. </h2>
          </div>
          <div>
            <button className="portfolio__resume-container-buttone button-pink">Télécharger</button>
          </div>
        </div>
      </div>
    )
}

export default Resume
