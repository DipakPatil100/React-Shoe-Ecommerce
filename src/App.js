import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ProDetails from "./components/ProDetails/ProDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [mode, setMode] = useState("white");
  const [search, setSearch] = useState("");

  const handleModeChange = () => {
    if (mode === "white") {
      setMode("black");
    } else {
      setMode("white");
    }
  };

  // Cart Qunatity Increase Fn
  const qunatityInc = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddProucts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartCheckout = () => {
    alert("Order Placed");
    setCartItems([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            exact
            path="/home"
            element={
              <Home
                handleAddProucts={handleAddProucts}
                cartItems={cartItems}
                handleModeChange={handleModeChange}
                mode={mode}
                search={search}
                setSearch={setSearch}
              />
            }
          />

          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItems={cartItems}
                qunatityInc={qunatityInc}
                handleRemoveProducts={handleRemoveProducts}
                handleCartCheckout={handleCartCheckout}
                handleModeChange={handleModeChange}
                mode={mode}
              />
            }
          />

          <Route
            path="/detail/:id"
            element={
              <ProDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
                handleModeChange={handleModeChange}
                mode={mode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
