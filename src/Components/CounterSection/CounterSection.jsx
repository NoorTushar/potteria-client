import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CounterSection = () => {
   const [isVisible, setIsVisible] = useState(false);
   const counterRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsVisible(entry.isIntersecting);
         },
         {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Change this threshold as per your requirement
         }
      );

      if (counterRef.current) {
         observer.observe(counterRef.current);
      }

      return () => {
         if (counterRef.current) {
            observer.unobserve(counterRef.current);
         }
      };
   }, []);

   return (
      <div
         ref={counterRef}
         style={{
            backgroundImage: "url(https://i.ibb.co/v1wf5VC/background.jpg)",
         }}
         className="text-white min-h-[200px] bg-fixed grid grid-cols-2 sm:grid-cols-4 justify-center items-center *:text-center"
      >
         {/* items sold */}
         <div>
            {isVisible && (
               <CountUp
                  className="font-Alegreya text-4xl lg:text-6xl"
                  start={0}
                  end={2345}
                  duration={3}
               />
            )}
            <p className="font-light capitalize mt-2">items sold</p>
         </div>

         {/* happy customers */}
         <div>
            {isVisible && (
               <CountUp
                  className="font-Alegreya text-4xl lg:text-6xl"
                  start={0}
                  end={547}
                  duration={3}
               />
            )}
            <p className="font-light capitalize mt-2">happy customers</p>
         </div>

         {/* unique products */}
         <div>
            {isVisible && (
               <CountUp
                  className="font-Alegreya text-4xl lg:text-6xl"
                  start={0}
                  end={1283}
                  duration={3}
               />
            )}
            <p className="font-light capitalize mt-2">unique products</p>
         </div>

         {/* media reviews */}
         <div>
            {isVisible && (
               <CountUp
                  className="font-Alegreya text-4xl lg:text-6xl"
                  start={0}
                  end={331}
                  duration={3}
               />
            )}
            <p className="font-light capitalize mt-2">media reviews</p>
         </div>
      </div>
   );
};

export default CounterSection;
