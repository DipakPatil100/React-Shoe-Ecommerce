import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmva73pyFuM_xCsC8vIIrYPlq7GnxEcFA",
  authDomain: "e-commerce-56a4c.firebaseapp.com",
  projectId: "e-commerce-56a4c",
  storageBucket: "e-commerce-56a4c.appspot.com",
  messagingSenderId: "111841306007",
  appId: "1:111841306007:web:ca6104502e2f2c51bb10d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
