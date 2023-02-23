import React from "react";
import "./ProDetails.css";
import Data from "../../Products";
import Navbar from "../Header/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

console.log(Data);

function ProDetails({ cartItems, setCartItems, handleModeChange, mode }) {
  const { id } = useParams();
  // console.log("ID", id);
  const { adidas, nike } = Data;

  const adi = adidas.find((item) => item.id === id);
  const ni = nike.find((item) => item.id === id);

  // const proAddToCart = (adi, ni) => {
  //   const productExist = cartItems.find((item) => item.id === adi.id && ni.id);
  //   if (productExist) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === adi.id && ni.id
  //           ? { ...productExist, quantity: productExist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...ni, quantity: 1 }]);
  //   }
  // };

  return (
    <>
      <div className={`detail-con ${mode}`}>
        <div className="nav-bar">
          <Navbar
            cartItems={cartItems}
            handleModeChange={handleModeChange}
            mode={mode}
          />
        </div>
        <div id="prodetails">
          <div className="single-pro-image">
            <img
              src={adi ? adi.image : ni.image}
              width="100%"
              height="500px"
              id="MainImg"
              alt=""
            />
          </div>
          <div className="single-pro-details">
            <h6>
              Home/Shoes/{adi ? adi.name.split(" ")[0] : ni.name.split(" ")[0]}
            </h6>
            <h4>{adi ? adi.name : ni.name}</h4>
            <h2>${adi ? adi.price : ni.price}</h2>
            <button className="normal btn">Add to Cart</button>
            <h4>Product Details</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              eveniet sequi nobis, quam velit recusandae modi? Explicabo,
              laborum. Ratione, optio? Delectus, optio labore omnis culpa earum
              corrupti. Tenetur, dignissimos modi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero, perferendis.
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProDetails;
