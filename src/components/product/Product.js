import React from "react";
import "./Product.css";

function Product({ name, img, link }) {
  return (
    <div className="portfolio__product">
      {/* <h3>{name}</h3> */}

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
  );
}

export default Product;
