import React from "react";
import "./Ventures.css";
import Reveal from "../../components/reveal/Reveal";
import yaperoLogo from "../../assets/yapero.svg";
import ecimmoLogo from "../../assets/ecimmo-logo.svg";
import { ArrowUpRight } from "@phosphor-icons/react";

const VENTURES = [
  {
    logo: yaperoLogo,
    name: "Yapero",
    role: "Fondateur, 2017 - 2020",
    description:
      "Service de livraison de vins, bières et spiritueux à Marseille, du soir au matin. Conception du produit, management d'équipe et relation fournisseurs.",
    link: "https://yapero.com",
  },
  {
    logo: ecimmoLogo,
    name: "E&C IMMO",
    role: "Cofondateur, depuis 2024",
    description:
      "Bail civil et sous-location meublée de courte durée pour propriétaires bailleurs : loyer fixe garanti, entretien professionnel, zéro gestion pour le propriétaire.",
    link: "https://ec-immo.fr",
  },
];

function Ventures() {
  return (
    <section className="ventures section" id="entreprises">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Entreprises</span>
          <h2>Ce que j'ai construit à côté.</h2>
        </Reveal>

        <div className="ventures__list">
          {VENTURES.map((venture, i) => (
            <Reveal as="a" href={venture.link} target="_blank" rel="noreferrer" key={venture.name} delay={i * 0.08} className="venture">
              <div className="venture__logo">
                <img src={venture.logo} alt={`Logo ${venture.name}`} />
              </div>
              <div className="venture__body">
                <h3>{venture.name}</h3>
                <p className="venture__role">{venture.role}</p>
                <p className="venture__description">{venture.description}</p>
              </div>
              <ArrowUpRight size={20} className="venture__arrow" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ventures;
