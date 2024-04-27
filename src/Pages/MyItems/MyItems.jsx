import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import MyItemCard from "../../Components/MyItemCard/MyItemCard";

export const ItemProvider = createContext(null);

const MyItems = () => {
   const [loadedItems, setLoadedItems] = useState([]);
   const [toggle, setToggle] = useState(true);
   const params = useParams();
   const emailId = params.email;
   const { user } = useContext(AuthContext);

   useEffect(() => {
      fetch(`http://localhost:3000/myItems/${emailId}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setLoadedItems(data);
         })
         .catch((err) => console.log(err));
   }, [toggle]);

   console.log(loadedItems);

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

   const itemContextValues = { toggle, setToggle };
   return (
      <ItemProvider.Provider value={itemContextValues}>
         <div className="max-w-[1170px] mx-auto w-[90%] md:w-[82%]">
            <h3 className="uppercase">Items of {emailId}. Total items:</h3>

            {/* item gallery */}
            <div className="grid md:grid-cols-2 gap-6">
               {loadedItems.map((item) => {
                  return <MyItemCard item={item} key={item._id}></MyItemCard>;
               })}
            </div>
         </div>
      </ItemProvider.Provider>
   );
};

export default MyItems;
