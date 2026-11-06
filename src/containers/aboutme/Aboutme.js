import React from "react";
import "./Aboutme.css";
import Reveal from "../../components/reveal/Reveal";

const TIMELINE = [
  { period: "2015 - 2018", label: "Fondateur, Yapero" },
  { period: "2018 - 2023", label: "Développeur freelance" },
  { period: "2023 - aujourd'hui", label: "Cybersécurité & GRC" },
];

function Aboutme() {
  return (
    <section className="about section" id="parcours">
      <div className="container">
        <Reveal as="div" className="about__text">
          <p>
            Depuis 2023, j'accompagne de grands comptes (INA, Orange, RATP,
            Covéa, Dalkia) sur leur gouvernance de la sécurité, leur analyse
            de risques et leur continuité d'activité, en tant que consultant
            chez Niji puis directement au sein de l'INA.
          </p>
        </Reveal>

        <Reveal as="div" className="about__timeline" delay={0.1}>
          <span className="about__timeline-line" aria-hidden="true" />
          {TIMELINE.map((item) => (
            <div className="about__timeline-item" key={item.period}>
              <span className="about__timeline-dot" />
              <p className="about__timeline-period">{item.period}</p>
              <p className="about__timeline-label">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Aboutme;
