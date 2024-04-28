import { FaFacebookF, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer gap-3 md:gap-5 footer-center p-10  text-base-content rounded">
         <div>
            <figure>
               <img className="size-10" src="/public/leaf_icon.png" alt="" />
            </figure>
            <h2 className="font-Alegreya text-2xl md:text-3xl font-light text-brownPrimary tracking-[1.2px]">
               Potteria
            </h2>
         </div>

         <nav>
            <div className="grid grid-flow-col gap-4">
               {/* facebook */}
               <a
                  href="https://www.facebook.com/NoorTusharKhan/"
                  target="_blank"
                  className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer duration-300 hover:bg-[#A65F3F] hover:text-black"
               >
                  <FaFacebookF className="text-ourAsh text-sm"></FaFacebookF>
               </a>

               {/* linkedin */}
               <a
                  href="https://www.linkedin.com/in/noortushar/"
                  target="_blank"
                  className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer duration-300 hover:bg-[#A65F3F] hover:text-black"
               >
                  <FaLinkedin className="text-ourAsh text-lg"></FaLinkedin>
               </a>

               {/* github */}
               <a
                  href="https://github.com/NoorTushar"
                  target="_blank"
                  className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer duration-300 hover:bg-[#A65F3F] hover:text-black"
               >
                  <FaGithub className="text-ourAsh text-lg"></FaGithub>
               </a>

               {/* twitter */}
               <a
                  href="https://twitter.com/NoorTusharKhan"
                  target="_blank"
                  className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer duration-300 hover:bg-[#A65F3F] hover:text-black"
               >
                  <FaXTwitter className="text-ourAsh text-base"></FaXTwitter>
               </a>
            </div>
         </nav>

         <aside>
            <p>Address: Eskaton, Dhaka, Bangladesh</p>
            <p>Phone: +8801683021094</p>
            <p>
               Copyright © <span>{new Date().getFullYear()}</span> - All right
               reserved by ACME Industries Ltd
            </p>
            <p>
               Website by{" "}
               <strong>
                  <a href="https://www.facebook.com/NoorTusharKhan/">
                     Noor Tushar Khan
                  </a>
               </strong>
            </p>
         </aside>
      </footer>
   );
};

export default Footer;
