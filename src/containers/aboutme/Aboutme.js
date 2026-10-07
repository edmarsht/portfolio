import React from "react";
import "./Aboutme.css";
import Reveal from "../../components/reveal/Reveal";

function Aboutme() {
  return (
    <section className="about section" id="parcours">
      <div className="about__inner container">
        <Reveal as="div" className="about__text">
          <h2>Du produit à la conformité.</h2>
          <p>
            Avant la cybersécurité, j'ai fondé et développé Yapero, un
            service de livraison d'alcool à Marseille, puis conçu des
            interfaces web en freelance. Cette expérience de terrain,
            responsable d'une équipe, d'un P&amp;L et d'un produit, m'a
            donné un rapport concret au risque bien avant d'en faire mon
            métier.
          </p>
          <p>
            Depuis 2023, j'accompagne de grands comptes (INA, Orange, RATP,
            Covéa, Dalkia) sur leur gouvernance de la sécurité, leur analyse
            de risques et leur continuité d'activité, en tant que consultant
            chez Niji puis directement au sein de l'INA.
          </p>
        </Reveal>

        <Reveal as="div" className="about__facts" delay={0.1}>
          <div className="about__fact">
            <p className="about__fact-value">2017</p>
            <p className="about__fact-label">Premiers pas d'entrepreneur, avec Yapero</p>
          </div>
          <div className="about__fact">
            <p className="about__fact-value">2023</p>
            <p className="about__fact-label">Bascule vers le conseil en cybersécurité</p>
          </div>
          <div className="about__fact">
            <p className="about__fact-value">2024</p>
            <p className="about__fact-label">Rejoint l'INA en mission, conformité DORA chez Adélaïde</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Aboutme;
