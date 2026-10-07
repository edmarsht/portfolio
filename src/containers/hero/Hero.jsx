import React from "react";
import "./Hero.css";
import { motion, useReducedMotion } from "framer-motion";
import portrait from "../../assets/edouard-cutout.png";

const headline = ["Consultant", "cybersécurité."];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const word = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatTransition = { duration: 4.5, repeat: Infinity, ease: "easeInOut" };

function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__text">
          <motion.p className="hero__name" {...fadeUp(0)}>
            Edouard Toulet
          </motion.p>

          <h1>
            <motion.span
              className="hero__headline"
              variants={reduce ? undefined : wordContainer}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : "show"}
            >
              {headline.map((line) => (
                <span className="hero__line" key={line}>
                  <motion.span variants={reduce ? undefined : word}>{line}</motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p className="hero__subtext" {...fadeUp(0.5)}>
            Gouvernance de la sécurité, gestion des risques et continuité
            d'activité pour de grands comptes : INA, Orange, RATP, Covéa.
          </motion.p>
          <motion.div className="hero__actions" {...fadeUp(0.6)}>
            <a href="#contact" className="btn btn--primary">
              Me contacter
            </a>
            <a href="#experience" className="btn btn--ghost">
              Voir mon parcours
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait-wrap"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            className="hero__portrait"
            src={portrait}
            alt="Edouard Toulet en lévitation, illustration"
            animate={reduce ? undefined : { y: [0, -18, 0] }}
            transition={reduce ? undefined : floatTransition}
          />

          <motion.div
            className="hero__shadow"
            animate={reduce ? undefined : { scaleX: [1, 0.72, 1], opacity: [0.5, 0.22, 0.5] }}
            transition={reduce ? undefined : floatTransition}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
