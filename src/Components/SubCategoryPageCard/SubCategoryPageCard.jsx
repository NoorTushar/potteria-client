import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubCategoryPageCard = ({ item }) => {
   const {
      _id,
      image,
      short_description,
      item_name,
      price,
      rating,
      customization,
      stock_status,
      processing_time,
      subcategory_Name,
   } = item;
   return (
      <div className="card bg-base-100 border border-[#A65F3F] rounded-none">
         <figure className="relative">
            <img
               className="hover:scale-110 object-cover duration-300 h-[320px] w-full"
               src={image}
               alt={item_name}
            />
            <p className=" uppercase   absolute  top-0 right-0 p-2 bg-brownPrimary bg-opacity-80 text-white tracking-widest font-bold">
               <span className="font-semibold">Price:</span> ${price.toFixed(2)}
            </p>

            <p className=" uppercase   absolute  bottom-0 left-0 p-2 bg-brownPrimary bg-opacity-80 text-white tracking-widest font-bold">
               <span className="font-semibold">Rating:</span> {rating}
            </p>
         </figure>
         <div className="card-body p-5">
            <h2 className="card-title uppercase tracking-[3px] text-brownPrimary  text-[22px] ">
               {item_name}
            </h2>

            <p className="text-[#58595b] capitalize  font-light">
               {`${short_description.slice(0, 200)}...`}
            </p>

            <p className="text-[#58595b] capitalize  font-light ">
               <span className="font-semibold">Category:</span>{" "}
               {subcategory_Name}
            </p>

            <p className="text-[#58595b] capitalize  font-light  ">
               <span className="font-semibold">Stock Status:</span>{" "}
               {stock_status}
            </p>

            <p className="text-[#58595b] capitalize  font-light">
               <span className="text-base font-semibold">Customization:</span>{" "}
               {customization}
            </p>

            <p className="text-[#58595b] capitalize  font-light  ">
               <span className="font-semibold">Processing Time:</span>{" "}
               {processing_time}
            </p>

            {/* Buttons */}
            <div className="card-actions justify-between mt-1">
               <div className="mt-3 text-center">
                  <Link
                     to={`/itemDetails/${_id}`}
                     className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-brownPrimary  hover:bg-white group border-2 border-[#a65f3f] text-[13px] tracking-[1.2px]"
                  >
                     <span className="w-48 h-48 rounded rotate-[-40deg] bg-white  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                     <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-brownPrimary">
                        VIEW DETAILS
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

SubCategoryPageCard.propTypes = {
   item: PropTypes.object.isRequired,
};

export default SubCategoryPageCard;
