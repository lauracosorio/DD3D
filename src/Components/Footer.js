import React from "react";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer">
        Copyright © 2020 | Medellín - Antioquia, Colombia |{" "}
        <a className="footer__link" href="/">
          Nuestra Empresa{" "}
        </a>{" "}
        |{" "}
        <a className="footer__link" href="/">
          Contacto
        </a>
      </p>
    </footer>
  );
}

export default Footer;
