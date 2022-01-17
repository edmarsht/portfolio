import React, { useState } from "react";
import "./Product.css";
import { Popup } from "../../components";

function Product({ name, img, link, description }) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev) 
  }
  return (
    <div className="product">
      <div className="portfolio__product">
        <div className="portfolio__product-browser">
          <div className="portfolio__product-browser-circle red circle__left"></div>
          <div className="portfolio__product-browser-circle black"></div>
          <div className="portfolio__product-browser-circle green"></div>
        </div>
        <div className="portfolio__product-image">
          <a href={link}>
            <img src={img} alt="" />
          </a>
        </div>
      </div>
      <button className="portfolio__product-button" onClick={openModal}>{name}</button>
      <Popup description={description} showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
}

export default Product;
