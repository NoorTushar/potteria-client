import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import ItemCard from "../ItemCard/ItemCard";
import axios from "axios";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";

const SubCategorySection = () => {
   const [itemLoading, setItemLoading] = useState(true);
   const [allItems, setAllItems] = useState([]);

   useEffect(() => {
      axios
         .get("http://localhost:3000/subCategories")
         .then((data) => {
            setItemLoading(false);
            setAllItems(data.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   if (itemLoading) {
      return (
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
      );
   }

   return (
      <div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {allItems.slice(0, 6).map((item) => {
               return (
                  <SubCategoryCard item={item} key={item._id}></SubCategoryCard>
               );
            })}
         </div>
      </div>
   );
};

export default SubCategorySection;
