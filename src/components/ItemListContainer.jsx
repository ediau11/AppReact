import React from "react";
import Imagen1 from "./imagenesPrimerDesafio/Imagen1.jpg";
import Imagen2 from "./imagenesPrimerDesafio/Imagen2.jpg";
import Imagen3 from "./imagenesPrimerDesafio/Imagen3.jpg";
import Imagen4 from "./imagenesPrimerDesafio/Imagen4.jpg";
import Imagen5 from "./imagenesPrimerDesafio/Imagen5.jpg";
import Imagen6 from "./imagenesPrimerDesafio/Imagen6.jpeg";
import ItemCount from "./ItemCount";

const onAdd = () => {
  console.log("Agregue al carrito");
};

const ItemListContainer = () => {
  return (
    <>
      <h4 className="fuente">
        Somos la casa numero 1 en ventas de Controladores y Mezcladores
      </h4>
      <section id="galeria" className="container">
        <div className="row">
          <div className="col-lg-4 galeria ">
            <img src={Imagen1} alt="" />
          </div>
          <div className="col-lg-4 galeria">
            <img src={Imagen2} alt="" />
          </div>
          <div className="col-lg-4 galeria ">
            <img src={Imagen3} alt="" />
          </div>
          <div className="col-lg-4 galeria ">
            <img src={Imagen4} alt="" />
          </div>
          <div className="col-lg-4 galeria ">
            <img src={Imagen5} alt="" />
          </div>
          <div className="col-lg-4 galeria ">
            <img src={Imagen6} alt="" />
          </div>
        </div>
      </section>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
