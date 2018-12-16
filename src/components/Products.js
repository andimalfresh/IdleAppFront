import React from "react";

const Products = props => {
  return ( 
      <>
        <div className="products">
          <div className="prodName">{props.info.product}</div>
          <div className="prodPrice">{props.info.price}</div>
        </div>
        <div className="buttonRow">
          <button>-</button>
          <input className="inputField" name="quantityInput" />
          <button>+</button>
        </div>
      </>
      
  )
}
export default Products
