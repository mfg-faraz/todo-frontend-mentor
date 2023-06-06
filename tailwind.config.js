/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
        "xs":"375px"
      },
      colors: {
        "primary": "hsl(220, 98%, 61%)",
        "primary-gradient-100": "hsl(192, 100%, 67%)",
        "primary-gradient-200": "hsl(280, 87%, 65%)",

        "light-100": "hsl(0, 0%, 98%)",
        "light-200": "hsl(236, 33%, 92%)",
        "light-300": "hsl(233, 11%, 84%)",
        "light-400": "hsl(236, 9%, 61%)",
        "light-500": "hsl(235, 19%, 35%)",

        "dark-100": "hsl(235, 21%, 11%)",
        "dark-200": "hsl(235, 24%, 19%)",
        "dark-300": "hsl(234, 39%, 85%)",
        "dark-400": "hsl(234, 11%, 52%)",
        "dark-500": "hsl(233, 14%, 35%)",
        "dark-600": "hsl(237, 14%, 26%)",
        "dark-hover": "hsl(236, 33%, 92%)",
      },
      backgroundImage: (theme) => ({
        'image-light-desktop':
          "url('./assets/images/bg-desktop-light.jpg')",
        'image-light-mobile':
          "url('./assets/images/bg-mobile-light.jpg')",
        'image-dark-desktop':
          "url('./assets/images/bg-desktop-dark.jpg')",
        'image-dark-mobile':
          "url('./assets/images/bg-mobile-dark.jpg')",
      }),
    },
  },

  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
}
