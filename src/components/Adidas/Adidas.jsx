import React from "react";
import "./Adidas.css";
import data from "../../Products";
import { Link } from "react-router-dom";

function Adidas({ handleAddProucts, search }) {
  const { adidas } = data;

  return (
    <div className={`adi-store`}>
      <span className="b-logo">
        <img src="../images/logos/adidas.png" alt="" />
      </span>
      <h1>Adidas Store</h1>
      <h4>New Arrivals! Get upto 30% off</h4>

      <div className="pro-container">
        {adidas
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((productItem) => {
            return (
              <div className="pro">
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
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Adidas;
