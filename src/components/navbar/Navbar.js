import React, { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#parcours", label: "Parcours" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Expérience" },
  { href: "#entreprises", label: "Entreprises" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand">
          Edouard Toulet
        </a>

        <nav className="navbar__links" aria-label="Navigation principale">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Me contacter
        </a>

        <button
          className="navbar__toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
