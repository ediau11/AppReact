import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import { CustomContex } from "./context/CustomContex";
import { useContext } from "react";

function App() {
  return (
    <CustomContex>
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
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CustomContex>
  );
}

export default App;
