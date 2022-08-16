/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#424632",

          secondary: "#707F9B",

          accent: "#A68C2B",

          neutral: "#292524",

          "base-100": "#292524",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      brightness: { 25: ".45" },
    },
  },
  plugins: [require("daisyui")],
};
