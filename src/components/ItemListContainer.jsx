import React, { useEffect, useState } from "react";
import Imagen1 from "./imagenesPrimerDesafio/Imagen1.jpg";
import Imagen2 from "./imagenesPrimerDesafio/Imagen2.jpg";
import Imagen3 from "./imagenesPrimerDesafio/Imagen3.jpg";
import Imagen4 from "./imagenesPrimerDesafio/Imagen4.jpg";
import Imagen5 from "./imagenesPrimerDesafio/Imagen5.jpg";
import Imagen6 from "./imagenesPrimerDesafio/Imagen6.jpeg";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const onAdd = () => {
    console.log("Agregue al carrito");
  };

  const productos = [
    {
      id: 1,
      titulo: "DDJ-SR2",
      precio: 2000,
      img: "https://i.postimg.cc/sXqJrMSD/Imagen-Proyecto1.png",
      descripcion:
        "Controlador DJ para performances de 2 canales para Serato DJ Pro",
    },
    {
      id: 2,
      titulo: "DDJ-REV1",
      precio: 2000,
      img: "https://i.postimg.cc/fWPPzLZd/Imagen-Proyecto2.png",
      descripcion:
        "Controlador DJ de 2 canales de estilo sctatch para Serato DJ lite",
    },

    {
      id: 3,
      titulo: "DDJ-FLX6",
      precio: 1400,
      img: "https://i.postimg.cc/NGx1DCCj/Imagen-Proyecto3.png",
      descripcion: "Controlador DJ de 4 canales para rekorbox y Serato DJ Pro",
    },
    {
      id: 4,
      titulo: " DDJ-XP2 ",
      precio: 4000,
      img: "https://i.postimg.cc/G2LpmKFX/Imagen-Proyecto4.png",
      descripcion: "Subcontrolador para rekordbox y Serato DJ Pro",
    },
  ];
  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length === 0) {
          reject("No hay productos disponible");
        } else {
          resolve(productos);
        }
      }, 3000);
    });
  };
  console.log(imprimirProductos());

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.log(error));
  }, []);
  console.log(listaProductos);
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
      {/* <ItemCount stock={5} initial={0} onAdd={onAdd} /> */}
      <ItemList lista={listaProductos} />
    </>
  );
}

export default ItemListContainer;
