import React from "react";

const Product = ({ name, price, image, children }) => {
  const showDescription = () => {
    alert(children);
  };
  return (
    <div className="card h-100">
      <img src={image} alt="" className="card-img-top p-3" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <b className="card-text mt-auto">Price: ${price}</b>
        <button className="btn btn-primary" onClick={showDescription}>
          Show Description
        </button>
      </div>
    </div>
  );
};
export default Product;
