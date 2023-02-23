import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className={`foot-container`}>
        <div className="left">
          <span className="log">STREET X</span>
          <span>
            Our company is street essential <br></br> company, basically we
            provide <br></br> shoes, t-shirts...
          </span>
        </div>
        <div className="right">
          <div className="detail">
            <div className="row">
              <h5>About</h5>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
              <p>About us</p>
            </div>
            <div className="row">
              <h5>My Account</h5>
              <p>Sign in</p>
              <p>View cart</p>
              <p>My Wishlist</p>
              <p>Help</p>
            </div>
            <div className="row">
              <h5>Join a Newsletter</h5>
              <span>
                <input type="text" placeholder="Input your email here" />
                <button className="send">send</button>
              </span>
            </div>
          </div>
        </div>
        <div className="foll-icon">
          <h4>Follow US</h4>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-solid fa-basketball"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
