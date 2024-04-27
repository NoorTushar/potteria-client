import axios from "axios";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Items = () => {
   const [itemLoading, setItemLoading] = useState(true);
   const [allItems, setAllItems] = useState({});

   // {
   //       image,
   //       item_name,
   //       subcategory_Name,
   //       short_description,
   //       price,
   //       rating,
   //       customization,
   //       processing_time,
   //       stock_status,
   //       user_name,
   //       user_email
   //    } = allItems

   // using axios (2) to get a single item
   useEffect(() => {
      axios
         .get(`http://localhost:3000/items`)
         .then((data) => {
            console.log(data.data);
            setAllItems(data.data);
            setItemLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   // show loader till the data gets loaded
   if (itemLoading) {
      return (
         <div className="py-10">
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  all items
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  at a glance
               </p>
            </div>
            <div className="min-h-[400px] flex items-center justify-center">
               <Triangle
                  visible={true}
                  height="80"
                  width="80"
                  color="#8E6D45"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
               />
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-[calc(100vh-74px)] py-10  max-w-[1170px] mx-auto w-[90%] md:w-[82%]">
         {/* section title */}
         <div className="text-center space-y-3">
            <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
               all items
            </h2>
            <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
               at a glance
            </p>
         </div>

         {/* table */}
         <div className="overflow-x-auto mt-10">
            <table className="table table-zebra">
               {/* head */}
               <thead>
                  <tr>
                     <th>Sl.No</th>
                     <th>Name</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th>Rating</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {allItems.map((item, index) => {
                     return (
                        <tr key={item._id}>
                           <th>{index + 1}</th>
                           <td>{item.item_name}</td>
                           <td>{item.subcategory_Name}</td>
                           <td>${item.price.toFixed(2)}</td>
                           <td>{item.rating.toFixed(2)}</td>
                           <td>
                              <Link
                                 to={`/itemDetails/${item._id}`}
                                 className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white  hover:bg-white group border-2 border-[#a65f3f] text-[14px] tracking-[1.2px]"
                              >
                                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#a65f3f]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                 <span className="relative w-full text-[#a65f3f] transition-colors duration-300 ease-in-out group-hover:text-white text-center">
                                    VIEW DETAILS
                                 </span>
                              </Link>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Items;
