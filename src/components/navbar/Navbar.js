import React from "react";
import "./Navbar.css";
import githubicon from "../../assets/githubicon.svg";


function Navbar() {
  return (
    <div className="portfolio__navbar">
        <p>Call me. (+33) 6 27 13 57 23</p>
      <div className="portfolio__navbar-logo pulsate-fwd">
      <img src={githubicon} alt="github" />
      </div>
    </div>
  );
}

export default Navbar;
