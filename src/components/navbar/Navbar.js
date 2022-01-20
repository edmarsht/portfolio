import React from "react";
import "./Navbar.css";
import githubicon from "../../assets/githubicon.svg";

function Navbar() {
  return (
    <div
      className="portfolio__navbar"
      data-aos="fade-left"
      data-aos-duration="1300"
    >
      <p>Call me. (+33) 06 27 13 57 23</p>
      <div className="portfolio__navbar-logo pulsate-fwd">
        <img src={githubicon} alt="github" />
      </div>
    </div>
  );
}

export default Navbar;
