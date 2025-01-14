import { Link, useLocation, useNavigate } from "react-router-dom";
// React-Hook-Form: (1)
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Success from "../../../public/lottie.json";
import Lottie from "lottie-react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import FormTopAnimation from "../../assets/Form-Top-Animation.json";
import PageTopWaveAnimation from "../../../public/PageTopWaveAnimation.json";

const Login = () => {
   // toggle show/ hide password - (1)
   const [showPassword, setShowPassword] = useState(false);

   // importing values from AutHContext provider
   const { theme, loginUser, loginWithGoogle, loginWithGitHub } =
      useContext(AuthContext);

   // after login correct redirection (3)
   // first we will get the location of the current page
   const location = useLocation();
   // in this location now we will have a property named
   // state, which will have our pathname or will have NULL value

   // after login correct redirection (4)
   const navigate = useNavigate();

   // after login correct redirection (1)
   // we want to send this path to the registration state props
   const locationState = location.state;

   // React-Hook-Form: (2a)
   const {
      register,
      handleSubmit,
      getValues,
      reset,
      formState: { errors },
   } = useForm();

   // React-Hook-Form: (2b)
   const onSubmit = () => {
      const email = getValues("email");
      const password = getValues("password");

      console.log(email, password);

      // login with firebase email and pass
      loginUser(email, password)
         .then((data) => {
            console.log(data.user);
            reset();

            Swal.fire({
               title: "Success!",
               text: "Logged in successfully!",
               icon: "success",
               confirmButtonText: "Ok",
            });

            // after login correct redirection (5)
            navigate(location?.state || "/");
         })
         .catch((error) => {
            console.log(error);
            const errorMessage = error.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            Swal.fire({
               title: "Failure!",
               text: `${errorMessage}`,
               icon: "error",
               width: 600,
               color: "#A65F3F",
               background: "",
               confirmButtonText: "Ok",
            });
         });
   };

   // handle login with github firebase
   const handleLoginWithGitHub = () => {
      loginWithGitHub()
         .then((data) => {
            console.log(data.user);

            Swal.fire({
               title: "Success!",
               text: "Logged in successfully!",
               icon: "success",

               confirmButtonText: "Ok",
            });

            // after login correct redirection (5)
            navigate(location?.state || "/");
         })
         .catch((error) => {
            console.log(error);
            const errorMessage = error.message;

            Swal.fire({
               title: "Failure!",
               text: `${errorMessage}`,
               icon: "error",
               width: 600,
               color: "tomato",
               background: "",
               confirmButtonText: "Ok",
            });
         });
   };

   // login with google using firebase
   const handleLoginWithGoogle = () => {
      loginWithGoogle()
         .then((data) => {
            console.log(data.user);

            Swal.fire({
               title: "Success!",
               text: "Logged in successfully!",
               icon: "success",

               confirmButtonText: "Ok",
            });

            // after login correct redirection (5)
            navigate(location?.state || "/");
         })
         .catch((error) => {
            console.log(error);
            const errorMessage = error.message;

            Swal.fire({
               title: "Failure!",
               text: `${errorMessage}`,
               icon: "error",
               width: 600,
               color: "tomato",
               background: "",
               confirmButtonText: "Ok",
            });
         });
   };

   return (
      <div className="min-h-[calc(100vh-100px)]">
         <div className="h-16 overflow-hidden">
            <Lottie
               loop={true}
               animationData={PageTopWaveAnimation}
               className="w-full "
            />
         </div>
         <div className="w-full mx-auto max-w-md p-8 space-y-3  ">
            <h1
               className={`text-3xl font-bold text-center tracking-[4px] ${
                  theme === "luxury" ? "text-blue-500" : "text-red-500"
               }`}
            >
               LOGIN
            </h1>
            {/* // React-Hook-Form: (3) */}
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="space-y-6 relative"
            >
               {/* email field */}
               <div className="space-y-1 text-sm">
                  <label htmlFor="email" className="block ">
                     Email
                  </label>
                  <input
                     // React-Hook-Form: (4)
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Must provide an email",
                        },
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Must provide a valid email address",
                        },
                     })}
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Email"
                     className="w-full p-3 border-b border-gray-100  outline-none duration-300 focus:border-[#A65F3F] bg-transparent"
                  />
                  {/* // React-Hook-Form: (5) */}
                  {errors?.email && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.email.message}
                     </span>
                  )}
               </div>

               {/* password field */}
               <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block ">
                     Password
                  </label>
                  <div className="relative">
                     <input
                        // React-Hook-Form: (6)
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Must provide a password.",
                           },
                        })}
                        // toggle show/ hide password - (3)
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-3 border-b border-gray-100  outline-none duration-300 focus:border-[#A65F3F] bg-transparent"
                     />
                     {/*  // toggle show/ hide password - (2) */}
                     {showPassword ? (
                        <IoMdEye
                           onClick={() => setShowPassword(false)}
                           className="absolute text-lg right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        />
                     ) : (
                        <IoMdEyeOff
                           onClick={() => setShowPassword(true)}
                           className="absolute text-lg right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        />
                     )}
                  </div>

                  {/* // React-Hook-Form: (7) */}
                  {errors?.password && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.password.message}
                     </span>
                  )}
               </div>

               <button className="w-full  relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white text-center">
                     LOGIN
                  </span>
               </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 bg-gray-700 "></div>
               <p className="px-3 text-sm  text-gray-400">
                  Login with social accounts
               </p>
               <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
               {/* google sign in */}
               <button
                  onClick={handleLoginWithGoogle}
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 32 32"
                     className="w-5 h-5 fill-current"
                  >
                     <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
               </button>
               {/* gitHub sign in */}
               <button
                  onClick={handleLoginWithGitHub}
                  aria-label="Log in with GitHub"
                  className="p-3 rounded-sm"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 32 32"
                     className="w-5 h-5 fill-current"
                  >
                     <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
               </button>
            </div>
            <p className="text-xs text-center sm:px-6 ">
               Do not have an account?
               {/* // after registration correct redirection - (2) */}
               <Link
                  state={locationState}
                  to={"/register"}
                  className="underline "
               >
                  Sign up
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;
