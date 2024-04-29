// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "./TestimonialsSection.css";

const TestimonialsSection = () => {
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%]">
         <Swiper
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            {/* https://i.ibb.co/PZNzgD2/kevin.jpg
https://i.ibb.co/VCx6Y9F/negarin.jpg
https://i.ibb.co/1rtd4xJ/zech.jpg */}

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full  mx-auto">
               <div className="flex flex-col mx-auto max-w-sm my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Excellent service from Potteria. Timely delivery as
                        promised.
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="absolute right-0 w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-brownPrimary dark:text-gray-50">
                     <img
                        src="https://i.ibb.co/PZNzgD2/kevin.jpg"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                     />
                     <h5 className="text-xl font-semibold leading-tight uppercase">
                        Leroy Jenkins
                     </h5>
                     <p className="text-sm uppercase">CEO of Petra Chemicals</p>
                  </div>
               </div>
            </SwiperSlide>

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full  mx-auto">
               <div className="flex flex-col mx-auto max-w-sm my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Excellent service from Potteria. Quality delivered as
                        promised.
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="absolute right-0 w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-brownPrimary dark:text-gray-50">
                     <img
                        src="https://i.ibb.co/VCx6Y9F/negarin.jpg"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                     />
                     <h5 className="text-xl font-semibold leading-tight uppercase">
                        Emily Smith
                     </h5>
                     <p className="text-sm uppercase">CEO of Smith Courier</p>
                  </div>
               </div>
            </SwiperSlide>

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full  mx-auto">
               <div className="flex flex-col mx-auto max-w-sm my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Excellent service from Potteria. Best value for money.
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           fill="currentColor"
                           className="absolute right-0 w-8 h-8 dark:text-brownPrimary"
                        >
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-brownPrimary dark:text-gray-50">
                     <img
                        src="https://i.ibb.co/1rtd4xJ/zech.jpg"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                     />
                     <h5 className="text-xl font-semibold leading-tight uppercase">
                        David Johnson
                     </h5>
                     <p className="text-sm uppercase">Web Developer</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default TestimonialsSection;
