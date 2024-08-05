import React from "react";


function Products({item}) {

  return (
    <>
    <div className="product">
        <img src={item.img} alt={item.name} />
        <span>{item.name}</span>
    </div>
    </>
  )
}

export default Products

