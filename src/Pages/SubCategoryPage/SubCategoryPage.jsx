import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Cursor } from "react-simple-typewriter";

const SubCategoryPage = () => {
   const categoryData = useLoaderData();

   const params = useParams();
   const searchCategory = params.sub_name;
   console.log(searchCategory);

   useEffect(() => {
      fetch(`http://localhost:3000/subcategories/${searchCategory}/items`)
         .then((res) => res.json())
         .then((data) => console.log(data))
         .catch((err) => console.error(err));
   }, []);

   return (
      <section className="mx-auto max-w-[1170px] w-[90%] md:w-[82%]">
         {/* Category wise item gallery */}
         {/* section title */}
         <div className="text-center space-y-3">
            <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
               Products
            </h2>
            <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
               {categoryData.sub_name}
            </p>
         </div>

         {/* section title */}
         <div className="text-center space-y-3">
            <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
               about {categoryData.sub_name}
            </h2>
            <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
               origin: {categoryData.sub_origin}
            </p>
         </div>

         {/* image and description */}
         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center mt-5">
            <figure className="w-full lg:w-1/3">
               <img src={categoryData.sub_image} alt="" className="w-full" />
            </figure>
            <p className="w-full lg:w-2/3">{categoryData.sub_description}</p>
         </div>
      </section>
   );
};

export default SubCategoryPage;
