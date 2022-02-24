import React from "react";
import logo from "./LogoNav2.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" />
          <h4 className="colorLogo">DJ's House</h4>
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
                <a className="nav-link" href="javascript:void(0)">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Pioneer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Allen and Heath
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Denom DJ
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Busca tu producto"
              />
              <button className="btn btn-success" type="button">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
