import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyItems = () => {
   const [loadedItems, setLoadedItems] = useState();
   const [toggle, setToggle] = useState(true);

   const params = useParams();
   const emailId = params.email;

   useEffect(() => {
      fetch(`http://localhost:3000/myItems/${emailId}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setLoadedItems(data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div>
         <h3 className="uppercase">Items of {emailId}</h3>
      </div>
   );
};

export default MyItems;
