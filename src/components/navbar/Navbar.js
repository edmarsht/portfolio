import React from "react";
import "./Navbar.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";


function Navbar() {
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-logo">
      <img src={linkedin} alt="ai" />
      <img src={github} alt="ai" />
      </div>
    </div>
  );
}

export default Navbar;
