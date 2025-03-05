/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-desktop": "30vw 1fr",
        "layout-mobile": "1fr",
        "forecast-desktop": "repeat(5, minmax(8em, 1fr));",
      },
      gridTemplateRows: {
        "layout-desktop": "max-content max-content 6rem",
        "layout-mobile": "max-content max-content max-content 6rem",
      },
    },
  },
  plugins: [],
};
