/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#70ACC7",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
    },
  },
  plugins: [
    require("daisyui")
  ],
}