import React, { useRef } from "react";
import "./Experience.css";
import Reveal from "../../components/reveal/Reveal";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const PLACEHOLDER = "Mission à détailler : contexte, périmètre et réalisations clés.";

const COMPANIES = [
  {
    name: "INA",
    summary:
      "En tant qu'adjoint au RSSI, intégration de la sécurité dès la conception : refonte de la PSSI, analyses de risques EBIOS RM, formalisation d'un PCA/PRA et pilotage d'un programme de sensibilisation auprès de 500 collaborateurs. Sélection d'un prestataire SOC et déploiement d'une solution de GRC.",
  },
  {
    name: "Groupe Adélaïde",
    summary:
      "Mise en conformité DORA sur quatre filiales : création d'un framework basé sur le NIST CSF, état des lieux par ateliers, pilotage du plan d'action et suivi des KPI de sécurité jusqu'à la trajectoire de conformité.",
  },
  {
    name: "Orange",
    summary:
      "Référent cybersécurité sur les Jeux Olympiques de Paris 2024 : animation de 36 ateliers de sensibilisation (600 participants), audit et sécurisation des sites olympiques, et formation des équipes à l'utilisation des téléphones satellites. RETEX transmis en vue de Los Angeles 2028.",
  },
  {
    name: "Gandi",
    summary:
      "Mission d'audit de continuité d'activité aligné sur la norme ISO 22301.",
  },
  {
    name: "RATP",
    summary: "Mission d'audit d'un référentiel de conformité interne.",
  },
  {
    name: "Covéa",
    summary:
      "Rédaction du rapport annuel des activités cybersécurité, destiné à être présenté à la direction du groupe.",
  },
  {
    name: "AFNOR",
    summary:
      "Conception d'un support de formation sur la qualification SecNumCloud de l'ANSSI, destiné aux clients d'AFNOR.",
  },
  {
    name: "MGDIS",
    summary:
      "Audit initial dans le cadre de la qualification SecNumCloud (ANSSI) du service SaaS de pilotage édité par MGDIS.",
  },
];

function Experience() {
  const reduce = useReducedMotion();
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Expérience</span>
          <h2>Missions récentes.</h2>
        </Reveal>

        <div className="experience__list" ref={listRef}>
          {!reduce && (
            <motion.span className="experience__trail" style={{ scaleY: progress }} />
          )}

          {COMPANIES.map((company, i) => (
            <Reveal as="div" key={company.name} delay={i * 0.05} className="experience__item">
              <span className="experience__index">{String(i + 1).padStart(2, "0")}</span>
              <div className="experience__body">
                <h3>{company.name}</h3>
                <p
                  className={
                    company.summary === PLACEHOLDER
                      ? "experience__placeholder"
                      : "experience__summary"
                  }
                >
                  {company.summary}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal as="p" className="experience__earlier" delay={0.16}>
            Avant la cybersécurité : fondateur de Yapero (2017-2020) et
            développeur front-end en freelance (2019-2023).
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Experience;
