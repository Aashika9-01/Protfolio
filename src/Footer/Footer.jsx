import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">

      <h2 className="footer-logo">
        Aashika<span>{"</>"}</span>
      </h2>

      <p className="footer-text">
        Building clean, responsive and interactive web applications.
      </p>

      <div className="footer-social">

        <a
          href="https://github.com/Aashika9-01"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aashika-chaudhary-69018b343/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/aa.shika5987/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="mailto:aashikachaudhary683@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <hr />

      <p className="footer-copy">
        © 2025 Aashika Chaudhary. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;