import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Inicio from "../src/components/inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { Carrito } from "./././components/cart/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Formulario from "./components/Formulario/Formulario";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Productos" element={<ItemListContainer />} />
            <Route
              path="/Productos/:categoryId"
              element={<ItemListContainer />}
            />

            <Route
              path="/Productos/:categoryId/:OtroParam"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Formulario" element={<Formulario />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
