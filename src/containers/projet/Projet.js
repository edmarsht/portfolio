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
    imgcut: "./hookcut.png",
    link: "https://hook-23a60.web.app/",
    description: "EdMarsht is a creative portfolio that your work has been wainting for. Beautiful homs, stunning portfolio styles & a whole lot more awaits inside.EdMarsht is a creative portfolio that your work has been wainting for. Beautiful homs, stunning portfolio styles & a whole lot more awaits inside. roks like diffisish it for sur !",
  },
  {
    id: 2,
    name: "Amazon",
    img: "./amazon.png",
    imgcut: "./amazoncut.png",
    link: "https://clone-e655c.web.app/",
    description: "EdMarsht is a creative portfolio that your work has been wainting for. Beautiful homs, stunning portfolio styles & a whole lot more awaits inside.EdMarsht is a creative portfolio that your work has been wainting for. Beautiful homs, stunning portfolio styles & a whole lot more awaits inside. roks like diffisish it for sur !",
  },
];

const minProducts = [
  {
    id: 1,
    name: "Spotify",
    img: "./spotify.png",
    description: "It looks like difficult but i am trying and will finsish it for sur !"
  },
  {
    id: 2,
    name: "Tinder",
    img: "./tinder.png",
    description: "It looks like difficult but i am trying and will finsish it for sur !"
  },
  {
    id: 3,
    name: "To Do App",
    img: "./todoapp.png",
    description: "It looks like difficult but i am trying and will finsish it for sur !"
  },
  {
    id: 4,
    name: "Mario",
    img: "./mario.jpeg",
    description: "It looks like difficult but i am trying and will finsish it for sur !"
  },
];

function Projet() {
  return (
    <div className="portfolio__projet section__margin" id="projet">
      <div className="portfolio__projet-container">
        <div className="portfolio__projet-container-text" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="800">
          <h1>Create & Inspire. It's Edmarsht</h1>
          <p>
            EdMarsht is a creative portfolio that your work has been wainting
            for. Beautiful homs, stunning portfolio styles & a whole lot more
            awaits inside.
          </p>
        </div>
        <div className="portfolio__projet-container-projets">
          {products.map((item) => (
            <Product key={item.id} name={item.name} img={item.img} link={item.link} description={item.description} imgcut={item.imgcut} />
          ))}
        </div>
        <div className="portfolio__projet-container-minprojets">
          {minProducts.map((item) => (
            <Minproduct key={item.id} name={item.name} img={item.img} />
          ))}
        </div>
        <div className="portfolio__projet-container-info" data-aos="fade-left">
          <img src={plus} alt="" className="pulsate-fwd"/>
          <h4><a href="#"> Découvrir d'autres projets sur Github.</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Projet;
