import React, { useState } from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <div className="container-fluid contenedorImagen">
        <img
          className="img-fluid imagenInicio fade-in-image"
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
      <h1 className="text-center textoInicio">Nuestras Marcas</h1>

      <div class="row margenContenedor">
        <div class="col">
          <div>
            <img
              className="mx-auto d-block"
              src="https://i.postimg.cc/rsq7J38P/logo-Pioneer.png"
              alt=""
            />
          </div>
          <a target="_blank" href="https://www.pioneerdj.com/en-us/">
            <div className="Container contenedorInicio">
              <img
                src="https://i.postimg.cc/c4KQwwJf/hdj-cx-home-carousel-1440x600.jpg"
                alt=""
                className="contenedorImagenInicio"
              />
            </div>
          </a>
        </div>
        <div class="col">
          <div>
            <img
              className="mx-auto d-block"
              src="https://i.postimg.cc/G2nvZ1Tq/logo-Allem.png"
              alt=""
            />
          </div>
          <div className="Container contenedorInicio">
            <img
              src="https://i.postimg.cc/Gm55yztk/sophisticated-design-1053x1053-sp2.jpg"
              alt=""
              className="contenedorImagenInicio"
            />
          </div>
        </div>
        <div class="col">
          <div>
            <img
              className="mx-auto d-block"
              src="https://i.postimg.cc/L8ftvXnn/logo-Denon.png"
              alt=""
            />
          </div>
          <div className="Container contenedorInicio">
            <img
              src="https://i.postimg.cc/tC7B24zj/homepage-0mp.png"
              alt=""
              className="contenedorImagenInicio"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
