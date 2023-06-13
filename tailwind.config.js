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
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200%": "200%",
    },
    extend: {
      colors: {
        accentColor: "#4dcbf5",
        accentColorLight: "#68d9ff",
        accentColorDark: "#2692b6",
        CTAColorLight: "#ff6f27",
        CTAColorDark: "#a73c0b",
        CTAColor: "#e06020",
        bgColorDark: "#34393e",
        bgColorDarkLight: "#2f3338",
        bgColorDarkDark: "#383d42",
        bgColorLight: "#e7efff",
        white: "#ffffff",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        ctaButtonHover: "5px 5px 0px #ab1b0b, -5px -5px 0px #e1530a;",
        ctaButton: "0px 0px 10px #ab1b0b;",
        buttonHover: "5px 5px 0px #2a2e32, -5px -5px 0px #3e444a;",
        button: "5px 5px 10px #2a2e32, -5px -5px 10px #3e444a;",
        inputField: "inset 5px 5px 10px #bbc2cf, inset -5px -5px 10px #ffffff;",
        inputFieldValid: "  5px 5px 10px #bbc2cf, -5px -5px 10px #ffffff;",
        inputFieldDark:
          "inset 9px 9px 18px #222030, inset -9px -9px 18px #2c283e;",
        inputFieldDarkValid: "5px 5px 10px #222030, -9px -9px 18px #2c283e;",
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
