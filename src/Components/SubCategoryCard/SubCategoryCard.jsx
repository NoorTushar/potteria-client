import { Link } from "react-router-dom";
import "./SubCategoryCard.css";

const SubCategoryCard = ({ item }) => {
   const { sub_name, sub_image } = item;
   return (
      <div className="relative">
         <figure className="">
            <img src={sub_image} alt={sub_name} />
         </figure>
         <div className="absolute inset-0 flex justify-center items-center ">
            <div className="w-[40%] text-center bg-brownPrimary bg-opacity-80 cursor-pointer">
               <button className="py-3 text-white">
                  <Link>{sub_name}</Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubCategoryCard;
