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
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
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

