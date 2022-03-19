import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const onAdd = () => {};

  const productos = [
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

    {
      id: 3,
      titulo: "DDJ-FLX6",
      precio: 1400,
      img: "https://i.postimg.cc/NGx1DCCj/Imagen-Proyecto3.png",
      descripcion: "Controlador DJ de 4 canales para rekorbox y Serato DJ",
      categoria: "pioneer",
    },
    {
      id: 4,
      titulo: " DDJ-XP2 ",
      precio: 4000,
      img: "https://i.postimg.cc/G2LpmKFX/Imagen-Proyecto4.png",
      descripcion: "Subcontrolador para rekordbox y Serato DJ Pro",
      categoria: "pioneer",
    },

    {
      id: 5,
      titulo: "Xone:23",
      precio: 3999,
      img: "https://i.postimg.cc/h4CKGfPB/Xone-23-C-Front-2800.jpg",
      descripcion: "Un mezclador de DJ de 2 canales y 3+3 entradas ",
      categoria: "allem",
    },
    {
      id: 6,
      titulo: "Xone:43c",
      precio: 5000,
      img: "https://i.postimg.cc/QdCmrYYD/Imagen-Id6.jpg",
      descripcion: "Diseño de 4+1 canales simple, compacto e intuitivo",
      categoria: "allem",
    },
    {
      id: 7,
      titulo: "Xone:96",
      precio: 12000,
      img: "https://i.postimg.cc/Z5QGkdcf/imagen-Id7.jpg",
      descripcion:
        "6+2 canales, con conectividad digital de última generación ",
      categoria: "allem",
    },
    {
      id: 8,
      titulo: "Xone:K2",
      precio: 9000,
      img: "https://i.postimg.cc/c4R7GyBP/imagen-Id8.jpg",
      descripcion:
        "Un popular y compacto controlador MIDI universal de línea delgada ",
      categoria: "allem",
    },
    {
      id: 9,
      titulo: "MC7000",
      precio: 3662,
      img: "https://i.postimg.cc/d0bmKqgP/imagen-Id9.jpg",
      descripcion:
        "Controlador de DJ de 4 Canales Con mezclador digital, interfaces de audio USB duales y 16 pads de rendimiento sensibles a la velocidad",
      categoria: "denom",
    },
    {
      id: 10,
      titulo: "LC6000 PRIME",
      precio: 3444,
      img: "https://i.postimg.cc/26YGZkGd/Imagen-Id10.png",
      descripcion:
        "El Denon DJ LC6000 PRIME es el controlador de DJ más versátil del mundo .",
      categoria: "denom",
    },
    {
      id: 11,
      titulo: "MCX8000",
      precio: 10000,
      img: "https://i.postimg.cc/0QLtZTpZ/imagen-Id11-1.jpg",
      descripcion:
        "Controlador de DJ Y Reproductor de DJ independiente de 4 canales, incluye la tecnología independiente Denon DJ Engine",
      categoria: "denom",
    },
    {
      id: 12,
      titulo: "X1800",
      precio: 10000,
      img: "https://i.postimg.cc/x1D2qZhv/imagen-Id12.jpg",
      descripcion:
        "Mezclador profesional de DJ club de 4 canales, conexiones de audio USB duales para software y dispositivos de audio.",
      categoria: "denom",
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
      }, 1500);
    });
  };

  // console.log(imprimirProductos());

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => {
        if (!categoryId) {
          setListaProductos(respuesta);
        } else {
          setListaProductos(
            respuesta.filter(
              (listaProductos) => listaProductos.categoria == categoryId
            )
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  // console.log(listaProductos);
  return (
    <>
      <h4 className="fuente">
        Somos la casa numero 1 en ventas de Controladores y Mezcladores
      </h4>

      {loading ? (
        <h2 className="text-center">Cargando...</h2>
      ) : (
        <ItemList lista={listaProductos} stock={5} initial={0} onAdd={onAdd} />
      )}
    </>
  );
}

export default ItemListContainer;
