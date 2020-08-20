import React from "react";
import "./Styles/Header.css";
import logo from "../imagenes/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  const { dataNav } = props;
  return (
    <header>
      <div className="Logo">
        <img className="header__logo" src={logo} alt="Logo DD3D" />
      </div>

        <nav className="header__navbar">
          <ul className="header__navbar--list">
            {dataNav.map((item, index) => {
              return (
                
                  <li key={`navbar-list-${index}`} className="header__navbar--item"><Link className="header__navbar--link" to={item.link}>{item.name}</Link></li>
               
              );
            })}
          </ul>
        </nav>
 
    </header>
  );
}

export default Header;
