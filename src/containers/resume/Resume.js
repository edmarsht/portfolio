import React from 'react'
import "./Resume.css"

function Resume() {
    return (
        <div className="portfolio__resume section__margin gradient__bg-resume " data-aos="zoom-in" id="resume">
        <div className="portfolio__resume-container">
          <div className="portfolio__resume-container-title">
            <p>Vous n'avez toujours pas vu mon cv complet ? </p>
            <h2>Téléchargez directement mon cv ici. </h2>
          </div>
          <div>
            <button className="portfolio__resume-container-button">Télécharger</button>
          </div>
        </div>
      </div>
    )
}

export default Resume
