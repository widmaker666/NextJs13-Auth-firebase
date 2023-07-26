// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBOrzGyaG8WT3VaYfj9NAYnNzD_1mdadGA",
  authDomain: "nextjs-app-register.firebaseapp.com",
  projectId: "nextjs-app-register",
  storageBucket: "nextjs-app-register.appspot.com",
  messagingSenderId: "1046001782448",
  appId: "1:1046001782448:web:6500b442f7bfef25b73575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
