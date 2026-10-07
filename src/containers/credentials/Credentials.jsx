import React from "react";
import "./Credentials.css";
import { motion, useReducedMotion } from "framer-motion";
import { SealCheck } from "@phosphor-icons/react";

const CERTS = [
  { label: "ISO 27001", sub: "Lead Auditor" },
  { label: "EBIOS RM", sub: "Gestion des risques" },
  { label: "ISO 22301", sub: "Continuité d'activité" },
];

const STATS = [
  { value: "3+", label: "ans en cybersécurité" },
  { value: "8", label: "grands comptes accompagnés" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.85, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

function Credentials() {
  const reduce = useReducedMotion();

  return (
    <section className="credentials">
      <div className="credentials__inner container">
        <motion.div
          className="credentials__certs"
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.4 }}
        >
          {CERTS.map((cert) => (
            <motion.div
              className="badge"
              key={cert.label}
              variants={reduce ? undefined : badgeVariant}
              whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
            >
              <span className="badge__ring">
                <SealCheck size={26} weight="fill" />
              </span>
              <span className="badge__text">
                <span className="badge__label">{cert.label}</span>
                <span className="badge__sub">{cert.sub}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="credentials__stats">
          {STATS.map((stat) => (
            <div className="credentials__stat" key={stat.label}>
              <p className="credentials__stat-value">{stat.value}</p>
              <p className="credentials__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
