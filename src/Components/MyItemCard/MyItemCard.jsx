import axios from "axios";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ItemProvider } from "../../Pages/MyItems/MyItems";

const MyItemCard = ({ item }) => {
   // brought from its parent component so that when
   // we delete something, we toggle the delete and
   // it will render the fetching on its parent component
   // in this way the page will render will latest data.

   const { toggle, setToggle } = useContext(ItemProvider);

   const {
      _id,
      image,
      item_name,
      price,
      rating,
      customization,
      stock_status,
      user_name,
      user_email,
   } = item;

   // deleting an item
   const handleDeleteItem = (itemId) => {
      console.log(itemId);

      // confirmation before deleting an item
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            // if we have have confirmed to press DELETE button
            axios
               .delete(`http://localhost:3000/items/${itemId}`)
               .then((response) => {
                  if (response.data.deletedCount > 0) {
                     console.log(response.data);
                     Swal.fire({
                        title: "Success!",
                        text: "Item deleted!",
                        icon: "success",

                        confirmButtonText: "Ok",
                     });

                     // here we are toggling the toggle to render the
                     // data fetching on its parent component
                     setToggle(!toggle);
                  }
               })
               // if we have any errors while deleting:
               .catch((error) => {
                  const message = error.message;

                  Swal.fire({
                     title: "Error!",
                     text: `${message}`,
                     icon: "error",
                     confirmButtonText: "Ok",
                  });
               });
         }
      });
   };

   return (
      <div className="card bg-base-100 border border-[#A65F3F] rounded-none">
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
               <div
                  onClick={() => handleDeleteItem(_id)}
                  className="mt-3 text-center"
               >
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
