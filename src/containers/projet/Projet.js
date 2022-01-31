import React from "react";
import "./Projet.css";
import { Product } from "../../components";
import { Minproduct } from "../../components";
import plus from "../../assets/plus.png";

const products = [
  {
    id: 1,
    name: "Movie DB",
    img: "./moviedb.png",
    imgcut: "./moviedbcut.png",
    link: "https://moviedb-b586e.web.app/",
    description: `Création d'un projet qui permet de connaître les sites de streaming respectifs des films en exploitant l'API fournit par The Movie DB.
    Il suffit d'y inscrire le nom d'un film pour voir sa fiche descriptive avec le synopsis, la photo, la note ainsi que le site de streaming (Netflix, Disney...).
    J'ai ajouté une fonctionnalité de "Coup de cœur" qui permet d'enregistrer dans le local Storage notre sélection de films et d'y accéder.`,
  },
  {
    id: 2,
    name: "Amazon",
    img: "./amazon.png",
    imgcut: "./amazoncut.png",
    link: "https://clone-e655c.web.app/",
  description: "J'ai ici reproduit le site Amazon en Reactjs et hébergé sur Firebase. L'application intègre toutes les principales fonctionnalités E-commerce (un système de compte et de login utilisant Firebase Authentification / des pages produit / un panier et une vérification / un système complet de payement utilisant Stripe / un historique des commandes en temps réel grâce à Firestore Database).",
  },
  {
    id: 3,
    name: "GPT-3",
    img: "./hook.png",
    imgcut: "./hookcut.png",
    link: "https://hook-23a60.web.app/",
    description: "Ce site vitrine est un projet personnel complet, entièrement responsive en Reactjs.",
  },
];

const minProducts = [
  {
    id: 1,
    name: "Spotify",
    img: "./spotify.png",
    imgcut: "./spotify.png",
    description: "Reproduction de la page d'accueil de Spotify en React en y implémentant mes propres données de l'application grâce à L'API fournit par Spotify."
  },
  {
    id: 2,
    name: "Tinder",
    img: "./tinder.png",
    imgcut: "./tindercut.png",
    description: "Reproduction de Tinder en utilisant la stack M.E.R.N (MongoDB, Express, React, NodeJS). Afin d'arriver à un résultat similaire, j'ai intégré une dépendance React (react-tinder-card) simulant le `swipe` de Tinder qui me permet de connaître la direction du balayage et donc d'un `oui` ou d'un `non`."
  },
  {
    id: 3,
    name: "To Do App",
    img: "./todoapp.png",
    imgcut: "./todoapp.png",
    description: "Une To Do List app en Reactjs intégrant toutes les fonctionnalités d'un CRUD (Create Read Update Delete). J'ai hébérgé l'application sur Firebase et la base de donnée en temps réel sur Firestore."
  },
  {
    id: 4,
    name: "Mario",
    img: "./mario.jpeg",
    imgcut: "./mario.jpeg",
    description: "3 niveaux inspirés du célèbre jeu vidéo Mario. L'application est développé en Javascript et utilise une librairie (Kaboom.js). Ici, nous avons la possibilité, grâce aux touches du clavier, de se déplacer et de sauter les obstacles dans l'objectif d'arriver au drapeau."
  },
];

function Projet() {
  return (
    <div className="portfolio__projet section__margin" id="projet">
      <div className="portfolio__projet-container">
        <div className="portfolio__projet-container-text" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="800">
          <h1>Create & Inspire. It's Edmarsht</h1>
          <p>
            Découvrez une seléction de quelques-uns de mes projets préférés. Ces projets sont soit des réalisations personnelles ou professionnelles soit des reproductions de site web connus.  
          </p>
        </div>
        <div className="portfolio__projet-container-projets">
          {products.map((item) => (
            <Product key={item.id} name={item.name} img={item.img} link={item.link} description={item.description} imgcut={item.imgcut} />
          ))}
        </div>
        <div className="portfolio__projet-container-minprojets">
          {minProducts.map((item) => (
            <Minproduct key={item.id} name={item.name} img={item.img} description={item.description} imgcut={item.imgcut}  />
          ))}
        </div>
        <div className="portfolio__projet-container-info" data-aos="fade-left">
          <img src={plus} alt="plus de projets Edouard Toulet" className="pulsate-fwd"/>
          <h4><a href="https://github.com/edmarsht?tab=repositories" target="_blank"> Découvrir d'autres projets sur Github.</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Projet;
