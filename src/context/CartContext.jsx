import { createContext, useContext, useState } from "react";
import { db } from "../../src/utils/firebase";
import {
  addDoc,
  Timestamp,
  collection,
  updateDoc,
  getDoc,
} from "firebase/firestore";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const nuevosProductos = [...cart];

      const productoIndex = nuevosProductos.findIndex(
        (producto) => producto.item.id === item.id
      );
      nuevosProductos[productoIndex].quantity =
        nuevosProductos[productoIndex].quantity + quantity;

      setCart(nuevosProductos);
    } else {
      const newProduct = {
        item: item,
        quantity: quantity,
      };

      setCart([...cart, newProduct]);
    }
  };

  const removeItem = (id) => {
    const nuevosProductos = cart.filter(
      (producto, quantity) => producto.item.id > id + quantity
    );
    setCart(nuevosProductos);
  };

  // const finalizarCompra = () => {
  //   const sendOrder = async (e) => {
  //     e.preventDefault();
  //     // console.log("evento formulario", e);
  //     const nombre = e.target[0].value;
  //     const telefono = e.target[1].value;
  //     const email = e.target[2].value;
  //     // ////////
  //     const newObj = {
  //       bayer: {
  //         name: nombre,
  //         phone: telefono,
  //         email,
  //       },
  //       items: cart,
  //       date: Timestamp.fromDate(new Date()),
  //     };
  //     const ordenColeccion = collection(db, "orders");
  //     const docReference = await addDoc(ordenColeccion, newObj);
  //     console.log(docReference, "referencia creada");
  //   };
  //   const updateProducto = async () => {
  //     const docReference = doc(db, items, "1");
  //     const docData = await getDoc(docReference);
  //   };
  // };

  const clear = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((producto) => producto.item.id === id);
  };

  const getTotalCount = () => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    return totalCount;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, producto) => acc + producto.quantity * producto.item.precio,
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotalCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
