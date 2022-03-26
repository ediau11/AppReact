import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import ItemList from "../ItemListContainer/ItemList";
import { imprimirProductos } from "../../mocks/baseDatos";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const onAdd = () => {};

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

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemList lista={listaProductos} />
      )}
    </>
  );
}

export default ItemListContainer;
