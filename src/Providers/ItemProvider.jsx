// import { createContext, useEffect, useState } from "react";

// export const ItemContext = createContext(null);

// const ItemProvider = ({ children }) => {
//    const [itemLoading, setItemLoading] = useState(true);

//    useEffect(() => {
//       fetch("https://potteria-server.vercel.app/items")
//          .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//          });
//    }, []);

//    const allItems = "hello";
//    return (
//       <ItemContext.Provider value={allItems}>{children}</ItemContext.Provider>
//    );
// };

// export default ItemProvider;
