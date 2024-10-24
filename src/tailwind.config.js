/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily : {
        "outfitBold" : "Outfit bold",
        "outfitRegular" : "Outfit light",
      },
      colors : {
        "slate-900" : "#1F314F",
        "slate-500" : "#68778D",
        "slate-300" : "#D5E1EF",
        "white" : "#ffff",
      },
      borderRadius : {
        "s-2xl" : "20px",
      },
      fontSize : {
        "s-2xl" : "22px",
        "s-base" : "15px"
      }
    },
  },
  plugins: [],
}

