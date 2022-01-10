import React from "react";
import "./Product.css";
import hook from "../../assets/hook.png";
import amazon from "../../assets/amazon.png";




function Product({name, img}) {
  return (
    <div className="portfolio__product">
              {/* <h3>{name}</h3> */}

      <div className="portfolio__product-browser">
        <div className="portfolio__product-browser-circle red circle__left"></div>
        <div className="portfolio__product-browser-circle black"></div>
        <div className="portfolio__product-browser-circle green"></div>
      </div>
      <div className="portfolio__product-image">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Product;
