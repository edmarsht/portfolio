import React from "react";
import "./Ventures.css";
import Reveal from "../../components/reveal/Reveal";
import yaperoLogo from "../../assets/yapero.svg";
import ecimmoLogo from "../../assets/ecimmo-logo-square.svg";
import { ArrowUpRight } from "@phosphor-icons/react";

const VENTURES = [
  {
    logo: ecimmoLogo,
    name: "E&C IMMO",
    role: "Cofondateur, depuis 2024",
    description:
      "Gestion locative clé en main pour propriétaires bailleurs : loyer fixe garanti, entretien professionnel et sous-location meublée de courte durée, sans aucune gestion de leur côté. Plus de 10 logements gérés à Paris.",
    link: "https://ec-immo.fr",
    tight: true,
  },
  {
    logo: yaperoLogo,
    name: "Yapero",
    role: "Fondateur, 2017 - 2020",
    description:
      "Livraison de vins, bières et spiritueux en moins de 30 minutes, déployée à Marseille, Aix-en-Provence et Reims. Conception de l'application et du site de commande, pilotage de toute la chaîne logistique (4 livreurs à temps plein) et des stocks, avant la cession de l'entreprise en 2020.",
    link: "https://yapero.com",
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
              <div className={`venture__logo${venture.tight ? " venture__logo--tight" : ""}`}>
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
