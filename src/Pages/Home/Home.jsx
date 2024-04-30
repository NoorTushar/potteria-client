import { Cursor, useTypewriter } from "react-simple-typewriter";
import ItemsSection from "../../Components/ItemsSection/ItemsSection";
import SubCategorySection from "../../Components/SubCategorySection/SubCategorySection";
import Banner from "../../Components/Banner/Banner";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import WhyUs from "../../Components/WhyUs/WhyUs";
import CounterSection from "../../Components/CounterSection/CounterSection";

const Home = () => {
   const [text] = useTypewriter({
      words: ["Popular", "Famous"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });
   const [subcategory] = useTypewriter({
      words: ["Categories"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });

   const [client] = useTypewriter({
      words: ["Clients"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });
   return (
      <div>
         {/* banner */}
         <Banner></Banner>

         {/* Items Section */}
         <section>
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  bestselling
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  most <span>{text}</span>{" "}
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
                  products
               </p>
            </div>
            <ItemsSection></ItemsSection>
         </section>

         {/* Items Section */}
         <section>
            <CounterSection></CounterSection>
         </section>

         {/* SubCategories Section */}
         <section>
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  categories
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  browse by sub<span>{subcategory}</span>{" "}
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
               </p>
            </div>
            <SubCategorySection></SubCategorySection>
         </section>

         {/* Testimonials Section */}
         <section>
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  testimonials
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  what our <span>{client}</span> say
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
               </p>
            </div>
            <TestimonialsSection></TestimonialsSection>
         </section>

         {/* Why Us Section */}
         <section>
            {/* section title */}
            <div className="text-center space-y-3">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  our <span>{client}</span>{" "}
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  testimonials
               </p>
            </div>
            <WhyUs></WhyUs>
         </section>
      </div>
   );
};

export default Home;
