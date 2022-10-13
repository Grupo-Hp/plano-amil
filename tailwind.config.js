/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4624fb',
        secondary: '#29204b',
        blueAmil: '#00adff'
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}