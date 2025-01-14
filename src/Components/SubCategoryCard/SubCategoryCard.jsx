import { Link } from "react-router-dom";
import "./SubCategoryCard.css";

const SubCategoryCard = ({ item }) => {
   const { sub_name, sub_image } = item;
   return (
      <div className="relative sub-card">
         <figure className="overflow-hidden">
            <img className="sub-image" src={sub_image} alt={sub_name} />
         </figure>
         <div className="absolute inset-0 flex justify-center items-center ">
            <Link
               to={`/subCategory/${sub_name}`}
               className="w-[50%] text-center bg-brownPrimary bg-opacity-80 cursor-pointer"
            >
               <button className="py-3 text-white uppercase font-Alegreya tracking-[2px] break-words">
                  {sub_name}
               </button>
            </Link>
         </div>
      </div>
   );
};

export default SubCategoryCard;
