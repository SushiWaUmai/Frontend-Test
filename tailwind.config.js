/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#92C6A7",
        "secondary": "#7544FC",
        "select": "#FF6F4B",
      }
    },
  },
  plugins: [],
}

