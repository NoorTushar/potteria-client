import { Link, NavLink } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import UpdateProfileButton from "../UpdateProfileButton/UpdateProfileButton";

const navItems = (
   <>
      <li className="my-nav-item text-brownPrimary tracking-[1.2px]">
         <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="my-nav-item text-brownPrimary tracking-[1.2px]">
         <NavLink to={"/items"}>Items</NavLink>
      </li>
   </>
);

const Navbar = () => {
   const { theme, setTheme, user } = useContext(AuthContext);

   // update state on toggle
   const handleToggle = (e) => {
      if (e.target.checked) {
         setTheme("luxury");
      } else {
         setTheme("light");
      }
   };

   // set theme state in localstorage on mount & also update localstorage on state change
   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      // add custom data-theme attribute to html tag required to update theme using DaisyUI
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden pl-0"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-[10px] md:text-[12px]"
               >
                  {navItems}

                  {/* show only when user is available */}
                  {user && (
                     <li className="my-nav-item text-brownPrimary tracking-[1.2px]">
                        <NavLink to={"/addItem"}>Add Item</NavLink>
                     </li>
                  )}
               </ul>
            </div>
            <Link
               to={"/"}
               className="font-Alegreya text-xl md:text-3xl font-light text-brownPrimary tracking-[1.2px]"
            >
               Potteria
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase text-[14px] space-x-2">
               {navItems}
               {/* show only when user is available */}
               {user && (
                  <li className="my-nav-item text-brownPrimary tracking-[1.2px]">
                     <NavLink to={"/addItem"}>Add Item</NavLink>
                  </li>
               )}
            </ul>
         </div>
         <div className="navbar-end flex items-center gap-2">
            {/* theme toggler */}
            <button>
               <label className="cursor-pointer grid place-items-center">
                  <input
                     className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                     type="checkbox"
                     onChange={handleToggle}
                     // show toggle image based on localstorage theme
                     checked={theme === "light" ? false : true}
                  />
                  <svg
                     className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="12" cy="12" r="5" />
                     <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                     className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
               </label>
            </button>

            {user ? (
               <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                  <div>
                     <img
                        tabIndex={0}
                        role="button"
                        className="size-12 rounded-full m-1"
                        src={user.photoURL}
                        alt=""
                     />
                  </div>
                  <ul
                     tabIndex={0}
                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                  >
                     <li className="text-center text-brownPrimary text-base">
                        {`Welcome ${user.displayName} !`}
                     </li>
                     <li>
                        <UpdateProfileButton></UpdateProfileButton>
                     </li>
                     <li>
                        <LogoutButton></LogoutButton>
                     </li>
                  </ul>
               </div>
            ) : (
               <LoginButton></LoginButton>
            )}
         </div>
      </div>
   );
};

export default Navbar;
