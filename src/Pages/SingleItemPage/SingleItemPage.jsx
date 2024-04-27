import axios from "axios";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const SingleItemPage = () => {
   const [itemLoading, setItemLoading] = useState(true);
   const [singleItem, setSingleItem] = useState({});

   const {
      _id,
      image,
      item_name,
      price,
      subcategory_Name,
      short_description,
      rating,
      customization,
      processing_time,
      stock_status,
      user_email,
      user_name,
   } = singleItem;

   // getting id from the URL
   const params = useParams();
   const requestId = params.id;

   // using axios (2) to get a single item
   useEffect(() => {
      axios
         .get(`http://localhost:3000/items/${requestId}`)
         .then((data) => {
            console.log(data.data);
            setSingleItem(data.data);
            setItemLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   // show loader till the data gets loaded
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
         <h3>Single Item Page for id: {requestId}</h3>
         <p>From mongo data id: {_id}</p>
      </div>
   );
};

export default SingleItemPage;
