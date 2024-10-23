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
        accentColor: "#ff6f27",
        colorBg: "#0d0d0d",
        accentColorLight: "#68d9ff",
        accentColorDark: "#2692b6",
        CTAColorLight: "#ff6f27",
        CTAColorDark: "#a73c0b",
        CTAColor: "#e06020",
        bgColorDark: "#34393e",
        bgColorDarkLight: "#2f3338",
        bgColorDarkDark: "#202224",
        bgColorLight: "#16192A",
        colorBgDark: "#1a1a1a",
        colorBgLight: "#dbdbdb",
        colorTextDark: "#011923",
        colorAccentColor: "#db0021",
        // colorAccentColorDarken: "#d1571a",
        // colorAccentColorDark: "#a04c22",
        white: "#ffffff",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        ctaButtonHover: "5px 5px 0px #ab1b0b, -5px -5px 0px #e1530a;",
        ctaButton: "0px 0px 10px #ab1b0b;",
        buttonLight: "  5px 5px 10px #bbc2cf, -5px -5px 10px #ffffff;",
        buttonHover: "5px 5px 0px #2a2e32, -5px -5px 0px #3e444a;",
        button: "5px 5px 10px #2a2e32, -5px -5px 10px #3e444a;",
        darkInner: "inset 5px 5px 10px #202224, inset -5px -5px 10px #2f3338;",
        // inputField:
        //   "inset 20px 20px 76px #100522, inset -20px -20px 76px #180936;",
        inputFieldValid: "20px 20px 76px #0c041a, -20px -20px 76px #1c0a3e;",
        inputFieldDark:
          "inset 20px 20px 76px #100522, inset -20px -20px 76px #180936;",
        inputFieldDarkValid:
          "inset 20px 20px 76px #100522, inset -20px -20px 76px #180936;",
      },

      padding: {
        articlePadding: "3rem",
        articlePaddingMobile: "1rem",
      },
      margin: {
        "1/2-height": "50vh",
        "3/5-height": "65vh",
      },
      maxWidth: {
        wrapper: "80rem",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(23em, 1fr));",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        mayor: ["Mayor", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        lines: {
          "0%": {
            width: 0,
            height: 0,
            "border-top": "2px solid #8e0e57",
            "border-bottom": "2px solid #8e0e57",
          },
          "50%": {
            width: "100%",
            height: 0,
            padding: "0",
            "border-top": "2px solid #8e0e57",
            "border-bottom": "2px solid #8e0e57",
          },
          "90%": {
            width: "100%",
            height: "7.5rem",
            padding: "1rem 0",
            "border-top": "4px solid #0e0e0e",
            "border-bottom": "4px solid #0e0e0e",
          },
          "100%": {
            width: "100%",
            padding: "1rem 0",
            "border-top": "4px solid #0e0e0e",
            "border-bottom": "4px solid #0e0e0e",
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
        becomeHidden: {
          "0%": {
            opacity: "1",
            display: "flex",
            "z-index": 50,
          },
          "90%": {
            opacity: "0",
            display: "flex",
            "z-index": 50,
          },
          "100%": {
            opacity: "0",
            display: "none",
            "z-index": -50,
          },
        },
      },
      animation: {
        lines: "lines 3s ease-in-out forwards",
        becomeVisible: "becomeVisible 1s ease-in-out 5s normal forwards",
        becomeHidden: "becomeHidden 1s ease-in-out 0s normal forwards",
      },
    },
  },
  plugins: [],
};
