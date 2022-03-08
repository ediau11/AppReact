import React from "react";
import logo from "./Logos/LogoNav2.png";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img className="logoPrincipal" src={logo} alt="" />
              <img
                src="https://see.fontimg.com/api/renderfont4/L7nD/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0U4RTFFMSIsInQiOjF9/REonJ3MgSG91c2U/musieer.png"
                className="navbar-brand logo"
              />

              <p className="colorTexto">
                Distribuidor n°1 de Pioneer en Argentina!
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase colorLinks1">Productos</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="colorLinks" href="#!">
                    Nuestros Productos
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Pioneer
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Allen and Heath
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Denom DJ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase colorLinks1">About</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="colorLinks" href="#!">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Medios de Pago
                  </a>
                </li>
                <li>
                  <a className="colorLinks" href="#!">
                    Redes Sociales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 colorTexto">
          © 2022 Copyright: Eduardo Arcila
        </div>
      </footer>
    </>
  );
};

export default Footer;
