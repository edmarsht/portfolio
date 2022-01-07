import React from "react";
import "./Projet.css";
import { Product } from "../../components";
import { products } from "../../data"

function Projet() {
  return (
    <div className="portfolio__projet section__margin" id="projet">
      <div className="portfolio__projet-container">
        <div className="portfolio__projet-container-text">
          <h1>Create & Inspire. It's Edmarsht</h1>
          <p>
            EdMarsht is a creative portfolio that your work has been wainting
            for. Beautiful homs, stunning portfolio styles & a whole lot more
            awaits inside.
          </p>
        </div>
        <div className="portfolio__projet-container-projets">
            {/* {products.map((item) => (
          <Product name={item.name} img={item.img}/> */}
          <Product />
          <Product />
          <Product />
            {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default Projet;
