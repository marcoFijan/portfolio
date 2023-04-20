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
    colors: {
      accentColor: "#3fabaf",
      CTAColor: "#FD5825",
      bgColorDark: "#222222",
      bgColorLight: "#F7EFE5",
      white: "#ffffff",
    },
    extend: {
      maxWidth: {
        wrapper: "110rem",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(25em, 1fr));",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      keyframes: {
        lines: {
          "0%": {
            width: 0,
            height: 0,
            "border-top": "4px solid #3fabaf",
            "border-bottom": "4px solid #3fabaf",
          },
          "50%": {
            width: "100%",
            height: 0,
            padding: "0",
            "border-top": "4px solid #3fabaf",
            "border-bottom": "4px solid #3fabaf",
          },
          "90%": {
            width: "100%",
            height: "12rem",
            padding: "2rem 0",
            "border-top": "8px solid white",
            "border-bottom": "8px solid white",
          },
          "100%": {
            width: "100%",

            padding: "2rem 0",
            "border-top": "8px solid white",
            "border-bottom": "8px solid white",
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
