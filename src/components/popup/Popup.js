import React from "react";
import "./Popup.css";
import close from "../../assets/close.png";


function Popup({ description, showModal, setShowModal, name, img, imgcut, link}) {
  return (
    <>
      <p>{showModal}</p>
      {showModal ? (
        <div className="portfolio__popup">
          <div className="portfolio__popup-container" data-aos="zoom-in" data-aos-duration="500" showModal={showModal}>
            <div className="portfolio__popup-container-close">
              <div className="portfolio__popup-browser">
                <div className="portfolio__product-browser-circle red circle__left pointer" onClick={() => setShowModal((prev) => !prev)}></div>
                <div className="portfolio__product-browser-circle black"></div>
                <div className="portfolio__product-browser-circle green"></div>
              </div>
              <div className="portfolio__popup-container-closebutton pulsate-fwd" onClick={() => setShowModal((prev) => !prev)}><strong><img src={close} alt="close" /></strong></div>
            </div>

            <div className="portfolio-container-img" data-aos="fade-up" data-aos-duration="500">
              <img src={imgcut} alt={name} />
            </div>
            <div className="portfolio-container-text">
              <h1 data-aos="fade-left" data-aos-duration="500">{name}</h1>
              <p data-aos="fade-left" data-aos-duration="500">{description}</p>
              <a href={link} target="_blank"><button className="button-pink" data-aos="fade-left" data-aos-duration="500">Visiter le site</button></a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
