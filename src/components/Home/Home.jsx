import React from "react";
import "./Home.css";
import Service from "../Service/Services";
import Adidas from "../Adidas/Adidas";
import Nike from "../Nike/Nike";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

function Home({
  handleAddProucts,
  cartItems,
  handleModeChange,
  mode,
  search,
  setSearch,
}) {
  return (
    <>
      <div className={`home ${mode}`}>
        <Navbar
          cartItems={cartItems}
          handleModeChange={handleModeChange}
          mode={mode}
          setSearch={setSearch}
        />
        <div className={`home-container ${mode}`}>
          <div className="left-hero">
            <h1>
              <span>Shoe</span> Of The Best Quality
            </h1>
            <span>Dedicated to quality and result</span>
            <p>Up to 20% Off</p>
            <button className="btn">Open Catlog</button>
          </div>
          <div className="right-hero">
            <div className="blur"></div>
            <div className="float1">
              <span>20%</span>
              <span>Get up to 20% off</span>
            </div>
            <img src="../images/hero.png" alt="" />
            <div className="blur1"></div>
          </div>
          <div className="float2">
            <div>1k+</div>
            <span>
              All Sneakers <p>Sell on products</p>
            </span>
          </div>
        </div>

        <Service mode={mode} />
        <Adidas
          handleAddProucts={handleAddProucts}
          mode={mode}
          search={search}
        />
        <Nike handleAddProucts={handleAddProucts} mode={mode} search={search} />
        <Contact mode={mode} />
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default Home;
