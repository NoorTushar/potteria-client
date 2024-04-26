import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   // use theme from local storage if available or set light theme
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
   );

   // current user:
   const [user, setUser] = useState(null);

   // loader for loading till we get the user
   const [loading, setLoading] = useState(true);

   // create firebase user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login using firebase email and password
   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // login with Google using firebase
   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   // logout
   const logoutUser = () => {
      return signOut(auth);
   };

   // observe user of firebase
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("this is the current user: ", currentUser);
         setUser(currentUser);
         setLoading(false);
      });

      return () => unsubscribe();
   }, []);

   const allValues = {
      theme,
      loading,
      setTheme,
      createUser,
      loginUser,
      loginWithGoogle,
      logoutUser,
      user,
   };
   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;
