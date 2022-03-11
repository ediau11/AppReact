import React from "react";
import ItemList from "./ItemList";

const imprimirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productos = [
        { id: 1, Titulo: "Denom", Precio: 2000 },
        { id: 2, Titulo: "Piooner", Precio: 2000 },
        { id: 3, Titulo: "Allem and Headth", Precio: 1400 },
        { id: 4, Titulo: "Mixer", Precio: 4000 },
      ];
      if (productos.length === 0) {
        console.log("algo");
        reject("No hay productos disponible");
      } else {
        resolve(productos);
      }
    }, 3000);

    imprimirProductos()
      .then((productos) => {
        console.log(productos);
        return productos;
      })
      .then((productos) => {
        if (productos.length === 1) {
          console.log("Ya solo hay 2 productos");
          throw new Error("Error hay solamente un producto");
        }
      })
      .catch((error) => {
        console.log("Hay un error con los productos  " + error);
      });

    return (
      <div>
        <ItemList lista={productos} />
      </div>
    );
  });
};

export default Item;
