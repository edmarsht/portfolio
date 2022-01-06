import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="hook__footer section__padding ">
      <div className="hook__container-text">
        <h1 className="gradient__text">
        Le plus dur c'est de le faire, ce n'est pas d'y penser.
        </h1>
        <button className="hook__footer_button">Contact</button>
      </div>
      <div className="hook__container-details">
        <div className="hook__container-details-1">
          <h1>Edmarsht</h1>
          <p>Paris 75017, All Rights Reserved</p>
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
          <p>Paris, 75017</p>
          <p>(+33) 6 27 13 57 23</p>
          <p>edtoulet@gmail.com</p>
        </div>
      </div>
      <div className="div"></div>
      <h5 className="hook__container-right">© 2022 Edouard Toulet. All rights reserved.</h5>
    </div>
  );
}

export default Footer;
