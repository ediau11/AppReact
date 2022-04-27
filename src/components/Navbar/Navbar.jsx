import React from "react";
import logo from "./Logos/LogoNav2.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <img
              className=" iconLogo"
              src={logo}
              alt="Imagen logo principal "
            />
            <img
              src="https://see.fontimg.com/api/renderfont4/L7nD/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0U4RTFFMSIsInQiOjF9/REonJ3MgSG91c2U/musieer.png"
              className="navbar-brand logo"
            />
          </Link>
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
          </div>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
