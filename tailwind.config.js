/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        'full':'100vh',
        '70vh':'70vh'
      },
      padding:{
        '1.5':'1.5px'
      },
      borderRadius:{
        'custom-border':'12px'
      }
        },
  },
  plugins: [],
}

