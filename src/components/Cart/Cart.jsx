import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import "./Cart.css";

function Cart({
  cartItems,
  qunatityInc,
  handleRemoveProducts,
  handleCartCheckout,
  handleModeChange,
  mode,
}) {
  // console.log(props);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  // const GST = totalPrice + totalPrice * (18 / 100);

  return (
    <>
      <div className={`cart-con ${mode}`}>
        <div className="nav-bar">
          <Navbar
            cartItems={cartItems}
            mode={mode}
            handleModeChange={handleModeChange}
          />
        </div>
        <span className="cart-item-header">Shopping Cart</span>

        {cartItems.length === 0 && (
          <div className="cart-items-empty">
            <p>No items are added here</p>
            <img
              className="emptycart"
              src="../images/logos/empty-cart.png"
              alt=""
            />
          </div>
        )}
        <div className={`cart-container ${mode}`}>
          <div>
            {cartItems.map((item) => {
              return (
                <div id={item.id} className={`cart-item-list ${mode}`}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-items-function">
                    <span
                      className="class-item-add"
                      onClick={() => qunatityInc(item)}
                    >
                      +
                    </span>
                    <div className="cart-item-quantity">{item.quantity}</div>
                    <span
                      className="class-item-remove"
                      onClick={() => handleRemoveProducts(item)}
                    >
                      -
                    </span>
                  </div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
              );
            })}
          </div>

          <div className="cart-total-price-name">
            <div className="total-items">{cartItems.length} items</div>
            <span>Total Price:</span>
            <div className="cart-total-price">${totalPrice}</div>
          </div>
          {/* <div className="cart-total-price">${GST}</div> */}
          <div className="checkout">
            {cartItems.length >= 1 && (
              <button onClick={handleCartCheckout} className=" buybtn">
                Checkout
              </button>
            )}
          </div>
        </div>
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default Cart;
