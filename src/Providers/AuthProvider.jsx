import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   // use theme from local storage if available or set light theme
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
   );

   // create firebase user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const allValues = { theme, setTheme, createUser };
   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;
