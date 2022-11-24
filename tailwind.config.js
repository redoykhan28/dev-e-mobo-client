/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FE9703",

          "secondary": "#FAC261",

          "accent": "#3A4256",

          "neutral": "#ffffaf",

          "base-100": "#FFFFFF",

          "info": "#F66240",

          "success": "#eaebed",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
