import React from "react";
import "./Expertise.css";
import Reveal from "../../components/reveal/Reveal";
import {
  ShieldCheck,
  ChartLineUp,
  ArrowsClockwise,
  Scales,
  ClipboardText,
} from "@phosphor-icons/react";

const DOMAINS = [
  {
    icon: ShieldCheck,
    title: "Gouvernance de la sécurité",
    description:
      "Politiques, SMSI et pilotage ISO 27001 pour structurer la sécurité au niveau de l'organisation.",
    featured: true,
  },
  {
    icon: ChartLineUp,
    title: "Gestion des risques",
    description: "Cartographie et traitement des risques selon la méthode EBIOS RM.",
  },
  {
    icon: ArrowsClockwise,
    title: "Continuité d'activité",
    description: "Plans de continuité et de reprise alignés sur l'ISO 22301.",
  },
  {
    icon: Scales,
    title: "Conformité réglementaire",
    description: "Mise en conformité DORA et accompagnement réglementaire sectoriel.",
  },
  {
    icon: ClipboardText,
    title: "Audit & accompagnement",
    description: "Audits internes, préparation de certification et suivi des plans d'action.",
  },
];

function Expertise() {
  return (
    <section className="expertise section" id="expertise">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Domaines d'intervention</span>
          <h2>Ce que je couvre en mission.</h2>
        </Reveal>

        <div className="expertise__grid">
          {DOMAINS.map((domain, i) => (
            <Reveal
              key={domain.title}
              delay={i * 0.05}
              className={`expertise__card${domain.featured ? " expertise__card--featured" : ""}`}
            >
              <domain.icon size={26} weight="light" color="var(--accent)" />
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
