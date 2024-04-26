import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC5gHVUUyPcARhajC0dUkNaliOPquvzlo0",
   authDomain: "potteria-auth.firebaseapp.com",
   projectId: "potteria-auth",
   storageBucket: "potteria-auth.appspot.com",
   messagingSenderId: "513402321696",
   appId: "1:513402321696:web:49f9838d7dd4cc859bf545",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
