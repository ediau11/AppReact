import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const NewProduct = {
      item: item,
      quantity: quantity,
    };
    console.log("new product", NewProduct);
    setCart((prev) => [...prev, { item, quantity }]);
  };
  const removeItem = (itemId) => {
    const nuevosProductos = cart.filter(
      (producto) => producto.item.id !== itemId
    );
    setCart(nuevosProductos);
    console.log(nuevosProductos, "nuevosProd");
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
