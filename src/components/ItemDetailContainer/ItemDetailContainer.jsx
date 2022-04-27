import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  const { cart } = useCart();

  console.log(itemId);
  console.log("carritoDetalle", cart);
  useEffect(() => {
    const getData = async () => {
      const queryDoc = doc(db, "Items", itemId);
      const respuesta1 = await getDoc(queryDoc);
      const dataDoc = respuesta1.data();
      const nuevoDocumento = { id: respuesta1.id, ...dataDoc };

      setItem(nuevoDocumento);
      setLoading(false);
    };

    getData();
  }, [itemId]);

  return (
    <>
      <ItemDetail lista1={item} />
      {item < 1 && (
        <div class="d-flex justify-content-center fondoCart">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">{loading}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
