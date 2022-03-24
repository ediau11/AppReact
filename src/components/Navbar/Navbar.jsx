import React from "react";
import CartWidget from "../CartWidget";
import logo from "./Logos/LogoNav2.png";
import Instagram from "./iconosRedesSociales/IconoInstagram.svg";
import Whatsapp from "./iconosRedesSociales/IconoWs.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <img className="logoPrincipal" to="./" src={logo} alt="" />
          <img
            src="https://see.fontimg.com/api/renderfont4/L7nD/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0U4RTFFMSIsInQiOjF9/REonJ3MgSG91c2U/musieer.png"
            className="navbar-brand logo"
          />

          <h4 className="colorLogo"></h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sobre nosotros">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="productos/pioneer">
                  Pioneer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos/allem">
                  Allem and Heath
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos/denom">
                  DenomDJ
                </Link>
              </li>
            </ul>
            <div className="ubicacionLogos">
              <img className="iconoInstagram" src={Instagram} alt="" />

              <img className="iconoInstagram" src={Whatsapp} alt="" />
            </div>

            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
