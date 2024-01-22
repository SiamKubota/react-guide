const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: [
        "'Montserrat'",
        "sans-serif",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {},
  },
  plugins: [],
};
