import { createContext, useContext, useState } from "react";

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
        item,
        quantity,
      };

      setCart([...cart, newProduct]);
    }
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
  const isInCart = (id) => {
    return cart.some((producto) => producto.item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
