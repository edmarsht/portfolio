import React from "react";
import "./Resume.css";
import Reveal from "../../components/reveal/Reveal";
import { FileText } from "@phosphor-icons/react";

function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <Reveal as="div" className="resume__inner">
          <p className="resume__text">
            Envie d'en savoir plus sur mes missions et certifications ?
          </p>
          <span className="resume__status">
            <FileText size={18} weight="bold" />
            CV en cours
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
