import React from "react";
import "./Projet.css";
import { Product } from "../../components";
import { Minproduct } from "../../components";
import plus from "../../assets/plus.png";

const products = [
  {
    id: 1,
    name: "Hook",
    img: "./hook.png",
  },
  {
    id: 2,
    name: "Amazon",
    img: "./amazon.png",
  },
];

const minProducts = [
  {
    id: 1,
    name: "Spotify",
    img: "./spotify.png",
  },
  {
    id: 2,
    name: "Tinder",
    img: "./tinder.png",
  },
  {
    id: 3,
    name: "To Do App",
    img: "./todoapp.png",
  },
  {
    id: 4,
    name: "Mario",
    img: "./mario.jpeg",
  },
];

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
          {products.map((item) => (
            <Product name={item.name} img={item.img} />
          ))}
        </div>
        <div className="portfolio__projet-container-minprojets">
          {minProducts.map((item) => (
            <Minproduct name={item.name} img={item.img} />
          ))}
        </div>
        <div className="portfolio__projet-container-info">
          <img src={plus} alt="" className="pulsate-fwd"/>
          <h4><a href="#"> Découvrir d'autres projets sur Github.</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Projet;
