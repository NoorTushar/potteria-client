import { Cursor, useTypewriter } from "react-simple-typewriter";
// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from "swiper/react";
// import styles bundle
import "swiper/css/bundle";
// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

import "./Banner.css";

const Banner = () => {
   const [text] = useTypewriter({
      words: ["Ceramics", "Pottery"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className="mySwiper"
         >
            <SwiperSlide>
               {/* // banner item - 1 */}

               <div
                  className="hero min-h-[calc(100vh-72px)]"
                  style={{
                     backgroundImage:
                        "url(https://i.ibb.co/Z6KMQ0t/clay-made-1.jpg)",
                  }}
               >
                  <div className="hero-overlay bg-black bg-opacity-60"></div>
                  <div className="hero-content px-10 max-w-3xl  text-center text-neutral-content">
                     <div className="">
                        <h2 className="text-4xl leading-[44px] lg:text-[56px] lg:leading-[60px] font-medium tracking-[5.7px] uppercase  ">
                           Exploring the Art of <span>{text}</span>{" "}
                           <span>
                              <Cursor cursorStyle="~"></Cursor>
                           </span>{" "}
                        </h2>
                        <p className="mb-5 mt-3">
                           Welcome to a world where creativity takes shape,
                           where clay transforms into timeless artistry.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {/* // banner item - 2 */}

               <div
                  className="hero min-h-[calc(100vh-72px)]"
                  style={{
                     backgroundImage:
                        "url(https://i.ibb.co/xzjZMgw/porcelain-4.jpg)",
                  }}
               >
                  <div className="hero-overlay bg-black bg-opacity-60"></div>
                  <div className="hero-content px-10 max-w-3xl  text-center text-neutral-content">
                     <div className="">
                        <h2 className="text-4xl leading-[44px] lg:text-[56px] lg:leading-[60px] font-medium tracking-[5.7px] uppercase  ">
                           Exploring the Art of <span>{text}</span>{" "}
                           <span>
                              <Cursor cursorStyle="~"></Cursor>
                           </span>{" "}
                        </h2>
                        <p className="mb-5 mt-3">
                           Welcome to a world where creativity takes shape,
                           where clay transforms into timeless artistry.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {/* // banner item - 3 */}
               <div
                  className="hero min-h-[calc(100vh-72px)]"
                  style={{
                     backgroundImage:
                        "url(https://i.ibb.co/qrjpBDw/stoneware-3.jpg",
                  }}
               >
                  <div className="hero-overlay bg-black bg-opacity-60"></div>
                  <div className="hero-content px-10 max-w-3xl  text-center text-neutral-content">
                     <div className="">
                        <h2 className="text-4xl leading-[44px] lg:text-[56px] lg:leading-[60px] font-medium tracking-[5.7px] uppercase  ">
                           Exploring the Art of <span>{text}</span>{" "}
                           <span>
                              <Cursor cursorStyle="~"></Cursor>
                           </span>{" "}
                        </h2>
                        <p className="mb-5 mt-3">
                           Welcome to a world where creativity takes shape,
                           where clay transforms into timeless artistry.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Banner;
