import React from "react";
import ocean from "../../assets/ocean.png";
import "./Ocean.css";
import linkedinicon from "../../assets/linkedinicon.svg";

function Ocean() {
  return (
    <div class="footer-social-links">
      <a href="#" title="Facebook" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="#" title="Twitter" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#" title="Google+" target="_blank">
        <i class="fa fa-google-plus"></i>
      </a>
      <a href="#" title="LinkedIn+" target="_blank">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="#" title="Dribbble" target="_blank">
        <i class="fa fa-dribbble"></i>
      </a>
    </div>
  );
}

export default Ocean;
