const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work\\ Sans", "Archivo", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#79a39d",
          200: "#63938c",
          300: "#4d847c",
          400: "#36746b",
          500: "#20655b",
          600: "#1d5b52",
          700: "#1a5149",
          800: "#164740",
          900: "#133d37",
        },
        secondary: {
          100: "#746a79",
          200: "#5d5163",
          300: "#45384d",
          400: "#2e1f36",
          500: "#170620",
          600: "#15051d",
          700: "#12051a",
          800: "#100416",
          900: "#0e0413",
        },
        content: "#E8E8E8",
      },
    },
  },
  plugins: [],
};
