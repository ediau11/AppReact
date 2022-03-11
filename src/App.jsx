import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";

// import "./consumiendoApis/ConsumiendoPokeApi";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
