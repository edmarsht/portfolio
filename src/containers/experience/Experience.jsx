import React, { useRef } from "react";
import "./Experience.css";
import Reveal from "../../components/reveal/Reveal";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const ROLES = [
  {
    company: "INA - Institut national de l'audiovisuel",
    role: "Consultant en cybersécurité",
    period: "depuis sept. 2024",
    location: "Paris, hybride",
    current: true,
  },
  {
    company: "Niji",
    role: "Consultant en cybersécurité",
    period: "depuis juin 2023",
    location: "ESN, missions chez différents clients",
    missions: [
      "Groupe Adélaïde, conformité DORA",
      "Dalkia",
      "Orange",
      "Gandi",
      "RATP",
      "Covéa",
      "AFNOR",
      "MGDIS",
    ],
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

          {ROLES.map((item, i) => (
            <Reveal as="div" key={item.company} delay={i * 0.08} className="experience__item">
              <div className="experience__meta">
                <p className="experience__period">{item.period}</p>
                {item.current && <span className="experience__badge">en cours</span>}
              </div>
              <div className="experience__body">
                <h3>{item.role}</h3>
                <p className="experience__company">{item.company}</p>
                <p className="experience__location">{item.location}</p>
                {item.missions && (
                  <ul className="experience__missions">
                    {item.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                )}
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
