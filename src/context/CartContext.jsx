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
