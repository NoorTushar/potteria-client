import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = (
   <>
      <li className="my-nav-item text-brownPrimary">
         <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="my-nav-item text-brownPrimary">
         <NavLink to={"/about"}>About</NavLink>
      </li>
   </>
);

const Navbar = () => {
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {navItems}
               </ul>
            </div>
            <Link
               to={"/"}
               className="font-Alegreya text-3xl font-light text-brownPrimary tracking-[1.2px]"
            >
               Potteria
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
         </div>
         <div className="navbar-end">
            {/* theme toggler */}
            <a className="btn">Button</a>
         </div>
      </div>
   );
};

export default Navbar;
