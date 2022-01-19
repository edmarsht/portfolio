import React from "react";
import "./Popup.css";

function Popup({ description, showModal, setShowModal, name, img, imgcut, link}) {
  return (
    <>
      <p>{showModal}</p>
      {showModal ? (
        <div className="portfolio__popup">
          <div className="portfolio__popup-container" showModal={showModal}>
            <div className="portfolio__popup-container-close">
              <div className="portfolio__popup-browser">
                <div className="portfolio__product-browser-circle red circle__left pointer" onClick={() => setShowModal((prev) => !prev)}></div>
                <div className="portfolio__product-browser-circle black"></div>
                <div className="portfolio__product-browser-circle green"></div>
              </div>
              <div className="portfolio__popup-container-closebutton" onClick={() => setShowModal((prev) => !prev)}><strong>X</strong></div>
            </div>

            <div className="portfolio-container-img">
              <img src={imgcut} alt={name} />
            </div>
            <div className="portfolio-container-text">
              <h1>{name}</h1>
              <p>{description}</p>
              <a href={link} target="_blank"><button className="button-pink">Visiter le site</button></a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
