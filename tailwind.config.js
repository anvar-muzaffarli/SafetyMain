/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        maxWidth: {
          container: "1280px",
          homeContainer: "977px"
        },
        fontWeight: {
          'extra-bold': '900',
        },
        screens: {
          xs: "320px",
          sm: "375px",
          sml: "500px",
          xl: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
          md: "1280px",
        }, 
        fontFamily: {
          firstFont: ["DM Sans", "sans-serif"], 
          secondFont: ["DM Sans", "sans-serif"], 
        }, 
        colors: {
          firstColor: "#0B0B0B",
          secondColor: "#393941",
          thirdColor: "#162D59",
        },
        boxShadow: {
          testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
        },
      },
    },
    plugins: [require("tailwind-scrollbar")],
  };
  