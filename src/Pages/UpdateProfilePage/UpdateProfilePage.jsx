// React-Hook-Form: (1)
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateProfile = () => {
   const { theme, updateUser, setLoading, user } = useContext(AuthContext);

   // React-Hook-Form: (2a)
   const {
      register,
      handleSubmit,
      getValues,

      formState: { errors },
   } = useForm({
      defaultValues: {
         userName: `${user.displayName}`,
         photoURL: `${user?.photoURL}`,
         email: `${user?.email}`,
      },
   });

   // React-Hook-Form: (2b)
   const onSubmit = () => {
      const userName = getValues("userName");
      const photoURL = getValues("photoURL");
      console.log(userName, photoURL);

      // create user imported from AuthContext

      updateUser(userName, photoURL).then(() => {
         // have to set loading to false else after
         // redirecting to page, it will keep showing the loader
         setLoading(false);

         Swal.fire({
            title: "Success!",
            text: "Registration Successful!",
            icon: "success",

            confirmButtonText: "Ok",
         });
      });
   };

   return (
      <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
         <div className="w-full mx-auto max-w-md p-8 space-y-3  ">
            <h1
               className={`text-3xl font-bold text-center tracking-[4px] ${
                  theme === "luxury" ? "text-blue-500" : "text-red-500"
               }`}
            >
               Register
            </h1>
            {/* // React-Hook-Form: (3) */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               {/* name field */}
               <div className="space-y-1 text-sm">
                  <label htmlFor="userName" className="block ">
                     Name
                  </label>
                  <input
                     // React-Hook-Form: (9)
                     {...register("userName", {
                        required: {
                           value: true,
                           message: "Must provide a username.",
                        },
                     })}
                     type="text"
                     name="userName"
                     placeholder="User name"
                     className="w-full p-3 border-b border-gray-100  outline-none duration-300 focus:border-[#A65F3F] "
                  />
                  {/* // React-Hook-Form: (10) */}
                  {errors?.userName && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.userName.message}
                     </span>
                  )}
               </div>

               {/* email field */}
               <div className="space-y-1 text-sm">
                  <label htmlFor="email" className="block ">
                     Email (can not change)
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
                     disabled
                     placeholder="Email"
                     className="w-full p-3 border-b border-gray-100  outline-none duration-300 focus:border-[#A65F3F] "
                  />
                  {/* // React-Hook-Form: (5) */}
                  {errors?.email && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.email.message}
                     </span>
                  )}
               </div>

               {/* PhotoURL Field */}
               <div className="mt-4">
                  <label htmlFor="photoURL" className="block ">
                     Photo
                  </label>
                  <input
                     {...register("photoURL", {
                        required: {
                           value: true,
                           message: "Must provide a photo URL.",
                        },
                     })}
                     type="text"
                     placeholder="Photo URL"
                     className="w-full p-3 border-b border-gray-100  outline-none duration-300 focus:border-[#A65F3F] "
                  />
                  {errors?.photoURL && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.photoURL.message}
                     </span>
                  )}
               </div>

               <div className="text-center">
                  <button className=" relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]">
                     <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                     <span className="relative w-full text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white text-center">
                        UPDATE PROFILE
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default UpdateProfile;
