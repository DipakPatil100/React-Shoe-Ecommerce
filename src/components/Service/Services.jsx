import React from "react";
import "./Services.css";

function Services() {
  return (
    // <div className={`service `}>
    <div className={`ser`}>
      <div className="service-cart">
        <img src="../images/logos/secure.png" alt="" />
        <div>
          <h2>Secure Payment</h2>
          <p>Secure on order</p>
        </div>
      </div>
      <div className="service-cart">
        <img src="../images/logos/support.png" alt="" />
        <div>
          <h2>24/7 Support</h2>
          <p>Contact us 24 hrs a day</p>
        </div>
      </div>
      <div className="service-cart">
        <img src="../images/logos/delivery.png" alt="" />
        <div>
          <h2>Fast Delivery</h2>
          <p>Fast delivery on order</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Services;
