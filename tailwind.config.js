/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Lato: `"Lato", sans-serif;`,
            Alegreya: `"Alegreya", serif`,
         },
         textColor: {
            brownPrimary: "#A65F3F",
         },
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "coffee", "luxury"],
   },
};
