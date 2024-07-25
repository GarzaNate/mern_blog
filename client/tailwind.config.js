import { text } from "express";

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
      primary: { // blue: buttons, links, etc
        light: "#007BFF",
        DEFAULT: "#007BFF",
        dark: "#007BFF",
      },
      secondary: { // light blue: secondary elements 
        light: "#6c757d",
        DEFAULT: "#6c757d",
        dark: "#6c757d",
      },
      background: { // main background
        light: "#FFFFFF",
        DEFAULT: "#FFFFFF",
        dark: "#121212", // dark mode background
      },
      text: { // text color
        light: "#343a40", // dark grey
        DEFAULT: "##343a40",
        dark: "#e0e0e0", // light grey
      },
      border: {  // border color
        light: "#e0e0e0", // light grey
        DEFAULT: "#e0e0e0",
        dark: "#2c2c2c", // dark grey
      },
      accent: { // yellow: accent color 
        light: "#FFC107",
        DEFAULT: "#FFC107",
        dark: "#007BFF",
      }
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}