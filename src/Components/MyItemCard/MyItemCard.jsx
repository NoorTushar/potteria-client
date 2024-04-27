import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyItemCard = ({ item }) => {
   const {
      image,
      item_name,
      subcategory_Name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_name,
      user_email,
   } = item;
   return (
      <div className="card bg-base-100 shadow-xl rounded-none">
         <figure>
            <img
               className="hover:scale-110 object-cover duration-300 h-[320px] w-full"
               src={image}
               alt={item_name}
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title uppercase tracking-[3px] text-brownPrimary  text-[22px] ">
               {item_name}
            </h2>

            <div className="lg:flex justify-between space-y-2 lg:space-y-0">
               <p className="text-[#58595b] capitalize leading-[25px] font-light">
                  <span className="font-semibold">Price:</span> $
                  {price.toFixed(2)}
               </p>
               <p className="text-[#58595b] capitalize leading-[25px] font-light lg:text-end ">
                  <span className="font-semibold">Stock Status:</span>{" "}
                  {stock_status}
               </p>
            </div>

            <div className="lg:flex justify-between space-y-2 lg:space-y-0   flex-grow">
               <p className="text-[#58595b] capitalize leading-[25px] font-light">
                  <span className="text-base font-semibold">
                     Customization:
                  </span>{" "}
                  {customization}
               </p>
               <p className="text-[#58595b] capitalize leading-[25px] font-light lg:text-end ">
                  <span className="font-semibold">Rating:</span> {rating}
               </p>
            </div>

            {/* Buttons */}
            <div className="card-actions justify-between mt-1">
               <div className="mt-3 text-center">
                  <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-brownPrimary  hover:bg-white group border-2 border-[#a65f3f] text-[13px] tracking-[1.2px]">
                     <span className="w-48 h-48 rounded rotate-[-40deg] bg-white  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                     <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-brownPrimary">
                        UPDATE
                     </span>
                  </button>
               </div>
               <div className="mt-3 text-center">
                  <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-brownPrimary  hover:bg-white group border-2 border-[#a65f3f] text-[13px] tracking-[1.2px]">
                     <span className="w-48 h-48 rounded rotate-[-40deg] bg-white  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                     <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-brownPrimary">
                        DELETE
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

MyItemCard.propTypes = {
   item: PropTypes.object.isRequired,
};

export default MyItemCard;
