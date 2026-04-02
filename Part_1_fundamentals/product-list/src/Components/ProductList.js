import React from "react";
import Product from "./Product";
import items from "../Data/products";

const ProductList = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
        {items.map((ele) => {
          return (
            <div className="col">
              <Product {...ele} key={ele.id}>
                {ele.description}
              </Product>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
