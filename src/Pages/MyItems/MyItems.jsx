import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import MyItemCard from "../../Components/MyItemCard/MyItemCard";
import { Triangle } from "react-loader-spinner";
import PageTopWaveAnimation from "../../../public/PageTopWaveAnimation.json";

export const ItemProvider = createContext(null);

// lottie files

import NewYearLights from "../../assets/animation-new-year.json";
import Lottie from "lottie-react";

const MyItems = () => {
   const { theme } = useContext(AuthContext);
   const [loadedItems, setLoadedItems] = useState([]);
   const [filteredItems, setFilteredItems] = useState([]);
   const [toggle, setToggle] = useState(true);
   const [itemLoading, setItemLoading] = useState(true);
   const params = useParams();
   const emailId = params.email;
   const { user } = useContext(AuthContext);
   useEffect(() => {
      fetch(`http://localhost:3000/myItems/${emailId}`)
         .then((res) => res.json())
         .then((data) => {
            setLoadedItems(data);
            setItemLoading(false);
         })
         .catch((err) => console.log(err));
   }, [toggle]);

   // Update filteredItems whenever loadedItems changes
   useEffect(() => {
      setFilteredItems(loadedItems);
   }, [loadedItems]);

   // here if anyone tries to access data of others by
   // changing url while logged in, he will be redirected
   // to home page with a warning.
   if (user.email !== emailId) {
      Swal.fire({
         title: "WARNING!",
         text: "You are trying to access other's data",
         icon: "warning",
         confirmButtonText: "Sorry",
      });
      return <Navigate to={"/"} />;
   }

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

   const handleFilterCustomization = (e) => {
      const selectedOption = e.target.value;
      console.log(selectedOption);
      if (selectedOption === "yes") {
         const filteredArray = loadedItems.filter(
            (item) => item.customization === "yes"
         );
         setFilteredItems(filteredArray);
      } else if (selectedOption === "no") {
         const filteredArray = loadedItems.filter(
            (item) => item.customization === "no"
         );
         setFilteredItems(filteredArray);
      } else if (selectedOption === "any") {
         const filteredArray = loadedItems;
         setFilteredItems(filteredArray);
      }
   };

   const itemContextValues = { toggle, setToggle };

   console.log(filteredItems);
   return (
      <ItemProvider.Provider value={itemContextValues}>
         <div className="max-w-[1170px] mx-auto w-[90%] md:w-[82%]">
            <div className="relative w-full overflow-hidden ">
               <h1
                  className={`text-3xl font-bold text-center tracking-[4px] ${
                     theme === "luxury"
                        ? "text-yellow-600"
                        : "text-brownPrimary"
                  } py-[60px] lg:py-[100px]`}
               >
                  MY ITEMS
               </h1>
               <div className="w-full absolute top-0 -z-40">
                  <Lottie loop={true} animationData={NewYearLights}></Lottie>
               </div>
            </div>

            {/* Filter option for customization */}
            <div className="mb-6">
               <h3 className="text-2xl">Filter: </h3>
               <form>
                  <div className="">
                     <label htmlFor="customization" className="mr-2">
                        Customization
                     </label>
                     <select
                        onChange={(e) => handleFilterCustomization(e)}
                        name="customization"
                        id=""
                        className="border w-[200px] p-2"
                     >
                        <option value="any">Any</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                     </select>
                  </div>
               </form>
            </div>

            {/* item gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-[60px]">
               {filteredItems.map((item) => {
                  return <MyItemCard item={item} key={item._id}></MyItemCard>;
               })}
            </div>
         </div>
      </ItemProvider.Provider>
   );
};

export default MyItems;
