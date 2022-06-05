import React from "react";
import "./Projet.css";
import { Product } from "../../components";
import { Minproduct } from "../../components";
import plus from "../../assets/plus.png";

const products = [
  {
    id: 1,
    name: "Hook a Lip",
    img: "./hookalip.jpg",
    imgcut: "./hookalipcut.jpg",
    // link: "https://yapero.com/",
    description: "J’ai ici crée la maquette UX/UI et développé le site Hook a Lip (en React js) pour un client. Site en cours.",
  },
  {
    id: 2,
    name: "Yapero",
    img: "./yapero.jpg",
    imgcut: "./yaperocut.jpg",
    link: "https://yapero.com/",
    description: "Yapero est une plateforme de livraison de vins, bières et spiritueux livrés en 30 minutes et à température de dégustation aux utilisateurs. J’ai réalisé l’UI/UX Design du site internet, son développement Front ainsi que sa maintenance en collaboration avec un dev full stack.",
  },
  {
    id: 2,
    name: "NFT",
    img: "./nft.jpg",
    imgcut: "./nftcut.jpg",
    link: "https://nft-app-d1bf6.web.app/",
    description: `J’ai utilisé Thirdweb pour gérer ce projet web 3.0 et créer le Back-end nécessaire à une application Ethereum, basée sur la blockchain. Ce projet exploite des NFT (au préalable "mintés" dans une collection Thirdweb) connectés à OpenSea.`,
  },
  {
    id: 3,
    name: "Amazon",
    img: "./amazon.jpg",
    imgcut: "./amazoncut.jpg",
    link: "https://clone-e655c.web.app/",
  description: "J'ai ici reproduit le site Amazon en Reactjs et hébergé sur Firebase. L'application intègre toutes les principales fonctionnalités E-commerce (un système de compte et de login utilisant Firebase Authentification / des pages produit / un panier et une vérification / un système complet de payement utilisant Stripe / un historique des commandes en temps réel grâce à Firestore Database).",
  },
];

const minProducts = [
  {
    id: 1,
    name: "Spotify",
    img: "./spotify.jpg",
    imgcut: "./spotify.jpg",
    description: "Reproduction de la page d'accueil de Spotify en React en y implémentant mes propres données de l'application grâce à L'API fournit par Spotify."
  },
  {
    id: 2,
    name: "Movie DB",
    img: "./moviedbcut.jpg",
    imgcut: "./moviedbcut.jpg",
    link: "https://moviedb-b586e.web.app/",
    description: "Une app React utilisant l'API TMBD. Je souhaitais pouvoir accéder rapidement à n'importe quel film dans l'objectif de trouver la plateforme où le regarder (Netflix, Canal +, Disney ...), synopsis, note avec possibilité d'enregistrer une sélection dans le localStorage et d'y accéder.",
  },
  {
    id: 3,
    name: "Tinder",
    img: "./tinder.jpg",
    imgcut: "./tindercut.jpg",
    description: "Reproduction de Tinder en utilisant la stack M.E.R.N (MongoDB, Express, React, NodeJS). Afin d'arriver à un résultat similaire, j'ai intégré une dépendance React (react-tinder-card) simulant le `swipe` de Tinder qui me permet de connaître la direction du balayage et donc d'un `oui` ou d'un `non`."
  },
  {
    id: 4,
    name: "GPT-3",
    img: "./hook.jpg",
    imgcut: "./hookcut.jpg",
    link: "https://hook-23a60.web.app/",
    description: "Ce site vitrine est un projet personnel complet, entièrement responsive en Reactjs.",
  },
  {
    id: 5,
    name: "To Do App",
    img: "./todoapp.jpg",
    imgcut: "./todoapp.jpg",
    link: "https://todo-app-908e1.web.app/",
    description: "Une To Do List app en Reactjs intégrant toutes les fonctionnalités d'un CRUD (Create Read Update Delete). J'ai hébérgé l'application sur Firebase et la base de donnée en temps réel sur Firestore."
  },
  {
    id: 6,
    name: "Mario",
    img: "./mario.jpg",
    imgcut: "./mario.jpg",
    description: "3 niveaux inspirés du célèbre jeu vidéo Mario. L'application est développé en Javascript et utilise une librairie (Kaboom.js). Ici, nous avons la possibilité, grâce aux touches du clavier, de se déplacer et de sauter les obstacles dans l'objectif d'arriver au drapeau."
  },
  // {
  //   id: 6,
  //   name: "Face API JS",
  //   img: "./faceapi.jpg",
  //   imgcut: "./faceapi.jpg",
  //   description: "Une app js de reconnaissance faciale exploitant l'API FaceAPI. Le programme identifie un visage en temps réel ainsi que certaines expressions (colère, joie, tristesse, peur...)"
  // },
    // {
  //   id: 5,
  //   name: "Pokédex",
  //   img: "./pokedex.jpg",
  //   imgcut: "./pokedex.jpg",
  //   link: "https://pokedex-d4d4b.web.app/",
  //   description: "Reproduction d'un emblème culte de ma jeunesse, un Pokédex ! grâce à l'API PokéAPI "
  // },
  // {
  //   id: 8,
  //   name: "Auth",
  //   img: "./auth.jpg",
  //   imgcut: "./auth.jpg",
  //   link: "https://auth-firebase-640b5.web.app/",
  //   description: "Une app React d'authentification utilisant Firebase et incluant des routes privées."
  // },
];

function Projet() {
  return (
    <div className="portfolio__projet section__margin" id="projet">
      <div className="portfolio__projet-container">
        <div className="portfolio__projet-container-text" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="800">
          <h1>Create & Inspire. It's Edmarsht</h1>
          <p>
            Découvrez une sélection de quelques-uns de mes projets préférés qui sont soit des réalisations professionnelles, personnelles ou bien des reproductions de site web connus.  
          </p>
        </div>
        <div className="portfolio__projet-container-projets">
          {products.map((item) => (
            <Product key={item.id} name={item.name} img={item.img} link={item.link} description={item.description} imgcut={item.imgcut} />
          ))}
        </div>
        <div className="portfolio__projet-container-minprojets">
          {minProducts.map((item) => (
            <Minproduct key={item.id} name={item.name} img={item.img} description={item.description} imgcut={item.imgcut} link={item.link} />
          ))}
        </div>
        <div className="portfolio__projet-container-info" data-aos="fade-left">
          <img src={plus} loading="eager" alt="plus de projets Edouard Toulet" className="pulsate-fwd"/>
          <h4><a href="https://github.com/edmarsht?tab=repositories" target="_blank"> Découvrir d'autres projets sur Github.</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Projet;
