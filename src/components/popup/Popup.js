import React from "react";
import "./Popup.css";

function Popup({ description, showModal, setShowModal }) {
  return (
    <>
      {showModal ? ( 
        <div className="portfolio__popup">
          <div className="portfolio__popup-container" showModal={showModal}>
              <h1>Please work</h1>
          </div>
        </div>) : null
        }
    </>
  );
}

export default Popup;
