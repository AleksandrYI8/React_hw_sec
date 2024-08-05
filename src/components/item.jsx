import React from "react";


function Products({item}) {

  return (
    <>
    <div className="product">
        <img className="Product_img" src={item.img} alt={item.name} />
        <span className="Product_span">{item.name}</span>
    </div>
    </>
  )
}

export default Products

