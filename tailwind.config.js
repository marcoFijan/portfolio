/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "668px",
      // => @media (min-width: 640px) { ... }

      md: "832px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        accentColor: "#d4a418",
        CTAColor: "#e745a1",
        bgColorDark: "#12131a",
        bgColorDarkSec: "#282b37",
        bgColorLight: "#e7efff",
        white: "#ffffff",
      },
      boxShadow: {
        ctaButtonHover: "5px 5px 0px #5c1c40, -5px -5px 0px #ff6eff;",
        ctaButton: "0px 0px 10px #5c1c40;",
        buttonHover: "5px 5px 0px #0a0b0c, -5px -5px 0px #5d6583;",
        button: "0px 0px 10px #0a0b0c;",
        inputField: "inset 6px 6px 12px #d5dceb, inset -6px -6px 12px #f9ffff;",
        inputFieldValid: "6px 6px 12px #d5dceb, -6px -6px 12px #f9ffff;",
      },
      padding: {
        articlePadding: "3rem",
        articlePaddingMobile: "1rem",
      },
      margin: {
        "1/2-height": "50vh",
        "3/5-height": "65vh",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      height: {
        "50%": "50vh",
        screenx2: "200vh",
      },

      maxWidth: {
        wrapper: "80rem",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(23em, 1fr));",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        lines: {
          "0%": {
            width: 0,
            height: 0,
            "border-top": "2px solid #d4a418",
            "border-bottom": "2px solid #d4a418",
          },
          "50%": {
            width: "100%",
            height: 0,
            padding: "0",
            "border-top": "2px solid #d4a418",
            "border-bottom": "2px solid #d4a418",
          },
          "90%": {
            width: "100%",
            height: "7.5rem",
            padding: "1rem 0",
            "border-top": "4px solid white",
            "border-bottom": "4px solid white",
          },
          "100%": {
            width: "100%",
            padding: "1rem 0",
            "border-top": "4px solid white",
            "border-bottom": "4px solid white",
          },
        },
        becomeVisible: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        lines: "lines 3s ease-in-out forwards",
        becomeVisible: "becomeVisible 1s ease-in-out 5s normal forwards",
      },
    },
  },
  plugins: [],
};
