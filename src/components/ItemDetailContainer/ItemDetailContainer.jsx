import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Loading from "../Loading/Loading";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

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

  return loading ? (
    <div className="mt-5">
      <Loading />
    </div>
  ) : (
    <ItemDetail lista1={item} />
  );
}

export default ItemDetailContainer;
