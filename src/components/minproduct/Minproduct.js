import React from "react";
import "./Minproduct.css";

function Minproduct({ name, img }) {
  return (
    <div className="portfolio__minproducts">
      {/* <h3>{name}</h3> */}

      <div className="portfolio__product-browser">
        <div className="portfolio__product-browser-circle red circle__left"></div>
        <div className="portfolio__product-browser-circle black"></div>
        <div className="portfolio__product-browser-circle green"></div>
      </div>
      <div className="portfolio__product-image-min">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Minproduct;
