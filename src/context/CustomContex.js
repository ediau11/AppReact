// import { useState } from "react";
// import { CartContext } from "./CartContext";

// export const CustomContex = ({ children }) => {
//   const [productoCarrito, setProductosCarrito] = useState([]);

//   const addItem = (item, cantidad) => {
//     const nuevoProducto = {
//       item: item,
//       cantidad: cantidad,
//     };
//     setProductosCarrito([...productoCarrito, nuevoProducto]);
//   };

//   const removeItem = () => {};
//   return (
//     <CartContext.Provider value={{ productoCarrito, addItem, removeItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
