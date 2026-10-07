import React from "react";
import "./Footer.css";
import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <a href="#top" className="footer__brand">
            Edouard Toulet
          </a>
          <p>Consultant cybersécurité, Paris</p>
        </div>

        <nav className="footer__col">
          <p className="footer__heading">Navigation</p>
          <a href="#parcours">Parcours</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Expérience</a>
          <a href="#entreprises">Entreprises</a>
        </nav>

        <div className="footer__col">
          <p className="footer__heading">Contact</p>
          <a href="mailto:edtoulet@gmail.com">edtoulet@gmail.com</a>
          <p>(+33) 06 27 13 57 23</p>
        </div>

        <div className="footer__col footer__socials">
          <p className="footer__heading">Ailleurs</p>
          <div className="footer__social-links">
            <a
              href="https://www.linkedin.com/in/edouard-toulet-161753145/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href="https://github.com/edmarsht"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubLogo size={20} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer__legal">© 2026 Edouard Toulet. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
