import { useParams } from "react-router-dom";

const MyItems = () => {
   const params = useParams();
   const emailId = params.email;
   console.log(emailId);
   return (
      <div>
         <h3 className="uppercase">Items of {emailId}</h3>
      </div>
   );
};

export default MyItems;
