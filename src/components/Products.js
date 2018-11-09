import React from "react";

const Products = props => {
  return (
    <div className="products">
      <div>
        <img className="logoImg" src={require("../iwlogo.jpg")} />
      </div>
      <div>Product</div>
    </div>
  );
};

export default Products;
