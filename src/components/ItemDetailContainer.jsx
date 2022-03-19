import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer({}) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const productoDetail = [
    {
      id: 1,
      titulo: "DDJ-SR2",
      precio: 2000,
      img: "https://i.postimg.cc/sXqJrMSD/Imagen-Proyecto1.png",
      descripcion:
        "Controlador DJ para performances de 2 canales para Serato DJ Pro",
      categoria: "pioneer",
    },
    {
      id: 2,
      titulo: "DDJ-REV1",
      precio: 2000,
      img: "https://i.postimg.cc/fWPPzLZd/Imagen-Proyecto2.png",
      descripcion:
        "Controlador DJ de 2 canales de estilo sctatch para Serato DJ lite",
      categoria: "pioneer",
    },
  ];

  const imprimiProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productoDetail.length === 0) {
          reject("No hay productos disponible");
        } else {
          resolve(productoDetail);
        }
      }, 1500);
    });
  };

  console.log(itemId);

  useEffect(() => {
    imprimiProductos()
      .then((respuesta1) => {
        if (!itemId) {
          setItem(respuesta1);
        } else {
          setItem(respuesta1.find((prod) => prod.id === Number(itemId)));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  console.log(imprimiProductos);

  return (
    <>
      <h2>ItemDetail</h2>
      {loading ? <h2>Cargando...</h2> : <ItemDetail lista1={item} />}
    </>
  );
}

export default ItemDetailContainer;
