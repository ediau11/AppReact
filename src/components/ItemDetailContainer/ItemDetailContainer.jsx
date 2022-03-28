import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { imprimirProductos } from "../../mocks/baseDatos";
import ItemCount from "../ItemCount";
import { useCart } from "../../context/CartContext";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  const { cart } = useCart();

  console.log(itemId);
  console.log("carritoDetalle", cart);

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => {
        setItem(respuesta.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  console.log(imprimirProductos);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemDetail lista1={item} />
      )}
    </>
  );
}

export default ItemDetailContainer;
