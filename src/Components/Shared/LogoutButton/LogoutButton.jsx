import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const LogoutButton = () => {
   const { logoutUser } = useContext(AuthContext);

   // logout user
   const handleLogOut = (e) => {
      e.preventDefault();
      logoutUser()
         .then(() => {
            console.log(`success logout`);
         })
         .catch((error) => console.error(error));
   };

   return (
      <Link
         onClick={handleLogOut}
         className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]"
      >
         <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
         <span className="relative w-full text-left text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white">
            LOGOUT
         </span>
      </Link>
   );
};

export default LogoutButton;
