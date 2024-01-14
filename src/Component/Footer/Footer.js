import React from "react";
import footerLogo from "./../Assest/footer_logo.png";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer_container">

      {/* footer upper part */}
      <div id="footerUpper">
        <div className="footer_logo">
          <img src={footerLogo} alt="" />
        </div>
        <div className="footer_content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
        </div>
      </div>

      {/* footer lower part */}
      <div id="footerLower">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <div id="footer_icon">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-solid fa-basketball"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
