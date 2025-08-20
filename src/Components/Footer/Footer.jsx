import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            tenetur deleniti laboriosam suscipit at voluptatum, nobis ad
            provident blanditiis quam adipisci eum alias porro reprehenderit
            quia quaerat ipsum esse. Ea?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        {/* Center */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        &copy; 2025 | All rights reserved. Made by{" "}
        <a
          href="https://ahmed12g4.github.io/My-Portfolio12/"
          target="_blank"
          rel="noreferrer"
        >
          <strong className="text-primary">Ahmed Seleem</strong>
        </a>
      </p>
    </div>
  );
};

export default Footer;
