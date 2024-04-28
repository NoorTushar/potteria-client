import { useNavigate, useRouteError } from "react-router-dom";
import ErrorAnimation from "./ErrorAnimation.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
   const error = useRouteError();
   const navigate = useNavigate();

   const handleGoHome = () => {
      navigate("./");
   };

   return (
      <div className="min-h-screen flex items-center justify-center flex-col">
         <div className="text-center">
            <p className="text-2xl font-bold">{error.status}</p>
            <p className="text-2xl font-bold">
               Page {error.statusText || error.message}
            </p>
            <p className="text-2xl font-bold">{error.data}</p>
         </div>

         <div className="size-[400px] my-6">
            <Lottie loop={true} animationData={ErrorAnimation}></Lottie>
         </div>

         <button
            onClick={handleGoHome}
            className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]"
         >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white text-center">
               BACK TO HOME
            </span>
         </button>
      </div>
   );
};

export default ErrorPage;
