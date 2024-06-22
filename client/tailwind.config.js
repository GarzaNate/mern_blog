const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#0D0D0D",
      secondaryW: "#FFFFFF",
      secondaryG: "#2F2F2F",
      secondaryS: "#C0C0C0",
      accentB: "#007BFF",
      accentR: "#B22222",
      accentG: "#50C878",
      neutralG: "#B0B0B0",
      neutralB: "#F5F5DC",
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}