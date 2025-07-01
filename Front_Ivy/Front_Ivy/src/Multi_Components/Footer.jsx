import React from "react";
import "../Multi-Styles/Footer_cs.css";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_Container">
        <div className="Footer_Left">
          <p className="Footer_Brand">IVY © 2025</p>
          <p className="Footer_Credits">Desarrollado por <strong>Elvis Aguilar Martínez</strong></p>
          <p className="Footer_Patent">Página patentada por <span>Forward</span></p>
        </div>

        <div className="Footer_Right">
          <p className="Footer_Contacto">Contáctanos:</p>
          <div className="Footer_Icons">
            <a href="mailto:soporte@ivy.cr" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com/ivycr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/ivy.cr" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;