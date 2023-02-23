import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");

  function handleClick() {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        setValue(data.user.image);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
        localStorage.setItem("image", data.user.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="login-container">
      <h1>
        STREET <span>X</span>
      </h1>
      <h2>Welcome to the StreetX</h2>
      <h5>Sign in to continue</h5>
      <div className="login">
        {value ? (
          <Navigate to="/home" />
        ) : (
          <button onClick={handleClick} className="btn">
            <img src="../images/logos/google.png" alt="" />
            <span>Sign in with Google</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
