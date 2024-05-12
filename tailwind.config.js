/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

     // Path to Tremor module
     "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        accent: "#204969",
        third: "#4E6987",
        primary: "#FFFF00",
        fourth: "#D2D9E1",
      },
    },
  },

  plugins: [require("daisyui")],
}

