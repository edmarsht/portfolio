import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="hook__footer section__padding">
      <div className="hook__container-text">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button className="hook__footer_button"> Hover me</button>
      </div>
      <div className="hook__container-details">
        <div className="hook__container-details-1">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="hook__container-details-2">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="hook__container-details-3">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="hook__container-details-4">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="div"></div>
      <h5 className="hook__container-right">© 2021 HOOK. All rights reserved.</h5>
    </div>
  );
}

export default Footer;
