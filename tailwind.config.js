/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'foundationOrange': '#FD6F00',
      'BackgroundMain': '#121212',
      'whiteColor': '#FEFEFE',
      'greyColor': '#707070',
      'sectionBg': '#1b1b1b',
    },
    fontFamily: {
      lato: ["Lato", "serif"],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #FD6F00 0%, #FD6F00 100%)',
      },
    },
    
  },
  plugins: [],
}

