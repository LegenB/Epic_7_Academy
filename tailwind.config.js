
const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'space': `url('${join(__dirname, 'src/images/Backgrounds/EpicSpace.jpg')}')`,
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}