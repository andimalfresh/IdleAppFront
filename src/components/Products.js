import React from "react";

const Products = props => {
  return (
    <div className="products">
      <div className="prodName">{props.info.product}</div>
      <div>{props.info.price}</div>
    </div>
  );
};

export default Products;
