import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h3>Niara Nest</h3>
        <p>From melt to magic</p>
      </div>

      <div className="footer-contact">
        <p>
          <FaEnvelope className="footer-icon" />
          <a href="mailto:niaranest@gmail.com">
            niaranest@gmail.com
          </a>
        </p>

        <p>
          <FaPhone className="footer-icon" />
          <a href="tel:+919019988658">
            +91 9019988658
          </a>
        </p>
      </div>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/niara_nest?igsh=Yzk4bGVveHR2bzcy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Niara Nest. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
