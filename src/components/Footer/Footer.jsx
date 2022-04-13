import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img
                className="logoPrincipal"
                src="https://i.postimg.cc/Y9Q7vqMG/LogoNav2.png}"
                alt=""
              />
              <img
                src="https://see.fontimg.com/api/renderfont4/L7nD/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0U4RTFFMSIsInQiOjF9/REonJ3MgSG91c2U/musieer.png"
                className="navbar-brand logo"
              />

              <p className="colorTexto textoCompra">
                Distribuidor n°1 de Pioneer en Argentina!
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase colorLinks1 textoCompra">
                Productos
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="colorLinks textoCompra" to="/productos">
                    Nuestros Productos
                  </Link>
                </li>
                <li>
                  <Link
                    className="colorLinks textoCompra"
                    to="/productos/pioneer"
                  >
                    Pioneer
                  </Link>
                </li>
                <li>
                  <Link
                    className="colorLinks textoCompra"
                    to="/productos/allem"
                  >
                    Allen and Heath
                  </Link>
                </li>
                <li>
                  <Link
                    className="colorLinks textoCompra"
                    to="/productos/denom"
                  >
                    Denom DJ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase colorLinks1 textoCompra">About</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="colorLinks textoCompra" to="nosotrs">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link className="colorLinks textoCompra" to="">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link className="colorLinks textoCompra" to="#!">
                    Medios de Pago
                  </Link>
                </li>
                <li>
                  <Link className="colorLinks textoCompra" to="#!">
                    Redes Sociales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 colorTexto textoCompra">
          © 2022 Copyright: Eduardo Arcila
        </div>
      </footer>
    </>
  );
};

export default Footer;
