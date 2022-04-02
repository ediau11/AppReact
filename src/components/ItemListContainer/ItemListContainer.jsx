import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import ItemList from "../ItemListContainer/ItemList";
import { imprimirProductos } from "../../mocks/baseDatos";
import { useCart } from "../../context/CartContext";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const { cart } = useCart();

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "Items");
      const respuesta = await getDocs(query);
      const dataItems = respuesta.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setListaProductos(
        dataItems.filter(
          (listaProductos) => listaProductos.categoria === categoryId
        )
      );

      // const queryDoc = doc(db, "Items", "Ok5KKCXPydbvjgtyMDMW");
      // const respuesta1 = await getDoc(queryDoc);
      // const dataDoc = respuesta1.data();
      // console.log("infoUnico", dataDoc);
      // const nuevoDocumento = { id: respuesta1.id, ...dataDoc };
    };

    getData();
  }, [categoryId]);

  console.log("carrito", cart);
  return <ItemList lista={listaProductos} />;
}

export default ItemListContainer;
