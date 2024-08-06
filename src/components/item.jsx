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

function Best_sales({item}){
  return (
    <>
    <div className="best">
      <div className="up">
        <img className="Mane_img" src={item.img} alt="" />
        <img className="Like" src="/like_best.svg" alt="" />
      </div>
      <div className="down">
        <p className="title">{item.name}</p>
        <p className="price">{item.price} $</p>
      </div>
    </div>
    </>
  )
}




export default Products
export {Best_sales};



