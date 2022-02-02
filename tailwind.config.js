module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nalieta: ["nalieta", "sans-serif", "helvetica"],
      },
      width: {
        300: "300px",
      },
      height: {
        300: "300px",
      },
    },
  },
  plugins: [],
};
