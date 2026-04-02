import React from "react";
import Heading from "./Heading";
import ProductList from "./ProductList";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const App = () => {
  return (
    <div>
      <Heading />
      <ProductList />
    </div>
  );
};
export default App;
