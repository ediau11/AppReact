import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({}) {
  const [productoDesafio, setProductoDesafio] = useState({});

  const producto = {
    id: 1,
    nombre: "DDJ-FLX6",
    detalle:
      "Cautiva a tu audiencia con el DDJ-FLX6-W. Esta unidad de 4 canales, que incluye una gran cantidad de características nuevas, facilita entusiasmar a la audiencia, mezclar pistas de géneros musicales totalmente diferentes y darle vida a sus presentaciones con efectos de scratch de sonido profesional.",
    imagen: "https://i.postimg.cc/NGx1DCCj/Imagen-Proyecto3.png",
  };

  const ImprimirProducto = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (producto.length === 0) {
          reject("No hay ningun producto");
        } else {
          resolve(producto);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    ImprimirProducto()
      .then((respuesta1) => setProductoDesafio(respuesta1))
      .catch((error1) => console.log(error1));
  });

  return (
    <div>
      <ItemDetail lista={productoDesafio} />
    </div>
  );
}

export default ItemDetailContainer;
