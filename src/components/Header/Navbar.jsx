import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartItems, handleModeChange, mode, setSearch }) {
  const [toggle, setToggle] = useState("");
  // console.log(cartItems);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleSearchClick = () => {
    if (toggle === "") {
      setToggle("search-active");
    } else {
      setToggle("");
    }
  };
  return (
    <>
      {/* <div className="slider">
        <i className="fa-solid fa-bars "></i>
        <i className="fa-solid fa-x"></i>
        <Link to="">
          <li>SHOES</li>
        </Link>
        <Link to="">
          <li>T-SHIRTS</li>
        </Link>
        <Link to="">
          <li>HOODIES</li>
        </Link>
        <Link to="">
          <li>SUN GLASS</li>
        </Link>
      </div> */}
      <div className={`nav-wrap ${mode}`}>
        <div className="navlist">
          <ul className={`${mode}`}>
            <Link to="">
              <li className="active">SHOES</li>
            </Link>
            <Link to="">
              <li className={`${mode}`}>T-SHIRTS</li>
            </Link>
            <Link className="logo" to="/home">
              <span id="logo">STREET X</span>
            </Link>
            <Link to="">
              <li className={`${mode}`}>HOODIES</li>
            </Link>
          </ul>
        </div>
        <div className={`search`}>
          <input
            type="text"
            className={`src-input ${toggle}`}
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className={mode} onClick={handleSearchClick}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="mode">
          <button className="mode-toggle-btn" onClick={handleModeChange}>
            {mode === "white" ? (
              <i class="fa-sharp fa-solid fa-moon"></i>
            ) : (
              <i class="fa-solid fa-sun"></i>
            )}
          </button>
        </div>
        <div className="user-section">
          <ul>
            <li id="btn-logout">
              <Link to="#">
                <img src={localStorage.getItem("image")} alt="" />
              </Link>
              <div className="username">{localStorage.getItem("name")}</div>
              <div className="logout">
                <button onClick={logout}>
                  <Link to="/">Logout</Link>
                </button>
              </div>
            </li>
            <li id="cart">
              <Link className={mode} to="/cart">
                <i className={`fa-solid fa-bag-shopping `}></i>
                <span className="cart-length">
                  {cartItems.length === 0 ? "0" : cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
