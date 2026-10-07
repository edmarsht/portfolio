import React from "react";
import "./Resume.css";
import Reveal from "../../components/reveal/Reveal";
import cv_edouard_toulet from "../../assets/cv_edouard_toulet.pdf";
import { DownloadSimple } from "@phosphor-icons/react";

function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <Reveal as="div" className="resume__inner">
          <p className="resume__text">
            Envie d'en savoir plus sur mes missions et certifications ?
          </p>
          <a
            href={cv_edouard_toulet}
            download="CV Edouard Toulet"
            className="btn btn--primary"
          >
            <DownloadSimple size={18} weight="bold" />
            Télécharger mon CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
