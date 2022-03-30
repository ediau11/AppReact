import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity, precio) => {
    const NewProduct = {
      item: item,
      quantity: quantity,
      precio: precio,
    };

    setCart((prev) => [...prev, { item, quantity }]);
  };
  const removeItem = (itemId) => {
    const nuevosProductos = cart.filter(
      (producto, quantity) => producto.item.id !== itemId + quantity
    );
    setCart(nuevosProductos);
  };

  const clear = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    const valor = cart.some((producto) => producto.item.id !== itemId);
  };

  const total = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.stock * producto.precio,
      0
    );
  };

  console.log(total);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
