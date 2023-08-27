/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/assets/home-img.jpeg')"
      },
      fontFamily: {
        
        Style: "Style Script",
        Josefin: "Josefin Sans",
        Alegreya: "Alegreya Sans",
        Calistoga: "Calistoga",
        Pacifico: "Pacifico"
      }
    },
  },
  plugins: [],
}

