/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f6212",

          secondary: "#0c4a6e",

          accent: "#713f12",

          neutral: "#3f6212",

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
