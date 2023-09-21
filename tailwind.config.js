/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundColor: {
        mainBgColor: "#150E28",
      },
      height: {
        device: "87vh",
        100: "450px",
        78: "296px",
        84: "348px",
        200: "600px",
        250: "700px",
      },
      colors: {
        lightPurple: "#903AFF",
        pinkishPurple: "#D434FE",
      },
      fontFamily: {
        monteserrat: ["Montserrat", "sans-serif"],
      },
      width: {
        98: "400px",
        100: "450px",
        110: "500px",
      },
      left: {
        "1/4": "25%",
      },
    },
  },
  plugins: [],
};
