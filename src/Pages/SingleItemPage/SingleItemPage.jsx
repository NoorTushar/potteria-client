import axios from "axios";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const SingleItemPage = () => {
   const [itemLoading, setItemLoading] = useState(true);
   const [singleItem, setSingleItem] = useState({});

   const {
      image,
      item_name,
      price,
      subcategory_Name,
      short_description,
      rating,
      customization,
      processing_time,
      stock_status,
   } = singleItem;

   // getting id from the URL
   const params = useParams();
   const requestId = params.id;

   // using axios (2) to get a single item
   useEffect(() => {
      axios
         .get(`https://potteria-server.vercel.app/items/${requestId}`)
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
      <div className="max-w-[1170px] mx-auto w-[90%] md:w-[82%]">
         {/* grid container */}
         <div className=" grid lg:grid-cols-7 gap-10 mt-[60px]">
            {/* img */}
            <div className="border border-bg-brownPrimary lg:col-span-4">
               <img src={image} alt={item_name} />
            </div>
            {/* details */}
            <div className="lg:col-span-3">
               <h2 className="uppercase text-brownPrimary text-[35px] font-medium tracking-[5.8px] -mt-3">
                  {item_name}
               </h2>
               <p className="text-[#58595b] capitalize leading-[25px] font-light my-2">
                  Rating: {rating}
               </p>
               <h4 className="uppercase text-brownPrimary text-[23px] font-medium     tracking-[3.8px]">
                  ${price.toFixed(2)}
               </h4>

               <div className="*:mb-3 mt-6">
                  {/* stock status */}
                  <div className="flex items-center gap-2">
                     <h3 className="uppercase text-[17px] tracking-[2.8px] font-medium text-brownPrimary ">
                        in stock:{" "}
                     </h3>
                     <p className="text-[#58595b] capitalize leading-[25px] font-light">
                        {stock_status}
                     </p>
                  </div>
                  {/* subcategory */}
                  <div className="flex items-center gap-2">
                     <h3 className="uppercase text-[17px] tracking-[2.8px] font-medium text-brownPrimary ">
                        category:{" "}
                     </h3>
                     <p className="text-[#58595b] capitalize leading-[25px] font-light">
                        {subcategory_Name}
                     </p>
                  </div>

                  {/* customization */}
                  <div className="flex items-center gap-2">
                     <h3 className="uppercase text-[17px] tracking-[2.8px] font-medium text-brownPrimary ">
                        customization:{" "}
                     </h3>
                     <p className="text-[#58595b] capitalize leading-[25px] font-light">
                        {customization}
                     </p>
                  </div>

                  {/* processing */}
                  <div className="flex items-center gap-2">
                     <h3 className="uppercase text-[17px] tracking-[2.8px] font-medium text-brownPrimary ">
                        processing time:{" "}
                     </h3>
                     <p className="text-[#58595b] capitalize leading-[25px] font-light">
                        {processing_time}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* bottom short description section */}
         <div className="mt-6">
            <p className="text-brownPrimary tracking-[1.2px] w-min uppercase border-b border-b-amber-800 py-2">
               description
            </p>
            <p className="text-[#58595b] leading-[25px] font-light my-3">
               {short_description}
            </p>
         </div>
      </div>
   );
};

export default SingleItemPage;
