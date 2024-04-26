import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import ItemCard from "../ItemCard/ItemCard";

const ItemsSection = () => {
   const [itemLoading, setItemLoading] = useState(true);
   const [allItems, setAllItems] = useState([]);

   console.log(allItems);

   useEffect(() => {
      fetch("http://localhost:3000/items")
         .then((res) => res.json())
         .then((data) => {
            setItemLoading(false);
            setAllItems(data);
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
         <h3>Items: {allItems.length}</h3>

         {allItems.slice(0, 6).map((item) => {
            return <ItemCard key={item._id}></ItemCard>;
         })}
      </div>
   );
};

export default ItemsSection;
