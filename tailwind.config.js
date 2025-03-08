/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-desktop": "1.2fr 3fr",
        "layout-mobile": "1fr",
        "forecast-desktop": "repeat(5, 8em)",
        "forecast-mobile": "repeat(2, 8em)",
      },
      gridTemplateRows: {
        "layout-desktop": "1fr 2fr 1fr",
        "layout-mobile": "max-content max-content max-content 6rem",
      },
    },
  },
  plugins: [],
};
