import ItemsSection from "../../Components/ItemsSection/ItemsSection";

const Home = () => {
   return (
      <div>
         <h3 className="text-2xl text-center">Banner Section Coming Soon</h3>

         {/* Items Section */}
         <div>
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  most popular products
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  bestselling
               </p>
            </div>
            <ItemsSection></ItemsSection>
         </div>
      </div>
   );
};

export default Home;
