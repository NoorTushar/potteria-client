import { RxScissors } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { PiPottedPlant } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";

const WhyUs = () => {
   return (
      <div className="grid lg:grid-cols-2 border-2">
         <figure className="">
            <img
               className="object-cover h-full"
               src="https://i.ibb.co/RQQZ7V8/home-decor-3.jpg"
               alt="women with flowers"
            />
         </figure>
         <div className="grid md:grid-cols-2 border-2  gap-4">
            {/* item */}
            <div className="group space-y-2 border-2 p-6">
               <div>
                  <RxScissors className="font-light text-4xl  group-hover:-rotate-[360deg] duration-500"></RxScissors>
               </div>
               <h3 className="uppercase text-brownPrimary text-[19px] font-medium tracking-[2.6px]">
                  new ideas
               </h3>
               <p className="font-light leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque perferendis quia nulla soluta laborum iusto
                  recusandae dolores, est exercitationem sit.
               </p>
            </div>

            {/* item */}
            <div className="group space-y-2 border-2 p-6">
               <div>
                  <GoHeart className="font-light text-4xl  group-hover:-rotate-[360deg] duration-500"></GoHeart>
               </div>
               <h3 className="uppercase text-brownPrimary text-[19px] font-medium tracking-[2.6px]">
                  passion driven
               </h3>
               <p className="font-light leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque perferendis quia nulla soluta laborum iusto
                  recusandae dolores, est exercitationem sit.
               </p>
            </div>

            {/* item */}
            <div className="group space-y-2 border-2 p-6">
               <div>
                  <PiPottedPlant className="font-light text-4xl  group-hover:-rotate-[360deg] duration-500"></PiPottedPlant>
               </div>
               <h3 className="uppercase text-brownPrimary text-[19px] font-medium tracking-[2.6px]">
                  handmade
               </h3>
               <p className="font-light leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque perferendis quia nulla soluta laborum iusto
                  recusandae dolores, est exercitationem sit.
               </p>
            </div>

            {/* item */}
            <div className="group space-y-2 border-2 p-6">
               <div>
                  <TbHeartHandshake className="font-light text-4xl  group-hover:-rotate-[360deg] duration-500"></TbHeartHandshake>
               </div>
               <h3 className="uppercase text-brownPrimary text-[19px] font-medium tracking-[2.6px]">
                  committed
               </h3>
               <p className="font-light leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque perferendis quia nulla soluta laborum iusto
                  recusandae dolores, est exercitationem sit.
               </p>
            </div>
         </div>
      </div>
   );
};

export default WhyUs;
