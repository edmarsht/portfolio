import React from "react";
import "./Aboutme.css";
import Reveal from "../../components/reveal/Reveal";
import { Buildings } from "@phosphor-icons/react";

const TIMELINE = [
  { period: "2015 - 2023", label: "Fondateur Yapero et missions de développeur", muted: true },
  { period: "2023", label: "Conformité DORA sur 4 filiales du Groupe Adélaïde" },
  { period: "2024", label: "Orange, audit cyber des JO 2024" },
  { period: "2024 - aujourd'hui", label: "Adjoint RSSI chez INA" },
];

const OTHER_CLIENTS = ["Dalkia", "RATP", "Covéa", "Gandi", "AFNOR", "MGDIS"];

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
          <span className="about__timeline-marker">Cybersécurité</span>
          {TIMELINE.map((item) => (
            <div
              className={`about__timeline-item${item.muted ? " about__timeline-item--muted" : ""}`}
              key={item.label}
            >
              <span className="about__timeline-dot" />
              <p className="about__timeline-period">{item.period}</p>
              <p className="about__timeline-label">{item.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" className="about__more" delay={0.18}>
          <span className="about__more-icon">
            <Buildings size={16} weight="bold" />
          </span>
          <p className="about__more-text">
            <span className="about__more-count">+6</span> autres missions
            menées pour de grands comptes
          </p>
          <ul className="about__more-clients">
            {OTHER_CLIENTS.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Aboutme;
