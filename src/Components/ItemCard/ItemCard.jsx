import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
   const { _id, image, item_name, price, subcategory_Name } = item;
   return (
      <div className="py-2">
         <div>
            <img src={image} alt={item_name} className="w-full object-cover" />
         </div>
         <div className="mt-3 text-center">
            <h3 className="text-brownPrimary text-[19px] font-medium tracking-[3.1px] uppercase mb-1">
               {item_name}
            </h3>
            <p className=" text-[#58595B] capitalize">{subcategory_Name}</p>
            <h5 className="text-brownPrimary tracking-[2.8px] font-medium text-[17px]">
               ${Number(price).toFixed(2)}
            </h5>
         </div>

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
   );
};

ItemCard.propTypes = {
   item: PropTypes.object.isRequired,
};

export default ItemCard;
