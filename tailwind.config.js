/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        Raleway: "Raleway",
      },
      colors: {
        primary: "#DA72CC",
        secondary: "#6F7DFB",
      },
    },
  },
  plugins: [],
};
