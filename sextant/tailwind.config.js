/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mindaro": "#CFF27E",
        "arylide": "#F2DD6E",
        "hunyadi": "#E5B25D",
        "copper": "#B87D4B",
        'van-dyke': "#523A34"
      }
    },
  },
  plugins: [],
}
