import { Cursor, useTypewriter } from "react-simple-typewriter";
import ItemsSection from "../../Components/ItemsSection/ItemsSection";
import SubCategorySection from "../../Components/SubCategorySection/SubCategorySection";
import Banner from "../../Components/Banner/Banner";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import WhyUs from "../../Components/WhyUs/WhyUs";
import CounterSection from "../../Components/CounterSection/CounterSection";

// lottie files

import BackGroundWave from "../../assets/background-wave.json";
import NewYearLights from "../../assets/animation-new-year.json";
import Lottie from "lottie-react";

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

   const [features] = useTypewriter({
      words: ["Features"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });
   return (
      <div>
         {/* banner */}
         <Banner></Banner>

         {/* Items Section */}
         <section className="mx-auto max-w-[1170px] md:w-[82%] w-[90%] py-[70px] md:py-[90px] lg:py-[100px] relative">
            <div className="w-full absolute top-0 -z-40">
               <Lottie loop={true} animationData={NewYearLights}></Lottie>
            </div>
            {/* section title */}
            <div className="text-center space-y-3 mb-[50px] md:mb-[70px] lg:mb-[80px]">
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
         <section className="py-[50px] md:py-[70px] lg:py-[80px] ">
            {/* section title */}
            <div className="text-center space-y-3 mb-[50px] md:mb-[70px] lg:mb-[80px]">
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
         <section className="relative overflow-hidden">
            {/* <div className="w-full my-6 absolute -z-50 top-0 left-0">
               <Lottie loop={true} animationData={BackGroundWave}></Lottie>
            </div> */}
            {/* section title */}
            <div className="text-center space-y-3 mb-[50px] md:mb-[70px] lg:mb-[80px]">
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
         <section className="py-[70px] md:py-[90px] lg:py-[100px]">
            {/* section title */}
            <div className="text-center space-y-3 mb-[50px] md:mb-[70px] lg:mb-[80px]">
               <h2 className="text-[35px] font-medium tracking-[5.7px] uppercase leading-[43.05px] text-brownPrimary">
                  why us
               </h2>
               <p className="capitalize italic font-light tracking-[0.5px] text-[17px] text-brownPrimary">
                  our strong <span>{features}</span>{" "}
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
               </p>
            </div>
            <WhyUs></WhyUs>
         </section>
      </div>
   );
};

export default Home;
