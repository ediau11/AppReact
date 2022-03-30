import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const NewProduct = {
      item: item,
      quantity: quantity,
    };

    setCart((prev) => [...prev, { item, quantity }]);
  };
  const removeItem = (itemId) => {
    const nuevosProductos = cart.filter(
      (producto) => producto.item.id !== itemId
    );
    setCart(nuevosProductos);
  };

  const clear = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    const valor = cart.some((producto) => producto.item.id !== itemId);
  };

  console.log(isInCart);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
