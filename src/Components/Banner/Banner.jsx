import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
   const [text] = useTypewriter({
      words: ["Popular", "Famous"],
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
   });
   return (
      <div
         className="hero min-h-screen"
         style={{
            backgroundImage: "url(https://i.ibb.co/Z6KMQ0t/clay-made-1.jpg)",
         }}
      >
         <div className="hero-overlay bg-black bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="">
               <h2 className="text-[60px] font-medium tracking-[5.7px] uppercase leading-[43.05px] ">
                  most <span>{text}</span>{" "}
                  <span>
                     <Cursor cursorStyle=""></Cursor>
                  </span>{" "}
                  products
               </h2>
               <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
               </p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
