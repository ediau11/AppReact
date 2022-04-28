import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemListContainer/ItemList";
import { useCart } from "../../context/CartContext";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Loading from "../Loading/Loading";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);

  const { categoryId } = useParams();
  const { cart } = useCart();

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "Items");
      const respuesta = await getDocs(query);
      const dataItems = respuesta.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      if (categoryId) {
        setListaProductos(
          dataItems.filter(
            (listaProductos) => listaProductos.categoria == categoryId
          )
        );
      } else {
        setListaProductos(dataItems);
      }
    };

    getData();
  }, [categoryId]);

  console.log("carrito", cart);
  return (
    <>
      <ItemList lista={listaProductos} />
      {listaProductos < 1 && <Loading />}
    </>
  );
}

export default ItemListContainer;
