import React, { useRef } from "react";
import "./Experience.css";
import Reveal from "../../components/reveal/Reveal";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const COMPANIES = [
  "INA",
  "Niji",
  "Groupe Adélaïde",
  "Dalkia",
  "Orange",
  "Gandi",
  "RATP",
  "Covéa",
  "AFNOR",
  "MGDIS",
];

const PLACEHOLDER = "Mission à détailler : contexte, périmètre et réalisations clés.";

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
            <Reveal as="div" key={company} delay={i * 0.05} className="experience__item">
              <span className="experience__index">{String(i + 1).padStart(2, "0")}</span>
              <div className="experience__body">
                <h3>{company}</h3>
                <p className="experience__placeholder">{PLACEHOLDER}</p>
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
