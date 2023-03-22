import React from "react";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Product />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
