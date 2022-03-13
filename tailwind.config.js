const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        13: "3.25rem",
        18: "4.5rem",
        25: "6.25rem",
      },
      fontSize: {
        xxs: ".625rem",
      },
      animation: {
        "spin-loader": "spin 3s linear infinite",
        "spin-slow": "spin 15s linear infinite",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
    fontFamily: {
      poppins: ["poppins", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
      madeOuterSans: ["madeOuterSans", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      primary: "#8F59E8",
      blue: {
        dark: "#1D1D3C",
        light: "#3772FF",
        link: "#6F8FE9",
        banner: "#A9DCFF",
        gray: "#F3F5FA",
      },
      tooltip: "#263238",
      green: "#45B26B",
      red: "#FF1E1E",
      yellow: "#FFC700",
      pink: "#EF466F",
      gray: {
        ...colors.gray,
        tab: "#353945",
        bg: "#FCFCFD",
      },
      black: "#000000",
      white: "#FFFFFF",
      dark: "#0B0B0B",
      transparent: "transparent",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
