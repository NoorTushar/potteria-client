import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   // use theme from local storage if available or set light theme
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
   );

   // create firebase user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login with Google using firebase
   const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const allValues = { theme, setTheme, createUser, loginWithGoogle };
   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;
