import React from "react";
import { Link } from "react-router-dom";

function inicio() {
  return (
    <>
      <div className="container-fluid contenedorImagen">
        <img
          className="img-fluid imagenInicio"
          src="https://www.pioneerdj.com/-/media/project/pioneer/pioneerdj/home/carousel/2022/ddj-rev1_web_home-crousel_1440x600.jpg"
          alt=""
        />

        <div className="texto-encima">
          <h1
            className="heroMain__title heading heading--1"
            id="hero-title-tag"
          >
            DDJ-REV1
          </h1>
        </div>
        <div className="texto-encima2">
          <h3
            className="heroMain__title heading heading--1 "
            id="hero-title-tag"
          >
            Join the REVolution
          </h3>
        </div>
        <div className="texto-encima3 ">
          <Link to={"/productos"}>
            <button className="btn btn-primary botonInicio">Detalles</button>
          </Link>
        </div>
      </div>
      <h1 className="text-center">Nuestras Marcas</h1>

      <div class="row">
        <div class="col">
          <div className="Container">
            <img
              src="https://i.postimg.cc/Gm55yztk/sophisticated-design-1053x1053-sp2.jpg"
              alt=""
              className="contenedorImagenInicio"
            />
          </div>
        </div>
        <div class="col">
          <div className="Container">
            <img
              src="https://i.postimg.cc/Gm55yztk/sophisticated-design-1053x1053-sp2.jpg"
              alt=""
              className="contenedorImagenInicio"
            />
          </div>
        </div>
        <div class="col">
          <div className="Container">
            <img
              src="https://i.postimg.cc/Gm55yztk/sophisticated-design-1053x1053-sp2.jpg"
              alt=""
              className="contenedorImagenInicio"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default inicio;
