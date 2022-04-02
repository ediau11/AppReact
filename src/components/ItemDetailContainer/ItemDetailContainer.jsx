import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
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
      const query = collection(db, "Items");
      const respuesta = await getDocs(query);
      const dataItems = respuesta.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setItem(dataItems);

      const queryDoc = doc(db, "Items", itemId);
      const respuesta1 = await getDoc(queryDoc);
      const dataDoc = respuesta1.data();
      console.log("info1SoloProducto", dataDoc);
      const nuevoDocumento = { id: respuesta1.id, ...dataDoc };

      setItem(nuevoDocumento);
    };

    getData();
  }, [itemId]);

  return (
    <>
      <ItemDetail lista1={item} />
    </>
  );
}

export default ItemDetailContainer;
