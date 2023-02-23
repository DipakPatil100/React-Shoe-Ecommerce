import React from "react";
import "./Contact.css";

function Contact() {
  // console.log(mode);
  return (
    <div className={`contact-container`}>
      <h1>Contact Us</h1>
      <h4>Get In Touch</h4>
      <div className="con">
        <div className="con-left">
          <h3>Just say Hello!</h3>
          <div className="form">
            <form action="">
              <input type="text" placeholder="Enter your name" />
              <input
                type="email"
                placeholder="Enter your email"
                name=""
                id=""
              />
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="con-right">
          <div className="con-detail">
            <div className="addr">
              <h3>Contact Information</h3>
              <p>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>{" "}
                21 Sector B, Mumbai East - 400037
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>{" "}
                +91 123 3422 239
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-business-time"></i>
                </span>{" "}
                10:00 - 18:00, Mon - Sat
              </p>
            </div>

            <div className="foll-icon">
              <h4>Follow US</h4>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-solid fa-basketball"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
