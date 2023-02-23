import React from "react";
import "./Nike.css";
import data from "../../Products";
import { Link } from "react-router-dom";

function Nike({ handleAddProucts, search }) {
  const { nike } = data;
  return (
    <div className={`nike-store`}>
      <span className="b-logo">
        <img src="../images/logos/nike.png" alt="" />
      </span>
      <h1>Nike Store</h1>
      <h4>New Arrivals! Get upto 10% off</h4>
      <div className="pro-container">
        {nike
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((productItem) => {
            return (
              <div id={productItem.id} className="pro">
                <Link to={`/detail/${productItem.id}`}>
                  <img src={productItem.image} alt="" />
                </Link>
                <div className="details">
                  <h4>{productItem.name}</h4>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h5>${productItem.price}</h5>
                </div>
                <button
                  onClick={() => handleAddProucts(productItem)}
                  className="cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Nike;
