import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

const UpdateItemPage = () => {
   const { theme, user } = useContext(AuthContext);
   const params = useParams();
   const updateId = params.id;

   const item = useLoaderData();

   //    useEffect(() => {
   //       axios
   //          .get(`https://potteria-server.vercel.app/items/${updateId}`)
   //          .then((data) => {
   //             console.log(data.data);
   //          })
   //          .catch((error) => {
   //             console.log(error.message);
   //          });
   //    }, []);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         image: `${item.image}`,
         item_name: `${item.item_name}`,
         subcategory_Name: `${item.subcategory_Name}`,
         short_description: `${item.short_description}`,
         price: `${item.price}`,
         rating: `${item.rating}`,
         customization: `${item.customization}`,
         processing_time: `${item.processing_time}`,
         stock_status: `${item.stock_status}`,
      },
   });

   const onSubmit = (data) => {
      // Convert price from string to number
      data.price = parseFloat(data.price);
      // Convert rating from string to number
      data.rating = parseFloat(data.rating);
      const item = data;
      console.log(item);

      // confirmation before deleting an item
      Swal.fire({
         title: "Are you sure?",
         text: "Are you sure you want to update these fields?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Update It!",
      }).then((result) => {
         if (result.isConfirmed) {
            // if we have have confirmed to press DELETE button
            axios
               .put(
                  `https://potteria-server.vercel.app/items/${updateId}`,
                  item
               )
               .then((response) => {
                  console.log(response.data);
                  if (response.data.modifiedCount > 0) {
                     console.log(response.data);
                     Swal.fire({
                        title: "Success!",
                        text: "Item update!",
                        icon: "success",
                        confirmButtonText: "Ok",
                     });
                  } else {
                     Swal.fire({
                        title: "Not updated",
                        text: "You have not changed any values.",
                        icon: "error",
                        confirmButtonText: "Ok",
                     });
                  }
               })
               // if we have any errors while deleting:
               .catch((error) => {
                  const message = error.message;

                  Swal.fire({
                     title: "Error!",
                     text: `${message}`,
                     icon: "error",
                     confirmButtonText: "Ok",
                  });
               });
         }
      });

      // const image = getValues("image");
      // const item_name = getValues("item_name");
      // const subcategory_Name = getValues("subcategory_Name");
      // const short_description = getValues("short_description");
      // const price = parseFloat(getValues("price"));
      // const rating = parseFloat(getValues("rating"));
      // const customization = getValues("customization");
      // const processing_time = getValues("processing_time");
      // const stock_status = getValues("stock_status");
      // const user_name = getValues("user_name");
      // const user_email = getValues("user_email");

      // const item = {
      //    image,
      //    item_name,
      //    subcategory_Name,
      //    short_description,
      //    price,
      //    rating,
      //    customization,
      //    processing_time,
      //    stock_status,
      //    user_name,
      //    user_email,
      // };
   };

   return (
      <div className="min-h-[calc(100vh-100px)] max-w-[1170px] mx-auto w-[90%] md:w-[82%] flex flex-col items-center justify-center">
         <div className="w-full mx-auto md:max-w-[90%] p-8  ">
            <h1
               className={`text-3xl font-bold text-center tracking-[4px] ${
                  theme === "luxury" ? "text-blue-500" : "text-red-500"
               }`}
            >
               UPDATE ITEM - {updateId}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="my-[60px]">
               <div className="grid md:grid-cols-2 gap-6">
                  {/* image Field */}
                  <div>
                     <label htmlFor="image" className="block ">
                        Item Image
                     </label>
                     <input
                        {...register("image", {
                           required: {
                              value: true,
                              message: "Must provide a photo URL.",
                           },
                        })}
                        type="text"
                        placeholder="Item Image URL"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     />
                     {errors?.image && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.image.message}
                        </span>
                     )}
                  </div>

                  {/* item_name Field */}
                  <div>
                     <label htmlFor="item_name" className="block ">
                        Item Name
                     </label>
                     <input
                        {...register("item_name", {
                           required: {
                              value: true,
                              message: "Must provide a item_name",
                           },
                        })}
                        type="text"
                        placeholder="Item Name"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     />
                     {errors?.item_name && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.item_name.message}
                        </span>
                     )}
                  </div>

                  {/* subcategory_Name Field */}
                  <div>
                     <label htmlFor="subcategory_Name" className="block ">
                        Subcategory Name
                     </label>
                     <select
                        {...register("subcategory_Name", {
                           required: {
                              value: true,
                              message: "Must provide a subcategory_Name",
                           },
                        })}
                        type="text"
                        placeholder="Subcategory Name"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     >
                        <option value=""></option>
                        <option value="Clay-made pottery">
                           Clay-made pottery
                        </option>
                        <option value="Stoneware">Stoneware</option>
                        <option value="Porcelain">Porcelain</option>
                        <option value="Terra Cotta">Terra Cotta</option>
                        <option value="Ceramics & Architectural">
                           Ceramics & Architectural
                        </option>
                        <option value="Home decor pottery">
                           Home decor pottery
                        </option>
                     </select>
                     {errors?.subcategory_Name && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.subcategory_Name.message}
                        </span>
                     )}
                  </div>

                  {/* price Field */}
                  <div>
                     <label htmlFor="price" className="block ">
                        Price
                     </label>
                     <input
                        {...register("price", {
                           required: {
                              value: true,
                              message: "Must provide a price",
                           },
                        })}
                        type="text"
                        placeholder="Price"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     />
                     {errors?.price && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.price.message}
                        </span>
                     )}
                  </div>

                  {/* rating Field */}
                  <div>
                     <label htmlFor="rating" className="block ">
                        Rating
                     </label>
                     <select
                        {...register("rating", {
                           required: {
                              value: true,
                              message: "Must provide a rating",
                           },
                        })}
                        type="text"
                        placeholder="Rating"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     >
                        <option value=""></option>
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1.5">1.5</option>
                        <option value="1">1</option>
                        <option value="0.5">0.5</option>
                     </select>
                     {errors?.rating && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.rating.message}
                        </span>
                     )}
                  </div>

                  {/* customization Field */}
                  <div>
                     <label htmlFor="customization" className="block ">
                        Customization
                     </label>
                     <select
                        {...register("customization", {
                           required: {
                              value: true,
                              message: "Must provide a customization",
                           },
                        })}
                        type="text"
                        placeholder="Customization"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     >
                        <option value=""></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                     </select>
                     {errors?.customization && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.customization.message}
                        </span>
                     )}
                  </div>

                  {/* processing_time Field */}
                  <div>
                     <label htmlFor="processing_time" className="block ">
                        Processing Time
                     </label>
                     <select
                        {...register("processing_time", {
                           required: {
                              value: true,
                              message: "Must provide a processing_time",
                           },
                        })}
                        type="text"
                        placeholder="Processing Time"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     >
                        <option value=""></option>
                        <option value="Upto 7 days">Upto 7 days</option>
                        <option value="Upto 14 days">Upto 14 days</option>
                        <option value="Upto 21 days">Upto 21 days</option>
                        <option value="Upto 28 days">Upto 28 days</option>
                        <option value="Upto 35 days">Upto 35 days</option>
                        <option value="Upto 42 days">Upto 42 days</option>
                        <option value="Upto 49 days">Upto 49 days</option>
                     </select>
                     {errors?.processing_time && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.processing_time.message}
                        </span>
                     )}
                  </div>

                  {/* stock_status Field */}
                  <div>
                     <label htmlFor="stock_status" className="block ">
                        Stock Status
                     </label>
                     <select
                        {...register("stock_status", {
                           required: {
                              value: true,
                              message: "Must provide a stock_status",
                           },
                        })}
                        type="text"
                        placeholder="Stock Status"
                        className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                     >
                        <option value=""></option>
                        <option value="In stock">In Stock</option>
                        <option value="Made to Order">Made to Order</option>
                     </select>
                     {errors?.stock_status && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.stock_status.message}
                        </span>
                     )}
                  </div>
               </div>

               {/* short_description Field */}
               <div className="my-6">
                  <label htmlFor="short_description" className="block ">
                     Short Item Description
                  </label>
                  <textarea
                     {...register("short_description", {
                        required: {
                           value: true,
                           message: "Must provide a short_description",
                        },
                     })}
                     type="text"
                     placeholder="Short Description"
                     className="w-full p-3 border-b border-b-gray-300  outline-none duration-300 focus:border-[#A65F3F] "
                  />
                  {errors?.short_description && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.short_description.message}
                     </span>
                  )}
               </div>

               <div className="text-center mt-6">
                  <button className="  relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]">
                     <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                     <span className="relative w-full text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white text-center">
                        UPDATE ITEM
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default UpdateItemPage;
